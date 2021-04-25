import React from 'react';
import { View } from '@tarojs/components';
import * as constant from '../../common/constant';

export default class AtCalendarHeader extends React.Component {
    render() {
        const { startFromMonday } = this.props;
        console.log(this.props, "startFromMonday", startFromMonday);
        const getWeekdays = (firstDay = startFromMonday ? 1 : 0) => {
            let from = firstDay;
            const weekdays = [];
            for (let i = 0; i < constant.TYPE_WEEKDAYS.length; i++) {
                weekdays.push(constant.TYPE_WEEKDAYS[from]);
                from = from >= constant.TYPE_WEEKDAYS.length - 1 ? 0 : from + 1;
            }
            return weekdays;
        };
        const weekdays = getWeekdays();
    return (
      <View className='at-calendar__header header'>
        <View className='header__flex'>
          {weekdays.map((item,index)=><View key={index} className='header__flex-item'>{item}</View>)}
          {/* <View className='header__flex-item'>日</View> */}
          {/* <View className='header__flex-item'>一</View>
          <View className='header__flex-item'>二</View>
          <View className='header__flex-item'>三</View>
          <View className='header__flex-item'>四</View>
          <View className='header__flex-item'>五</View>
          <View className='header__flex-item'>六</View>
          <View className='header__flex-item'>日</View> */}
        </View>
      </View>
    )
  }
}
