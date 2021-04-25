import { Component } from 'react';
import classNames from "classnames";
import { View } from '@tarojs/components'
import { Cell } from './cell';
import { sum } from '../../utils';

export class Row extends Component {

  render() {
    const { data, style, className, widthArr, height, flexArr, ...props } = this.props;
    let width = widthArr ? sum(widthArr) : 0;

    const tableRowClassName = classNames("db-table-row", className);

    return data ? (
      <View className={tableRowClassName}>
        {data.map((item, i) => {
          const flex = flexArr && flexArr[i];
          const wth = widthArr && widthArr[i];
          return <Cell key={i} data={item} width={wth} height={height} flex={flex} {...props} />;
        })}
      </View>
    ) : null;
  }
}

export class Rows extends Component {


  render() {
    const { data, style, className, widthArr, heightArr, flexArr, ...props } = this.props;
    const flex = flexArr ? sum(flexArr) : 0;
    const width = widthArr ? sum(widthArr) : 0;

    const tableRowsClassName = classNames("db-table-rows", className);
    


    return data ? (
      <View className={tableRowsClassName}>
        {data.map((item, i) => {
          const height = heightArr && heightArr[i];
          return (
            <Row
              key={i}
              data={item}
              widthArr={widthArr}
              height={height}
              flexArr={flexArr}
              style={style}
              {...props}
            />
          );
        })}
      </View>
    ) : null;
  }
}