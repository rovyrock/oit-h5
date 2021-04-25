import React from "react";
import { View, Text } from "@tarojs/components";
import { Tag } from "tea-component-mobile";



export default function TagExample() {
  return (
    <View className="page">
      <Text className="header">Tag 标签</Text>

      <Text className="header">基本用法</Text>
      <View className="section">
        <Tag>标签</Tag>
        <Tag type="primary">标签</Tag>
        <Tag type="success">标签</Tag>
        <Tag type="warning">标签</Tag>
        <Tag type="danger">标签</Tag>
      </View>

      <Text className="header">圆角样式</Text>
      <View className="section">
        <Tag round>标签</Tag>
        <Tag round type="primary">
          标签
        </Tag>
        <Tag round type="success">
          标签
        </Tag>
        <Tag round type="warning">
          标签
        </Tag>
        <Tag round type="danger">
          标签
        </Tag>
      </View>

      <Text className="header">空心样式</Text>
      <View className="section">
        <Tag outline>标签</Tag>
        <Tag outline type="primary">
          标签
        </Tag>
        <Tag outline type="success">
          标签
        </Tag>
        <Tag outline type="warning">
          标签
        </Tag>
        <Tag outline type="danger">
          标签
        </Tag>
      </View>
    </View>
  );
}
