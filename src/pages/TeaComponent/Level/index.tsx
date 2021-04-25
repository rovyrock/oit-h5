import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { Level } from "tea-component-mobile";

export default function LevelExample() {
  return (
    <View className="page">
      <Text className="header">Level 端对齐</Text>

      <Text className="header">元素于容器水平垂直居中</Text>
      <View className="demo-box">
        <View className="wrap bor">
          <Level className="demo">
            <View className="imageWrap bor">
              <Image src="//imgcache.qq.com/open_proj/proj_qcloud_v2/tc-x/tea-ui/assets/tea-ui.svg" />
            </View>
          </Level>
        </View>
      </View>

      <Text className="header">元素左右两端对齐</Text>
      <View className="demo-box">
        <View className="wrap bor">
          <Level
            start={
              <View>
                <View className="title bor">机械键盘</View>
                <View className="meta bor">￥1000</View>
              </View>
            }
            end={<View className="details bor">已售100</View>}
          />
        </View>
      </View>

      <Text className="header">
        左侧内容宽度由内容撑开或宽度固定，右侧内容占据剩余空间
      </Text>
      <View className="demo-box">
        <View className="wrap bor">
          <Level
            startWidth="100px"
            endFlex="1"
            start={<View className="title bor">吃葡萄不吐葡萄皮</View>}
            end={
              <View
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
                className="details bor"
              >
                不吃葡萄倒吐葡萄皮
              </View>
            }
          />
        </View>
      </View>

      <Text className="header">
        右侧内容宽度由内容撑开或宽度固定，左侧内容占据剩余空间
      </Text>
      <View className="demo-box">
        <View className="wrap bor">
          <Level
            endWidth="90px"
            startFlex="1"
            start={<View className="title bor">吃葡萄不吐葡萄皮</View>}
            end={
              <View
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
                className="details bor"
              >
                不吃葡萄倒吐葡萄皮
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}