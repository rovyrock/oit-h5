import React from "react";
import { View, Text } from "@tarojs/components";
import { Badge, Button } from "tea-component-mobile";

export default function BadgeExample() {
  return (
    <View className="page">
      <Text className="header">Badge 徽章</Text>

      <View className="section">
        <Text className="header">数字</Text>
        <Badge info="99+">
          <Button>数字</Button>
        </Badge>
      </View>

      <View className="section">
        <Text className="header">文本</Text>
        <Badge info="New">
          <Button>文本</Button>
        </Badge>
      </View>

      <View className="section">
        <Text className="header">小红点</Text>
        <Badge dot>
          <Button>小红点</Button>
        </Badge>
      </View>

      <View className="section">
        <Text className="header">方形</Text>
        <Badge square info="88折">
          <Button className="long-button">配合长按钮使用</Button>
        </Badge>
      </View>

      <View className="section">
        <Text className="header">自定义背景色</Text>
        <Badge square info="88折" color="#FF9C19">
          <Button className="long-button">配合长按钮使用</Button>
        </Badge>
      </View>
    </View>
  );
}