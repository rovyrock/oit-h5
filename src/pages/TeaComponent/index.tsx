import React from 'react'
import { View } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { List } from "tea-component-mobile";

import './index.less'

// import IconExample from "./icon"

const config = [
	{
		title: "通用",
		components: [
			{ id: "Button", title: "按钮 Button" },
			{ id: "Icon", title: "图标 Icon" },
			{ id: "Typography", title: "排版 Typography" }
		],
	},
	{
		title: "布局",
		components: [
			{ id: "Flex", title: "弹性布局 Flex" },
			{ id: "grid", title: "宫格 Grid" },
			{ id: "level", title: "端对齐 Level" },
			{ id: "WhiteSpace", title: "留白 WhiteSpace" },
		],
	},
	{
		title: "导航",
		components: [
			{ id: "SegmentedControl", title: "分段器 SegmentedControl" }, 
			{ id: "Tabs", title: "选项卡 Tabs" }
		],
	},
	{
		title: "展示",
		components: [
			{ id: "Alert", title: "提示条  Alert" },
			{ id: "Timeline", title: "时间轴 Timeline" },
			{ id: "Badge", title: "徽章 Badge" },
			{ id: "Indexes", title: "索引选择器 Indexes" },
			{ id: "Card", title: "卡片 Card" },
			{ id: "Cell", title: "项 Cell" },
			{ id: "form", title: "表单 Form" },
			{ id: "HeaderBar", title: "顶栏 HeaderBar" },
			{ id: "List", title: "列表 List" },
			{ id: "progress", title: "进度条 Progress" },
			{ id: "tag", title: "标签 Tag" },
			{ id: "Statistic", title: "统计数值 Statistic" },
			{ id: "Descriptions", title: "描述列表 Descriptions" },

		],
	},
	{
		title: "表单",
		components: [
			{ id: "Checkbox", title: "复选框 Checkbox" },
			{ id: "Input", title: "输入框 Input" },
			{ id: "Picker", title: "选择器 Picker" },
			{ id: "radio", title: "单选框 Radio" },
			{ id: "Search", title: "搜索 Search" },
			{ id: "Select", title: "下拉选择 Select" },
			{ id: "slider", title: "滑块 Slider" },
			{ id: "switch", title: "开关 Switch" },
		],
	},
	{
		title: "反馈",
		components: [
			{ id: "Modal", title: "弹框 Modal" },
			{ id: "Loading", title: "加载中 Loading" },
			{ id: "Toast", title: "轻提示 Toast" },
			{ id: "Popup", title: "弹出层 Popup" },
			{ id: "Message", title: "消息通知 Message" },
			{ id: "ActionSheet", title: "动作面板 ActionSheet" },
		],
	},
	{
		title: "高级",
		components: [{ id: "Calendar", title: "日历 Calendar" }],
	}
];
// function ButtonExample() {
// 	return (
// 		<View className="page">
// 			<Text className="header">Button 按钮</Text>
// 			<View className="section">
// 				<Text className="header">类型</Text>
// 				<Button>默认按钮</Button>
// 				<Button type="primary">主要按钮</Button>
// 				<Button type="danger">危险按钮</Button>
// 			</View>

// 			<View className="section">
// 				<Text className="header">禁用</Text>
// 				<Button disabled>默认按钮</Button>
// 				<Button type="primary" disabled>
// 					主要按钮
// 		  		</Button>
// 				<Button type="danger" disabled>
// 					危险按钮
// 		  		</Button>
// 			</View>

// 			<View className="section">
// 				<Text className="header">加载中</Text>
// 				<Button loading loadingText="加载中...">
// 					默认按钮
// 		 		 </Button>
// 				<Button type="primary" loading loadingText="加载中...">
// 					主要按钮
// 		  		</Button>
// 				<Button type="danger" loading loadingText="加载中...">
// 					危险按钮
// 		  		</Button>
// 			</View>

// 			<View className="section">
// 				<Text className="header">包含图标</Text>
// 				<Button icon="search">默认按钮</Button>
// 				<Button type="primary" icon="search">
// 					主要按钮
// 		  		</Button>
// 				<Button type="danger" icon="search">
// 					危险按钮
// 		  		</Button>
// 			</View>

// 			<Text className="header">文字按钮</Text>
// 			<View className="section">
// 				<Button text icon="search" />
// 				<Button text>编辑</Button>
// 				<Button text icon="edit">
// 					编辑
// 		  		</Button>
// 				<Button text disabled icon="edit">
// 					编辑
// 		  		</Button>
// 			</View>
// 			<View className="section">
// 				<Button text type="primary" icon="search" />
// 				<Button text type="primary">
// 					编辑
// 		  		</Button>
// 				<Button text type="primary" icon="edit">
// 					编辑
// 		 		</Button>
// 				<Button text disabled type="primary" icon="edit">
// 					编辑
// 		 		</Button>
// 			</View>
// 			<View className="section">
// 				<Button text type="danger" icon="delete" />
// 				<Button text type="danger">
// 					删除
// 		 		</Button>
// 				<Button text type="danger" icon="delete">
// 					删除
// 		 		</Button>
// 				<Button text disabled type="danger" icon="delete">
// 					删除
// 		 		</Button>
// 			</View>

// 			<View className="section">
// 				<Text className="header">尺寸</Text>
// 				<Button size="sm">小按钮</Button>
// 				<Button size="sm" type="primary">
// 					小按钮
// 		  		</Button>
// 				<Button size="sm" type="danger">
// 					小按钮
// 		 		</Button>
// 				<Button disabled size="sm">
// 					小按钮
// 		 		 </Button>
// 				<Button size="sm" text icon="search" />
// 			</View>
// 		</View>
// 	);
// }

// export default function SelectExample() {
// 	const [scrollable, setScrollable] = useState(true);
// 	const [badgeVisible, setBadgeVisible] = useState(false);
// 	const tabList = [["button", "Button", null, { name: "location" }],
// 	["futian", "福田区", null, { name: "location" }],
// 	["nanshan", "南山区", { info: "99+" }, { name: "location" }],
// 	["baoan", "宝安区", { info: "New" }, { name: "location" }],
// 	["longgang", "龙岗区", null, { name: "location" }],
// 	["longhua", "龙华区", null, { name: "location" }],
// 	["pingshan", "坪山区", null, { name: "location" }],
// 	["yantian", "盐田区", null, { name: "location" }],
// 	["guangming", "光明区", null, { name: "location" }],
// 	["dapeng", "大鹏新区", null, { name: "location" }]]
// 	return (
// 		<View className='index'>
// 			<HeaderBar>
// 				<Text>这是HeaderBar</Text>
// 			</HeaderBar>
// 			<View style={{ overflow: "hidden" }}>
// 				<Tabs
// 					scrollable={scrollable}
// 				>
// 					{tabList.map(([id, label, badge]) => (
// 						<Tabs.Tab
// 							key={id}
// 							id={id}
// 							label={label}
// 							badge={badgeVisible && badge}

// 						>
// 							{id === 'button' ? <ButtonExample /> : label}

// 						</Tabs.Tab>
// 					))}
// 				</Tabs>
// 				<IconExample />

// 			</View>
// 		</View>
// 	)

// }

export default function Index() {
	return (
		<View className="index" style={{ backgroundColor: "#f2f3f5" }}>
			<View className="logo">OIT Mobile Components</View>
			{config.map(({ title, components }, index) => (
				<List title={title} key={index}>
					{components.map(({ id, title }) => (
						<List.Item key={id} title={title} arrow onClick={() =>
							Taro.navigateTo({
								url: `/pages/TeaComponent/${id}/index`,
							})
						}></List.Item>
					))}
				</List>
			))}
		</View>
	);
}
