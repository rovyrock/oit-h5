import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { Popup, Button, Checkbox, Tabs } from "tea-component-mobile";
// import "./index.less";



import DemoCalendar from "./demoCalendar"

import DemoIndexes from "./demoIndexes"



export default function PopupExample() {

	const [activeTab, setActiveTab] = useState()

	const tabList = [{ id: "Hour", lable: "Hour", component: "hello" }, { id: "Date", lable: "Date", component: <DemoCalendar /> }, { id: "Week", lable: "Week", component: "week" }]

	return (
		<View className="page">
			<Text className="header">Popup 弹出层</Text>

			<View className="section">
				<Popup
					position="top"
					overlay={close => (
						<View className="box">
							<Button type="primary" onClick={close}>
								点击关闭
              				</Button>
						</View>
					)}
				>
					<Button>顶部弹出</Button>
				</Popup>
			</View>

			<View className="section">
				<Popup
					position="center"
					overlay={close => (
						<View className="box">
							<Button type="primary" onClick={close}>
								点击关闭
              				</Button>
						</View>
					)}
				>
					<Button>中间弹出</Button>
				</Popup>
			</View>

			<View className="section">
				<Popup
					position="bottom"
					overlay={close => (
						<View className="gp-filter">
							<View className="gp-filter-hd">Filters</View>
							<View className="gp-filter-bd">
								<View className="gp-filter-section">
									<View className="gp-filter-group-title">Type</View>
									<Checkbox.Group block defaultValue={["2"]} type="button">
										<Checkbox name="1">Pub</Checkbox>
										<Checkbox name="2">Studio</Checkbox>
										<Checkbox name="3">Pub&Studio</Checkbox>
									</Checkbox.Group>
								</View>
								<View className="gp-filter-section">
									<View className="gp-filter-group-title">Platform</View>
									<Checkbox.Group block defaultValue={["2"]} type="button">
										<Checkbox name="1">All</Checkbox>
										<Checkbox name="2">PC</Checkbox>
										<Checkbox name="3">Console</Checkbox>
										<Checkbox name="4">Mobile</Checkbox>
									</Checkbox.Group>
								</View>
								<View className="gp-filter-section">
									<View className="gp-filter-group-title">Genre or Tags</View>
									<Checkbox.Group block defaultValue={["SOC"]} type="button">
										<Checkbox name="stg">STG</Checkbox>
										<Checkbox name="soc">SOC</Checkbox>
										<Checkbox name="slg">SLG</Checkbox>
										<Checkbox name="acg">ACG</Checkbox>
										<Checkbox name="fps">FPS</Checkbox>
										<Checkbox name="rac">RAC</Checkbox>
										<Checkbox name="rpg">RPG</Checkbox>
										<Checkbox name="avg">AVG</Checkbox>
										<Checkbox name="sim">SIM</Checkbox>
										<Checkbox name="spt">SPT</Checkbox>
										<Checkbox name="rts">RTS</Checkbox>
										<Checkbox name="edu">EDU</Checkbox>
										<Checkbox name="military">Military</Checkbox>
										<Checkbox name="onlinegame">Online Game</Checkbox>
										<Checkbox name="srpg">S-RPG</Checkbox>
										<Checkbox name="tab">TAB</Checkbox>
										<Checkbox name="mmorpg">MMORPG</Checkbox>
									</Checkbox.Group>
								</View>
							</View>
							{/* <Button type="primary" onClick={close}>
								点击关闭
              				</Button> */}
						</View>
					)}
				>
					<Button>底部弹出</Button>
				</Popup>
			</View>

			<View className="section">
				<Popup
					mask={false}
					position="bottom"
					overlay={close => (
						<View className="box">
							<Button type="primary" onClick={close}>
								点击关闭
              				</Button>
						</View>
					)}
				>
					<Button>底部弹出无遮罩</Button>
				</Popup>
			</View>

			<View className="section">
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
								<View className="oitm-popup__close"><View className="oitm-icon-close"></View></View>

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
											<DemoCalendar />
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
										<DemoIndexes/>
										</View>
									</Tabs.Tab>
								</Tabs>
							</View>
							{/* <View className="oitm-popup__footer">
								<Button type="primary" onClick={close}>
									点击关闭
              					</Button>
							</View> */}
						</View>
					)}
				>
					<Button>日历</Button>
				</Popup>
			</View>
		</View>
	);
}

