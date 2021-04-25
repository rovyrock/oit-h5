import React from "react";
import { View, Text } from "@tarojs/components";
import { SegmentedControl } from "tea-component-mobile";

export default function SegmentedControlExample() {
  return (
    <View className="page">
      <Text className="header">SegmentedControl 分段器</Text>
      <Text className="header">基本用法</Text>
      <SegmentedControl
        values={["实时", "昨天", "近7天"]}
        onChange={console.log}
      />
    </View>
  );
}