import React from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { Select } from "tea-component-mobile";


const options = [
  { text: "芝士霉霉", value: "1" },
  { text: "多肉葡挞", value: "2" },
  { text: "芋泥波波", value: "3" },
  { text: "椰椰奶冻", value: "4" },
];

export default function SelectExample() {
  return (
    <View className="page">
      <Text className="header">Select 下拉选择</Text>
      <Text className="header">基本用法</Text>

      <Select placeholder="奶茶" options={options} onChange={console.log} />

      <Text className="header">多选</Text>
      <Select
        multiple
        all={{ value: "all", text: "全部" }}
        placeholder="奶茶"
        options={options}
        defaultValue={["1", "3"]}
        onChange={console.log}
      />

      <Text className="header">加载中</Text>
      <Select loading placeholder="奶茶" options={options} />

      
    </View>
  );
}
