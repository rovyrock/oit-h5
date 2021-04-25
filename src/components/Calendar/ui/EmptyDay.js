import React from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import * as constant from '../common/constant';

const MAP = {
  [constant.TYPE_PRE_MONTH]: 'pre',
  [constant.TYPE_NOW_MONTH]: 'now',
  [constant.TYPE_NEXT_MONTH]: 'next'
};

export default function EmptyDay(props) {
  const { item } = props;
  return (
    <View
      key={`list-item-${item.value}-${item.type}`}
      className={classnames(
        'flex__item'
      )}
    >
      <View className='flex__item-container'>
        <View className='container-text'>&nbsp;</View>
      </View>
      
    </View>
  );
}

