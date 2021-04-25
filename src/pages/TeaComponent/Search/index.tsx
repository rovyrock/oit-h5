import React from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { Search } from "tea-component-mobile";

export default function SearchExample() {
  return (
    <View className="page">
      <Text className="header">Search 搜索</Text>
      <View className="header">基本用法</View>
      <Search placeholder="开始搜索吧~" onSearch={console.log} />
      <View className="header">禁用状态</View>
      <Search placeholder="开始搜索吧~" disabled />
      <View className="header">显示取消按钮</View>
      <Search
        placeholder="开始搜索吧~"
        showCancel
        onCancel={() => console.log("取消搜索")}
      />
      <View className="header">不显示搜索图标</View>
      <Search placeholder="开始搜索吧~" hideIcon />

      <View className="header">与顶栏结合的下拉选择</View>
      <View className="header">
        见{" "}
        <View
          className="link"
          onClick={() => {
            Taro.navigateTo({ url: "/header-bar/demo/index" });
          }}
        >
          HeaderBar
        </View>{" "}
        组件。
      </View>
    </View>
  );
}