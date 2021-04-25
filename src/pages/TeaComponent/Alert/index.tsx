import React from "react";
import { View, Text } from "@tarojs/components";
import { Alert } from "tea-component-mobile";

export default function AlertExample() {
  return (
    <View className="page">
      <Text className="header">Alert 提示条</Text>
      <Text className="header">基本用法</Text>

      <Alert type="info">提示内容</Alert>
      <Alert type="success">成功提示</Alert>
      <Alert type="warning">警告提示</Alert>
      <Alert type="error">错误提示</Alert>

      <Text className="header">可关闭</Text>

      <Alert
        type="info"
        closeable
        onClose={() => {
          console.log("close");
        }}
      >
        这个是可关闭提示条
      </Alert>

      <Text className="header">自动关闭</Text>
      <Alert type="success" duration={3000}>
        成功提示
      </Alert>
    </View>
  );
}