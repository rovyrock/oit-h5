import React, { Component } from 'react';
import { View } from '@tarojs/components'
import classNames from "classnames";

export class Table extends Component {
 
  _renderChildren(props) {
    return React.Children.map(props.children, child =>
      React.cloneElement(
        child,
        props.style && child.type.displayName !== 'ScrollView' ? { style: props.style } : {}
      )
    );
  }

  render() {
    const { style, className } = this.props;
    const borderLeftWidth = (style && style.borderWidth) || 0;
    const borderBottomWidth = borderLeftWidth;
    const borderColor = (style && style.borderColor) || '#000';

    const tableClassName = classNames("db-table", className);

    return (
      <View
        className={tableClassName}
      >
        {this._renderChildren(this.props)}
      </View>
    );
  }
}

export class TableWrapper extends Component {
 
  _renderChildren(props) {
    return React.Children.map(props.children, child =>
      React.cloneElement(child, props.style ? { style: props.style } : {})
    );
  }

  render() {
    const { style,className } = this.props;
    return <View style={style} className={className}>{this._renderChildren(this.props)}</View>;
  }
}
