import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Tabs, Button,Popup, Typography, WhiteSpace } from "tea-component-mobile";

// import "@/assets/less/pages/index.less";

export default function LayoutExample() {
	const [activeTab, setActiveTab] = useState()

	// const tabList = [{ id: "Hour", lable: "Hour", component: "hello" }, { id: "Date", lable: "Date", component: <DemoCalendar /> }, { id: "Week", lable: "Week", component: "week" }]

	return (
		<View style={{ height: "100vh" }}>
			<WhiteSpace>
			<Popup
				mask={true}
				position="bottom"
				overlay={close => (
					<View className="oitm-popup" style={{ backgroundColor: "#fff" }}>
						<View className="oitm-popup__header">
							<View className="oitm-popup__back"><View className="oitm-icon-back"></View></View>
							<View className="oitm-popup__title">
								<Tabs activeId={activeTab} onActive={(activeId) => setActiveTab(activeId)} className="oitm-tabs--withoutpanel">
									<Tabs.Tab
										id={"Hour"}
										label={"Hour"}
									>

									</Tabs.Tab>
									<Tabs.Tab
										id={"Day"}
										label={"Day"}
									>
									</Tabs.Tab>
									<Tabs.Tab
										id={"Week"}
										label={"Week"}
									>

									</Tabs.Tab>
									<Tabs.Tab
										id={"Month"}
										label={"Month"}
									>

									</Tabs.Tab>
								</Tabs>
							</View>
							<View className="oitm-popup__close" onClick={close}><View className="oitm-icon-close"></View></View>

						</View>

						<View className="oitm-popup__body" style={{ height: '70vh' }}>
							<Tabs activeId={activeTab} className="oitm-tabs--withoutbar">
								<Tabs.Tab
									id={"Hour"}
									label={"Hour"}
								>
									<View style={{ height: '70vh' }}>
										Hour
									</View>

								</Tabs.Tab>
								<Tabs.Tab
									id={"Day"}
									label={"Day"}
								>
									<View style={{ height: '70vh' }}>
										{/* <DemoCalendar /> */}
									</View>

								</Tabs.Tab>
								<Tabs.Tab
									id={"Week"}
									label={"Week"}
								>
									<View style={{ height: '70vh' }}>
										Week
									</View>
								</Tabs.Tab>
								<Tabs.Tab
									id={"Month"}
									label={"Month"}
								>
									<View style={{ height: '70vh' }}>
										{/* <DemoIndexes /> */}
									</View>
								</Tabs.Tab>
							</Tabs>
						</View>
					</View>
				)}
			>
				<Button type="primary">弹出</Button>
			</Popup>
			</WhiteSpace>
		</View>
	)
}
