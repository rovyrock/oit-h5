import { Component } from 'react';
import classNames from "classnames";
import { View } from '@tarojs/components'

import { Cell } from './cell';
import { sum } from '../../utils';

export class Col extends Component {


  render() {
    const { data, style, className, width, heightArr, flex, ...props } = this.props;
    const tableColClassName = classNames("db-table-col", className);
    return data ? (
      <View className={tableColClassName}>
        {data.map((item, i) => {
          const height = heightArr && heightArr[i];
          return <Cell key={i} data={item} width={width} height={height} {...props} />;
        })}
      </View>
    ) : null;
  }
}

export class Cols extends Component {
 

  render() {
    const { data, style, className, widthArr, heightArr, flexArr, ...props } = this.props;
    let width = widthArr ? sum(widthArr) : 0;

    const tableColsClassName = classNames("db-table-cols", className);

    return data ? (
      <View className={tableColsClassName}>
        {data.map((item, i) => {
          const flex = flexArr && flexArr[i];
          const wth = widthArr && widthArr[i];
          return (
            <Col
              key={i}
              data={item}
              width={wth}
              heightArr={heightArr}
              flex={flex}
              style={style}
              {...props}
            />
          );
        })}
      </View>
    ) : null;
  }
}

// const styles = StyleSheet.create({
//   cols: { flexDirection: 'row' }
// });
