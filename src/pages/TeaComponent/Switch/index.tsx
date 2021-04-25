import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { Switch, List } from "tea-component-mobile";


export default function SwitchExample() {
  const [checked, onChange] = useState(false);

  return (
    <View className="page">
      <Text className="header">Switch 开关</Text>
      <List title="基本用法">
        <List.Item title="基本用法">
          <Switch defaultChecked onChange={console.log} />
        </List.Item>

        <List.Item title="受控用法">
          <Switch checked={checked} onChange={onChange} />
        </List.Item>

        <List.Item title="禁用状态">
          <Switch defaultChecked disabled />
        </List.Item>

        <List.Item title="加载状态">
          <Switch defaultChecked loading />
        </List.Item>

        <List.Item title="自定义大小">
          <Switch defaultChecked size={36} />
        </List.Item>

        <List.Item title="自定义大小">
          <Switch defaultChecked size={72} />
        </List.Item>

        <List.Item title="自定义颜色">
          <Switch defaultChecked color="#07C160" />
        </List.Item>
      </List>
    </View>
  );
}