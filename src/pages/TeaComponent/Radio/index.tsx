import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { Radio, List, Icon } from "tea-component-mobile";

const options = [
    { text: "芝士霉霉", value: "1" },
    { text: "多肉葡挞", value: "2" },
    { text: "芋泥波波", value: "3" },
    { text: "椰椰奶冻", value: "4" },
];
export default function RadioExample() {
    const [item, setItem] = useState(null);

    const [current, setCurrent] = useState("2")

    return (
        <View className="page">
            <Text className="header">Radio 单选框</Text>

            <View className="section">
                <View className="header">基本用法</View>
                <Radio defaultChecked>勾选</Radio>
            </View>

            <View className="section">
                <View className="header">单选框组</View>
                <Radio.Group>
                    <Radio name="1">选项1</Radio>
                    <Radio name="2">选项2</Radio>
                    <Radio name="3" disabled>
                        选项3
                    </Radio>
                </Radio.Group>
            </View>

            <View className="section">
                <View className="header">受控用法</View>
                <Radio.Group block value={item} onChange={item => setItem(item)}>
                    <Radio name="1">选项1</Radio>
                    <Radio name="2">选项2</Radio>
                    <Radio name="3">选项3</Radio>
                </Radio.Group>
            </View>

            <View className="section">
                <View className="header">按钮模式</View>
                <Radio.Group block defaultValue="2" type="button">
                    <Radio name="1">选项1</Radio>
                    <Radio name="2">选项2</Radio>
                    <Radio name="3">选项3</Radio>
                    <Radio name="4">选项4</Radio>
                    <Radio name="5">较长的选项5</Radio>
                    <Radio name="6">更长一点的选项6</Radio>
                </Radio.Group>
            </View>

            <View className="header">与 List 组件结合</View>
            <List>
                <Radio.Group defaultValue="2">
                    <List.Item title="标题1" before={<Radio name="1" />}>
                        内容1
                    </List.Item>
                    <List.Item title="标题2" before={<Radio name="2" />}>
                        内容2
                    </List.Item>
                </Radio.Group>
            </List>

            <View className="header">区分单选 与 多选</View>
            <List>
                {options.map((option, _index) => (
                    <List.Item
                        key={option.value}
                        title={option.text || option.value}
                        onClick={event => {
                            setCurrent(option.value)
                            // onChange(option.value, { event });
                        }}
                    >
                        {current === option.value && (
                            <Icon name="check" color="#006eff" />
                        )}
                    </List.Item>
                ))}
            </List>

        </View>
    );
}