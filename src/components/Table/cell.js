import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import classNames from "classnames";

export class Cell extends Component {
  
  render() {
    const { data, className, width, height, flex, style, ...props } = this.props;
    const textDom = React.isValidElement(data) ? (
      data
    ) : (
      <Text {...props}>
        {data}
      </Text>
    );
    const borderTopWidth = (style && style.borderWidth) || 0;
    const borderRightWidth = borderTopWidth;
    const borderColor = (style && style.borderColor) || '#000';

    const tableCellClassName = classNames("db-table-cell", className);

    return (
      <View
        className={tableCellClassName}
      >
        {textDom}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   cell: { justifyContent: 'center' },
//   text: { backgroundColor: 'transparent' }
// });