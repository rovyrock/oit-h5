import React, { useState } from 'react'
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { Icon, Card, Grid } from "tea-component-mobile";


import IconFilter from "../../../assets/images/filter.svg";
import IconRank from "../../../assets/images/rank.svg";
import IconDropdown from "../../../assets/images/dropdown.svg";

const getSize = (size: 24) => {
    return Taro.pxTransform((size as number), 375);
}

function TeaIconExample() {

    const iconsMap = [
        {
            icon: "nointernet",
            iconColor: "#C1C6C8",
            description: "nointernet",
        },
        {
            icon: "success",
            iconColor: "#29CC85",
            description: "success",
        },
        {
            icon: "warning",
            iconColor: "#FF584C",
            description: "warning",
        },
        {
            icon: "pending",
            iconColor: "#006EFF",
            description: "pending",
        },
        {
            icon: "refresh",
            iconColor: "#C1C6C8",
            description: "refresh",
        },
        {
            icon: "folder",
            iconColor: "#C1C6C8",
            description: "folder",
        },
        {
            icon: "arrowup",
            iconColor: "#444444",
            description: "arrowup",
        },
        {
            icon: "arrowdown",
            iconColor: "#444444",
            description: "arrowdown",
        },
        {
            icon: "arrowleft",
            iconColor: "#444444",
            description: "arrowleft",
        },
        {
            icon: "arrowright",
            iconColor: "#444444",
            description: "arrowright",
        },
        {
            icon: "chevronup",
            iconColor: "#444444",
            description: "chevronup",
        },
        {
            icon: "chevrondown",
            iconColor: "#444444",
            description: "chevrondown",
        },
        {
            icon: "chevronleft",
            iconColor: "#444444",
            description: "chevronleft",
        },
        {
            icon: "chevronright",
            iconColor: "#444444",
            description: "chevronright",
        },
        {
            icon: "delete",
            iconColor: "#444444",
            description: "delete",
        },
        {
            icon: "edit",
            iconColor: "#444444",
            description: "edit",
        },
        {
            icon: "search",
            iconColor: "#444444",
            description: "search",
        },
        {
            icon: "check",
            iconColor: "#006EFF",
            description: "check",
        },
        {
            icon: "close",
            iconColor: "#444444",
            description: "close",
        },
        {
            icon: "download",
            iconColor: "#444444",
            description: "download",
        },
        {
            icon: "success-fill",
            iconColor: "#29CC85",
            description: "success-fill",
        },
        {
            icon: "close-fill",
            iconColor: "#444444",
            description: "close-fill",
        },
        {
            icon: "minus-fill",
            iconColor: "#444444",
            description: "minus-fill",
        },
        {
            icon: "add-fill",
            iconColor: "#444444",
            description: "add-fill",
        },
        {
            icon: "info-fill",
            iconColor: "#006EFF",
            description: "info-fill",
        },
        {
            icon: "pending-fill",
            iconColor: "#006EFF",
            description: "pending-fill",
        },
        {
            icon: "warning-fill",
            iconColor: "#FF584C",
            description: "warning-fill",
        },
        {
            icon: "more",
            iconColor: "#444444",
            description: "more",
        },
        {
            icon: "star",
            iconColor: "#C1C6C8",
            description: "star",
        },
        {
            icon: "star-fill",
            iconColor: "#FF9C19",
            description: "star-fill",
        },
        {
            icon: "location",
            iconColor: "#444444",
            description: "location",
        },
        {
            icon: "question",
            iconColor: "#444444",
            description: "question",
        },
    ];

    const data = [
        {
            icon: {
                name: "nointernet",
                color: "#C1C6C8",
            },
            title: "nointernet"
        },
        {
            icon: {
                name: "success",
                color: "#29CC85",
            },
            title: "success"
        },
        {
            icon: {
                name: "warning",
                color: "#FF584C",
            },
            title: "warning"
        },
        {
            icon: {
                name: "pending",
                color: "#006EFF",
            },
            title: "pending"
        },
        {
            icon: {
                name: "refresh",
                color: "#C1C6C8",
            },
            title: "refresh"
        },
        {
            icon: {
                name: "folder",
                color: "#C1C6C8",
            },
            title: "folder"
        },
        {
            icon: {
                name: "arrowup",
                color: "#444444",
            },
            title: "arrowup"
        },
        {
            icon: {
                name: "arrowdown",
                color: "#444444",
            },
            title: "arrowdown"
        },
        {
            icon: {
                name: "arrowleft",
                color: "#444444",
            },
            title: "arrowleft"
        },
        {
            icon: {
                name: "arrowright",
                color: "#444444",
            },
            title: "arrowright"
        },
        {
            icon: {
                name: "chevronup",
                color: "#444444",
            },
            title: "chevronup"
        },
        {
            icon: {
                name: "chevrondown",
                color: "#444444",
            },
            title: "chevrondown"
        },
        {
            icon: {
                name: "chevronleft",
                color: "#444444",
            },
            title: "chevronleft"
        },
        {
            icon: {
                name: "chevronright",
                color: "#444444",
            },
            title: "chevronright"
        },
        {
            icon: {
                name: "delete",
                color: "#444444",
            },
            title: "delete"
        },
        {
            icon: {
                name: "edit",
                color: "#444444",
            },
            title: "edit"
        },
        {
            icon: {
                name: "search",
                color: "#444444",
            },
            title: "search"
        },
        {
            icon: {
                name: "check",
                color: "#444444",
            },
            title: "check"
        },
        {
            icon: {
                name: "close",
                color: "#444444",
            },
            title: "close"
        },
        {
            icon: {
                name: "download",
                color: "#444444",
            },
            title: "download"
        },
        {
            icon: {
                name: "success-fill",
                color: "#444444",
            },
            title: "success-fill"
        },
        {
            icon: {
                name: "close-fill",
                color: "#444444",
            },
            title: "close-fill"
        },

        {
            icon: {
                name: "minus-fill",
                color: "#444444",
            },
            title: "minus-fill"
        },
        {
            icon: {
                name: "add-fill",
                color: "#444444",
            },
            title: "add-fill"
        },
        {
            icon: {
                name: "info-fill",
                color: "#444444",
            },
            title: "info-fill"
        },
        {
            icon: {
                name: "pending-fill",
                color: "#444444",
            },
            title: "pending-fill"
        },
        {
            icon: {
                name: "warning-fill",
                color: "#444444",
            },
            title: "warning-fill"
        },
        {
            icon: {
                name: "more",
                color: "#444444",
            },
            title: "more"
        },
        {
            icon: {
                name: "star",
                color: "#444444",
            },
            title: "star"
        },
        {
            icon: {
                name: "star-fill",
                color: "#444444",
            },
            title: "star-fill"
        },
        {
            icon: {
                name: "location",
                color: "#444444",
            },
            title: "location"
        },
        {
            icon: {
                name: "question",
                color: "#444444",
            },
            title: "question"
        },

    ];



    return (<Card>
        <Card.Header>Tea组件库内置Icon</Card.Header>
        <Card.Body>
            <View className="icons-box">
                {iconsMap.map(icon => {
                    return (
                        <View key={icon.icon} className="icons-single">
                            <Icon
                                className="oitm-icon"
                                color={icon.iconColor}
                                name={icon.icon}
                                // size={getSize()}
                                style={{ fontSize: getSize() }}
                                onClick={() => {
                                    console.log("Click!!!");
                                }}
                            />
                            <View className="icons-desc">{icon.icon}</View>
                        </View>
                    );
                })}
                {/* <Grid data={data} columnNum={4} square onClick={console.log} bordered={false} /> */}
            </View>
        </Card.Body>
    </Card>

    )

}
function OitmIconExample() {
    const oitmIcons = [
        {
            icon: "share2",
            iconColor: "#C1C6C8",
            description: "share2",
        },
        {
            icon: "convert",
            iconColor: "#C1C6C8",
            description: "convert",
        },
        {
            icon: "translate",
            iconColor: "#C1C6C8",
            description: "translate",
        },
        {
            icon: "email",
            iconColor: "#C1C6C8",
            description: "email",
        },
        {
            icon: "download",
            iconColor: "#C1C6C8",
            description: "download",
        },
        {
            icon: "pc",
            iconColor: "#C1C6C8",
            description: "pc",
        },
        {
            icon: "console",
            iconColor: "#C1C6C8",
            description: "console",
        },
        {
            icon: "warning",
            iconColor: "#C1C6C8",
            description: "warning",
        },
        {
            icon: "negative",
            iconColor: "#C1C6C8",
            description: "negative",
        },
        {
            icon: "positive",
            iconColor: "#C1C6C8",
            description: "positive",
        },
        {
            icon: "star-fill",
            iconColor: "#C1C6C8",
            description: "star-fill",
        },
        {
            icon: "refresh",
            iconColor: "#C1C6C8",
            description: "refresh",
        },
        {
            icon: "info",
            iconColor: "#C1C6C8",
            description: "info",
        },
        {
            icon: "thumbs-up",
            iconColor: "#C1C6C8",
            description: "thumbs-up",
        },
        {
            icon: "thumbs-down",
            iconColor: "#C1C6C8",
            description: "thumbs-down",
        },
        {
            icon: "agree",
            iconColor: "#C1C6C8",
            description: "agree",
        },
        {
            icon: "disagree",
            iconColor: "#C1C6C8",
            description: "disagree",
        },
        {
            icon: "neutral",
            iconColor: "#C1C6C8",
            description: "neutral",
        },
        {
            icon: "comment",
            iconColor: "#C1C6C8",
            description: "comment",
        },
        {
            icon: "like",
            iconColor: "#C1C6C8",
            description: "like",
        },
        {
            icon: "back",
            iconColor: "#C1C6C8",
            description: "back",
        },
        {
            icon: "share",
            iconColor: "#C1C6C8",
            description: "share",
        },
        {
            icon: "close",
            iconColor: "#C1C6C8",
            description: "close",
        },
        {
            icon: "filter",
            iconColor: "#C1C6C8",
            description: "filter",
        },
        {
            icon: "home",
            iconColor: "#C1C6C8",
            description: "home",
        },
        {
            icon: "ios",
            iconColor: "#C1C6C8",
            description: "ios",
        },
        {
            icon: "android",
            iconColor: "#C1C6C8",
            description: "android",
        },
        {
            icon: "arrow-l",
            iconColor: "#C1C6C8",
            description: "arrow-l",
        },
        {
            icon: "arrow-r",
            iconColor: "#C1C6C8",
            description: "arrow-r",
        },
        {
            icon: "arrow-t",
            iconColor: "#C1C6C8",
            description: "arrow-t",
        },
        {
            icon: "arrow-d",
            iconColor: "#C1C6C8",
            description: "arrow-d",
        },
    ]

    return (
        <Card>
            <Card.Header>这是项目自定义的Icon</Card.Header>
            <Card.Body>
                <View className="icons-box">
                    {oitmIcons.map(icon => {
                        return (
                            <View key={icon.icon} className="icons-single">
                                <View
                                    className={`oitm-icon-${icon.icon}`}
                                />
                                <View className="icons-desc">{icon.description}</View>
                            </View>
                        );
                    })}
                    {/* <Grid data={data} columnNum={4} square onClick={console.log} bordered={false} /> */}
                </View>
            </Card.Body>
            <Card.Footer>卡片 Footer</Card.Footer>
        </Card>
    )

}

export default function IconExample() {
    return (
        <View className="page">
            <Text className="header">Icon 图标</Text>
            <TeaIconExample />
            <OitmIconExample />
            <View className="section">
                <Text className="header">基本用法</Text>
                <View className="icons-box">

                    <View className="icon-single">
                        <Icon
                            size={getSize(24)}
                            // style={{fontSize:getSize(24)}}
                            name={IconFilter}
                        />
                        <View className="icon-desc">#url链接</View>
                    </View>
                    <View className="icon-single">
                        <Icon
                            size={getSize(24)}
                            // style={{fontSize:getSize(24)}}
                            name={IconRank}
                        />
                        <View className="icon-desc">#url链接</View>
                    </View>
                    <View className="icon-single">
                        <Icon
                            size={getSize(24)}
                            // style={{fontSize:getSize(24)}}
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