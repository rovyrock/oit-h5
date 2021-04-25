import React from "react";
import { View, Text } from "@tarojs/components";
import {
  ComponentProvider,
  Toast,
  Button,
} from "tea-component-mobile";

export default function ToastExample() {
  return (
    <ComponentProvider>
      <View className="page">
        <Text className="header">Toast 轻提示</Text>
        <View className="section">
          <Button onClick={() => Toast.show({ content: "提示" })}>
            文本提示
          </Button>
        </View>
        <View className="section">
          <Button onClick={() => Toast.loading({ content: "加载中" })}>
            Loading
          </Button>
        </View>
        <View className="section">
          <Button
            onClick={() =>
              Toast.show({
                content: "成功提示",
                icon: { name: "success", color: "#ffffff" },
              })
            }
          >
            自定义图标
          </Button>
        </View>
        <View className="section">
          <Button type="danger" onClick={() => Toast.hide()}>
            隐藏提示
          </Button>
        </View>
      </View>
    </ComponentProvider>
  );
}
