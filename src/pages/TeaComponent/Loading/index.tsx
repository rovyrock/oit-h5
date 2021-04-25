import React from "react";
import { View, Text } from "@tarojs/components";
import { Loading } from "tea-component-mobile";
// import "./index.less";

export default function LoadingExample() {
	return (
		<View className="page">
			<Text className="header">Loading 加载中</Text>
			<View className="section">
				<Text className="header">类型</Text>
				<View className="item">
					<Loading color="#006eff" />
				</View>
				<View className="item">
					<Loading type="spinner" color="#006eff" />
				</View>
			</View>
			<View className="section">
				<Text className="header">包含文字</Text>
				<View className="item">
					<Loading>加载中 ...</Loading>
				</View>
				<View className="item">
					<Loading type="spinner">加载中 ...</Loading>
				</View>
				<View className="item">
					<Loading vertical>加载中 ...</Loading>
				</View>
			</View>
		</View>
	);
}