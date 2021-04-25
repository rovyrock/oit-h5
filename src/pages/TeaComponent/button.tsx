import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from "tea-component-mobile";

export default function ButtonExample() {
	return (
		<View className="page">
			<Text className="header">Button 按钮</Text>
			<View className="section">
				<Text className="header">类型</Text>
				<Button>默认按钮</Button>
				<Button type="primary">主要按钮</Button>
				<Button type="danger">危险按钮</Button>
			</View>

			<View className="section">
				<Text className="header">禁用</Text>
				<Button disabled>默认按钮</Button>
				<Button type="primary" disabled>
					主要按钮
		  		</Button>
				<Button type="danger" disabled>
					危险按钮
		  		</Button>
			</View>

			<View className="section">
				<Text className="header">加载中</Text>
				<Button loading loadingText="加载中...">
					默认按钮
		 		 </Button>
				<Button type="primary" loading loadingText="加载中...">
					主要按钮
		  		</Button>
				<Button type="danger" loading loadingText="加载中...">
					危险按钮
		  		</Button>
			</View>

			<View className="section">
				<Text className="header">包含图标</Text>
				<Button icon="search">默认按钮</Button>
				<Button type="primary" icon="search">
					主要按钮
		  		</Button>
				<Button type="danger" icon="search">
					危险按钮
		  		</Button>
			</View>

			<Text className="header">文字按钮</Text>
			<View className="section">
				<Button text icon="search" />
				<Button text>编辑</Button>
				<Button text icon="edit">
					编辑
		  		</Button>
				<Button text disabled icon="edit">
					编辑
		  		</Button>
			</View>
			<View className="section">
				<Button text type="primary" icon="search" />
				<Button text type="primary">
					编辑
		  		</Button>
				<Button text type="primary" icon="edit">
					编辑
		 		</Button>
				<Button text disabled type="primary" icon="edit">
					编辑
		 		</Button>
			</View>
			<View className="section">
				<Button text type="danger" icon="delete" />
				<Button text type="danger">
					删除
		 		</Button>
				<Button text type="danger" icon="delete">
					删除
		 		</Button>
				<Button text disabled type="danger" icon="delete">
					删除
		 		</Button>
			</View>

			<View className="section">
				<Text className="header">尺寸</Text>
				<Button size="sm">小按钮</Button>
				<Button size="sm" type="primary">
					小按钮
		  		</Button>
				<Button size="sm" type="danger">
					小按钮
		 		</Button>
				<Button disabled size="sm">
					小按钮
		 		 </Button>
				<Button size="sm" text icon="search" />
			</View>
		</View>
	);
}

