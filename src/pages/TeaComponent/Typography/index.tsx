import React from "react";
import { View, Text } from "@tarojs/components";
import { Typography } from "tea-component-mobile";

export default function TypographyExample() {
  return (
    <View className="page">
      <Text className="header">Typography 排版</Text>
      <Text className="header">标题</Text>
      <View className="section">
        <Typography.Heading>一级标题</Typography.Heading>
        <Typography.Heading level={2}>二级标题</Typography.Heading>
        <Typography.Heading level={3}>三级标题</Typography.Heading>
        <Typography.Heading level={4}>四级标题</Typography.Heading>
        <Typography.Heading level={5}>五级标题</Typography.Heading>
      </View>

      <Text className="header">文本</Text>
      <View className="section">
        <View>
          <Typography.Text>default 基本文字</Typography.Text>
        </View>
        <View>
          <Typography.Text theme="light">light 较浅文字</Typography.Text>
        </View>
        <View>
          <Typography.Text theme="disabled">disabled 禁用文字</Typography.Text>
        </View>
        <View>
          <Typography.Text theme="primary">primary 主文字</Typography.Text>
        </View>
        <View>
          <Typography.Text theme="success">success 成功文字</Typography.Text>
        </View>
        <View>
          <Typography.Text theme="warning">warning 警告文字</Typography.Text>
        </View>
        <View>
          <Typography.Text theme="danger">danger 异常文字</Typography.Text>
        </View>
      </View>

      <Text className="header">超链接</Text>
      <View className="section">
        <Typography.Link url="">超链接</Typography.Link>
      </View>

      <Text className="header">溢出省略</Text>
      <View className="section">
        <Typography.Heading level={3} ellipsis>
          两只老虎爱跳舞，小兔子乖乖拔萝卜，我和小鸭子学走路，童年是最美的礼物。
        </Typography.Heading>
        <Typography.Text ellipsis>
          两只老虎爱跳舞，小兔子乖乖拔萝卜，我和小鸭子学走路，童年是最美的礼物。
        </Typography.Text>
      </View>
    </View>
  );
}