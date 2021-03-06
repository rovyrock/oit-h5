import * as React from 'react'
import { Models } from './DataTypes'
import PropsType from './CalendarPanelProps'
import { formatDate, shallowEqual } from '../util'

import defaultLocale from '../locale/zh_CN'

export interface StateType {
  months: Models.MonthData[]
}
export default abstract class CalendarPanel extends React.Component<PropsType, StateType> {
  static defaultProps = {
    prefixCls: 'rmc-calendar',
    infinite: false,
    defaultDate: new Date(),
    initalMonths: 6,
    locale: defaultLocale,
    firstDayOfMonth: 1,
    firstDayOfWeek: 0,
  } as PropsType

  visibleMonth: Models.MonthData[] = []
  abstract genMonthComponent: (data: Models.MonthData) => React.ReactNode

  constructor(props: PropsType) {
    super(props)

    this.state = {
      months: [],
    }
  }

  shouldComponentUpdate(nextProps: PropsType, nextState: StateType, nextContext: any) {
    return !shallowEqual(this.props, nextProps, ['startDate', 'endDate', 'defaultDate']) ||
      !shallowEqual(this.state, nextState) ||
      !shallowEqual(this.context, nextContext)
  }

  componentWillReceiveProps(nextProps: PropsType) {
    const oldValue = this.props
    const newValue = nextProps
    if (oldValue.startDate !== newValue.startDate || oldValue.endDate !== newValue.endDate || oldValue.defaultDate !== newValue.defaultDate) {
      if (oldValue.startDate) {
        this.selectDateRange(oldValue.startDate, oldValue.endDate, true)
      }
      if (newValue.startDate) {
        this.selectDateRange(newValue.startDate, newValue.endDate)
      }
    }
  }

  componentWillMount() {
    this.genMonth()
  }

  genMonth() {
    const { initalMonths = 6, defaultDate } = this.props
    for (let i = 0; i < initalMonths; i++) {
      this.canLoadNext() && this.genMonthData(defaultDate, i)
    }
    this.visibleMonth = [...this.state.months]
  }

  getMonthDate(date = new Date(), addMonth = 0) {
    const y = date.getFullYear()
    const m = date.getMonth()
    const { firstDayOfMonth } = this.props
    return {
      firstDate: new Date(y, m + addMonth, firstDayOfMonth),
      lastDate: new Date(y, m + 1 + addMonth, firstDayOfMonth && firstDayOfMonth - 1),
    }
  }

  canLoadPrev() {
    const { minDate } = this.props
    return !minDate || this.state.months.length <= 0 || +this.getMonthDate(minDate).firstDate < +this.state.months[0].firstDate
  }

  canLoadNext() {
    const { maxDate } = this.props
    return !maxDate || this.state.months.length <= 0 || +this.getMonthDate(maxDate).firstDate > +this.state.months[this.state.months.length - 1].firstDate
  }

  getDateWithoutTime = (date?: Date) => {
    if (!date) return 0
    return +new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    )
  }

  genWeekData = (firstDate: Date) => {
    const minDateTime = this.getDateWithoutTime(this.props.minDate)
    const maxDateTime = this.getDateWithoutTime(this.props.maxDate) || Number.POSITIVE_INFINITY
    const { firstDayOfWeek = 0, firstDayOfMonth = 1 } = this.props
    const weeks: Models.CellData[][] = []
    const nextMonth = this.getMonthDate(firstDate, 1).firstDate
    let currentDay = firstDate
    let currentWeek: Models.CellData[] = []
    weeks.push(currentWeek)

    let startWeekday = currentDay.getDay()
    startWeekday = startWeekday < firstDayOfWeek ? startWeekday + 7 : startWeekday
    if (startWeekday > firstDayOfWeek) {
      for (let i = firstDayOfWeek; i < startWeekday; i++) {
        currentWeek.push({} as Models.CellData)
      }
    }
    while (currentDay < nextMonth) {
      if (currentWeek.length === 7) {
        currentWeek = []
        weeks.push(currentWeek)
      }
      const dayOfMonth = currentDay.getDate()
      const tick = +currentDay
      currentWeek.push({
        tick,
        dayOfMonth,
        selected: Models.SelectType.None,
        isFirstOfMonth: dayOfMonth === firstDayOfMonth,
        isLastOfMonth: false,
        outOfDate: tick < minDateTime || tick > maxDateTime,
      })
      currentDay = new Date(currentDay.getTime() + 3600 * 24 * 1000)
    }
    currentWeek[currentWeek.length - 1].isLastOfMonth = true
    return weeks
  }

  genMonthData(date?: Date, addMonth = 0) {
    if (!date) {
      date = addMonth >= 0 ? this.state.months[this.state.months.length - 1].firstDate : this.state.months[0].firstDate
    }
    if (!date) {
      date = new Date()
    }
    const { locale } = this.props
    const { firstDate, lastDate } = this.getMonthDate(date, addMonth)

    const weeks = this.genWeekData(firstDate)
    const title = formatDate(firstDate, locale ? locale.monthTitle : 'yyyy/MM', this.props.locale)
    const data = {
      title,
      firstDate,
      lastDate,
      weeks,
    } as Models.MonthData
    data.component = this.genMonthComponent(data)
    if (addMonth >= 0) {
      this.state.months.push(data)
    } else {
      this.state.months.unshift(data)
    }
    const { startDate, endDate } = this.props
    if (startDate) {
      this.selectDateRange(startDate, endDate)
    }
    return data
  }

  inDate(date: number, tick: number) {
    return date <= tick && tick < date + 24 * 3600000
  }

  selectDateRange = (startDate: Date, endDate?: Date, clear = false) => {
    const { renderDateCellExtra, type } = this.props
    if (type === 'one') {
      endDate = undefined
    }
    const time1 = this.getDateWithoutTime(startDate)
    const time2 = this.getDateWithoutTime(endDate)
    const startDateTick = !time2 || time1 < time2 ? time1 : time2
    const endDateTick = time2 && time1 > time2 ? time1 : time2

    const unuseable: number[] = []
    let needUpdate = false
    this.state.months
      .forEach(m => {
        m.weeks.forEach(w => w
          .filter(d => {
            if (!endDateTick) {
              return d.tick && this.inDate(startDateTick, d.tick)
            } else {
              return d.tick && d.tick >= startDateTick && d.tick <= endDateTick
            }
          })
          .forEach(d => {
            const oldValue = d.selected
            if (clear) {
              d.selected = Models.SelectType.None
            } else {
              const info = (renderDateCellExtra && renderDateCellExtra(new Date(d.tick))) || {}
              if (d.outOfDate || info.disable) {
                unuseable.push(d.tick)
              }
              if (this.inDate(startDateTick, d.tick)) {
                if (type === 'one') {
                  d.selected = Models.SelectType.Single
                } else if (!endDateTick) {
                  d.selected = Models.SelectType.Only
                } else if (startDateTick !== endDateTick) {
                  d.selected = Models.SelectType.Start
                } else {
                  d.selected = Models.SelectType.All
                }
              } else if (this.inDate(endDateTick, d.tick)) {
                d.selected = Models.SelectType.End
              } else {
                d.selected = Models.SelectType.Middle
              }
            }
            needUpdate = needUpdate || d.selected !== oldValue
          }),
        )
        if (needUpdate && m.componentRef) {
          m.componentRef.updateWeeks()
          m.componentRef.forceUpdate()
        }
      })
  }

  computeVisible = (clientHeight: number, scrollTop: number) => {
    let needUpdate = false
    const MAX_VIEW_PORT = clientHeight * 2
    const MIN_VIEW_PORT = clientHeight

    // ???????????????????????????
    const filterFunc = (vm: Models.MonthData) => vm.y && vm.height && (vm.y + vm.height > scrollTop - MAX_VIEW_PORT && vm.y < scrollTop + clientHeight + MAX_VIEW_PORT)

    if (this.props.infinite && this.visibleMonth.length > 12) {
      this.visibleMonth = this.visibleMonth.filter(filterFunc).sort((a, b) => +a.firstDate - +b.firstDate)
    }

    // ??????????????????????????????
    if (this.visibleMonth.length > 0) {
      const last = this.visibleMonth[this.visibleMonth.length - 1]
      if (last.y !== undefined && last.height && last.y + last.height < scrollTop + clientHeight + MIN_VIEW_PORT) {
        const lastIndex = this.state.months.indexOf(last)
        for (let i = 1; i <= 2; i++) {
          const index = lastIndex + i
          if (index < this.state.months.length && this.visibleMonth.indexOf(this.state.months[index]) < 0) {
            this.visibleMonth.push(this.state.months[index])
          } else {
            this.canLoadNext() && this.genMonthData(undefined, 1)
          }
        }
        needUpdate = true
      }

      const first = this.visibleMonth[0]
      if (first.y !== undefined && first.height && first.y > scrollTop - MIN_VIEW_PORT) {
        const firstIndex = this.state.months.indexOf(first)
        for (let i = 1; i <= 2; i++) {
          const index = firstIndex - i
          if (index >= 0 && this.visibleMonth.indexOf(this.state.months[index]) < 0) {
            this.visibleMonth.unshift(this.state.months[index])
            needUpdate = true
          }
        }
      }
    } else if (this.state.months.length > 0) {
      this.visibleMonth = this.state.months.filter(filterFunc)
      needUpdate = true
    }

    return needUpdate
  }

  createOnScroll = () => {
    let timer: any
    let clientHeight = 0
    let scrollTop = 0

    return (data: { full: number, client: number, top: number }) => {
      const { client, top } = data
      clientHeight = client
      scrollTop = top

      if (timer) {
        return
      }

      timer = setTimeout(() => {
        timer = undefined
        if (this.computeVisible(clientHeight, scrollTop)) {
          this.forceUpdate()
        }
      }, 64)
    }
  }

  onCellClick = (day: Models.CellData) => {
    if (!day.tick) return
    this.props.onCellClick && this.props.onCellClick(new Date(day.tick))
  }
}
