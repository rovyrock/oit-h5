import React from "react";
import { View, Text } from "@tarojs/components";
import { HeaderBar, Select } from "tea-component-mobile";

const options = [
  { text: "芝士霉霉", value: "1" },
  { text: "多肉葡挞", value: "2" },
  { text: "芋泥波波", value: "3" },
  { text: "椰椰奶冻", value: "4" },
];

export default function SelectExample() {
  return (
    <View className="page">
      <Text className="header">HeaderBar 顶栏</Text>

      <View className="header">基本用法</View>
      <HeaderBar>
        <Select placeholder="奶茶" options={options} onChange={console.log} />
      </HeaderBar>

      <HeaderBar>
        <Select placeholder="奶茶" options={options} onChange={console.log} />
        <Select
          multiple
          all={{ value: "all", text: "全部" }}
          placeholder="奶茶"
          options={options}
          onChange={console.log}
        />
      </HeaderBar>

      <HeaderBar>
        <Select loading placeholder="奶茶" />
        <Select placeholder="奶茶" options={options} onChange={console.log} />
        <Select
          multiple
          all={{ value: "all", text: "全部" }}
          placeholder="奶茶"
          options={options}
          onChange={console.log}
        />
      </HeaderBar>

      <View className="header">支持搜索</View>
      <HeaderBar searchable={{ onSearch: console.log }}>
        <Select placeholder="奶茶" options={options} onChange={console.log} />
      </HeaderBar>

      <HeaderBar searchable={{ onSearch: console.log }}>
        <Select placeholder="奶茶" options={options} onChange={console.log} />
        <Select
          multiple
          all={{ value: "all", text: "全部" }}
          placeholder="奶茶"
          options={options}
          onChange={console.log}
        />
      </HeaderBar>

      <HeaderBar searchable={{ onSearch: console.log }}>
        <Select loading placeholder="奶茶" />
        <Select placeholder="奶茶" options={options} onChange={console.log} />
        <Select
          multiple
          all={{ value: "all", text: "全部" }}
          placeholder="奶茶"
          options={options}
          onChange={console.log}
        />
      </HeaderBar>
    </View>
  );
}