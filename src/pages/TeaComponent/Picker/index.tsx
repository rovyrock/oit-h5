import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { Picker, Form } from "tea-component-mobile";

const data = {
  selector: ["美国", "中国", "巴西", "日本"],
  selectorChecked: "美国",
  dateSel: "2018-04-22",
  multiArray: [
    ["无脊柱动物", "脊柱动物"],
    ["扁性动物", "线形动物", "环节动物", "软体动物", "节肢动物"],
    ["猪肉绦虫", "吸血虫"],
  ],
};

export default function PickerExample() {
  const [selectorValue, setSelectorValue] = useState<any>(null);
  const [multiSelectorValue, setMultiSelectorValue] = useState([0, 0, 0]);
  const [timeSelectorValue, setTimeSelectorValue] = useState<any>(null);
  const [dateSelectorValue, setDateSelectorValue] = useState<any>(null);
  const [regionSelectorValue, setRegionSelectorValue] = useState([
    "广东省",
    "广州市",
    "海珠区",
  ]);

  return (
    <View className="page">
      <Text className="header">Picker 选择器</Text>
      <Form title="基本用法">
        <Picker
          mode="selector"
          range={data.selector}
          value={selectorValue}
          onChange={value => {
            console.log(value);
            setSelectorValue(value);
          }}
        >
          <Form.Item label="普通选择器" placeholder="请选择" arrow>
            {data.selector[selectorValue]}
          </Form.Item>
        </Picker>

        <Picker
          mode="multiSelector"
          range={data.multiArray}
          value={multiSelectorValue}
          onChange={value => {
            console.log(value);
            setMultiSelectorValue(value);
          }}
        >
          <Form.Item label="多列选择器" placeholder="请选择" arrow>
            {data.multiArray[0][multiSelectorValue[0]]}，
            {data.multiArray[1][multiSelectorValue[1]]}，
            {data.multiArray[2][multiSelectorValue[2]]}
          </Form.Item>
        </Picker>

        <Picker
          mode="time"
          value={timeSelectorValue}
          onChange={value => {
            console.log(value);
            setTimeSelectorValue(value);
          }}
        >
          <Form.Item label="时间选择器" placeholder="请选择" arrow>
            {timeSelectorValue}
          </Form.Item>
        </Picker>

        <Picker
          mode="date"
          value={dateSelectorValue}
          onChange={value => {
            console.log(value);
            setDateSelectorValue(value);
          }}
        >
          <Form.Item label="日期选择器" placeholder="请选择" arrow>
            {dateSelectorValue}
          </Form.Item>
        </Picker>
      </Form>

      <Form title="小程序可用">
        <Picker
          mode="region"
          value={regionSelectorValue}
          onChange={value => {
            console.log(value);
            setRegionSelectorValue(value);
          }}
        >
          <Form.Item label="地区选择器" placeholder="请选择" arrow>
            {regionSelectorValue}
          </Form.Item>
        </Picker>
      </Form>
    </View>
  );
}