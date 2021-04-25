import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import {Icon } from "tea-component-mobile";
import './index.less'

import IconFilter from "../../assets/images/filter.svg";
import IconRank from "../../assets/images/rank.svg";
import IconDropdown from "../../assets/images/dropdown.svg";

export default function IconExample() {
    return (
        <View className="page">
            <Text className="header">Icon 图标</Text>
            <View className="section">
                <Text className="header">基本用法</Text>
                <View className="icons-box">

                    <View className="icon-single">
                        <Icon
                            size="48px"
                            name={IconFilter}
                        />
                        <View className="icon-desc">#url链接</View>
                    </View>
                    <View className="icon-single">
                        <Icon
                            size="48px"
                            name={IconRank}
                        />
                        <View className="icon-desc">#url链接</View>
                    </View>
                    <View className="icon-single">
                        <Icon
                            size="48px"
                            color="rgb(41, 204, 133)"
                            name={IconDropdown}
                        />
                        <View className="icon-desc">#url链接</View>
                    </View>
                </View>
            </View>
        </View>
    );
}