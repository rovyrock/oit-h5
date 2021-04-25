import React from "react";
import { View, Text } from "@tarojs/components";
import { Progress } from "tea-component-mobile";

export default function ProgressExample() {
  return (
    <View className="page">
      <Text className="header">Progress 进度条</Text>

      <View className="section">
        <Text className="header">基本用法</Text>
        <Progress percent={50} />
      </View>

      <View className="section">
        <Text className="header">禁用状态</Text>
        <Progress percent={30} status="disabled" />
      </View>

      <View className="section">
        <Text className="header">成功状态</Text>
        <Progress percent={100} />
      </View>

      <View className="section">
        <Text className="header">警告状态</Text>
        <Progress percent={10} status="danger" />
      </View>

      <View className="section">
        <Text className="header">不展示描述内容</Text>
        <Progress percent={50} formatter={() => null} />
      </View>

      <View className="section">
        <Text className="header">自定义描述内容</Text>
        <Progress percent={40} formatter={percent => `${percent}/100`} />
      </View>
    </View>
  );
}