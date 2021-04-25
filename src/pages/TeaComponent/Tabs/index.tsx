import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Card, List, Tabs } from "tea-component-mobile";

export default function SelectExample() {
	const [scrollable, setScrollable] = useState(true);
	const [badgeVisible, setBadgeVisible] = useState(false);
	const tabList = [["button", "Button", null, { name: "location" }],
	["futian", "福田区", null, { name: "location" }],
	["nanshan", "南山区", { info: "99+" }, { name: "location" }],
	["baoan", "宝安区", { info: "New" }, { name: "location" }],
	["longgang", "龙岗区", null, { name: "location" }],
	["longhua", "龙华区", null, { name: "location" }],
	["pingshan", "坪山区", null, { name: "location" }],
	["yantian", "盐田区", null, { name: "location" }],
	["guangming", "光明区", null, { name: "location" }],
	["dapeng", "大鹏新区", null, { name: "location" }]]
	const tabList1 = [["button", "标签", null, { name: "location" }],
	["futian", "福田区", null, { name: "location" }],
	["dapeng", "大鹏新区", null, { name: "location" }]]
	return (
		<View className='page'>
			<Text className="header">Tabs 选项卡</Text>

			<Text className="header">选项多</Text>
			<Card>

					<View style={{ overflow: "hidden" }}>
						<Tabs
							scrollable={scrollable}
						// swipeable={false}
						>
							{tabList.map(([id, label, badge]) => (
								<Tabs.Tab
									key={id}
									id={id}
									label={label}
									badge={badgeVisible && badge}

								>
									{label}

								</Tabs.Tab>
							))}
						</Tabs>

					</View>

			</Card>

			<Text className="header">选项少</Text>

			<Card>


					<View style={{ overflow: "hidden" }}>
						<Tabs
							scrollable={scrollable}
						>
							{tabList1.map(([id, label, badge]) => (
								<Tabs.Tab
									key={id}
									id={id}
									label={label}
									badge={badgeVisible && badge}

								>
									{label}

								</Tabs.Tab>
							))}
						</Tabs>

					</View>

			</Card>
		</View>
	)

}
