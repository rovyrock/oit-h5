import React from "react";
import { View, Text } from "@tarojs/components";
import { Slider } from "tea-component-mobile";

export default function SliderExample() {
  return (
    <View className="page">
      <Text className="header">Slider 滑块</Text>

      <View className="section">
        <Text className="header">基本用法</Text>
        <Slider />
      </View>

      <View className="section">
        <Text className="header">禁用状态</Text>
        <Slider defaultValue={30} disabled />
      </View>

      <View className="section">
        <Text className="header">不展示描述内容</Text>
        <Slider defaultValue={50} formatter={() => null} />
      </View>

      <View className="section">
        <Text className="header">自定义描述内容</Text>
        <Slider defaultValue={40} formatter={value => `${value} 台`} />
      </View>

      <View className="section">
        <Text className="header">自定义取值范围</Text>
        <Slider defaultValue={40} max={50} min={10} />
      </View>

      <View className="section">
        <Text className="header">自定义步长</Text>
        <Slider step={10} />
      </View>
    </View>
  );
}