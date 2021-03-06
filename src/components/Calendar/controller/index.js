import classnames from 'classnames';
import dayjs from 'dayjs';
import React from 'react';
import { Picker, Text, View } from '@tarojs/components';

export default class AtCalendarController extends React.Component {
  render() {
    const { generateDate, minDate, maxDate, monthFormat, hideArrow } = this.props;


    const dayjsDate = dayjs(generateDate);
    const dayjsMinDate = !!minDate && dayjs(minDate);
    const dayjsMaxDate = !!maxDate && dayjs(maxDate);
    const isMinMonth = dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate);
    const isMaxMonth = dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate);
    const minDateValue = dayjsMinDate
      ? dayjsMinDate.format('YYYY-MM')
      : '';
    const maxDateValue = dayjsMaxDate
      ? dayjsMaxDate.format('YYYY-MM')
      : '';

    return (
      <View className='at-calendar__controller controller'>
        {hideArrow ? null : (
          <View
            className={classnames('controller__arrow controller__arrow--left', {
              'controller__arrow--disabled': isMinMonth
            })}
            onClick={this.props.onPreMonth.bind(this, isMinMonth)}
          />
        )}
        {/* <Picker
          mode='date'
          fields='month'
          end={maxDateValue}
          start={minDateValue}
          onChange={this.props.onSelectDate}
          value={dayjsDate.format('YYYY-MM')}
        >
          <Text className='controller__info'>
            {dayjsDate.format(monthFormat)}
          </Text>
        </Picker> */}
        <Text className='controller__info'>
            {dayjsDate.format(monthFormat)}
          </Text>
        {hideArrow ? null : (
          <View
            className={classnames(
              'controller__arrow controller__arrow--right',
              {
                'controller__arrow--disabled': isMaxMonth
              }
            )}
            onClick={this.props.onNextMonth.bind(this, isMaxMonth)}
          />
        )}
      </View>
    )
  }
}
