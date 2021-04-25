import React from "react";
import { View, Text } from "@tarojs/components";
import { WhiteSpace, Button } from "tea-component-mobile";


export default function WhiteSpaceExample() {
  return (
    <View className="page">
      <Text className="header">WhiteSpace 留白</Text>

      <Text className="header">上下留白</Text>
      <View className="demo-box" />
      <WhiteSpace />
      <View className="demo-box" />

      <Text className="header">两侧留白</Text>
      <WhiteSpace>
        <View className="demo-box" />
        <WhiteSpace />
        <View className="demo-box" />
      </WhiteSpace>

      <Text className="header">
        底部留白（为贴底 Button 等组件上部预留空间）
      </Text>
      <View className="demo-fixed">
        <View className="demo-box" />
        <Button fixed type="primary">
          贴底按钮
        </Button>
        <WhiteSpace bottom />
      </View>
    </View>
  );
}