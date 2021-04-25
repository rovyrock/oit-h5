
import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { Button, Select } from "tea-component-mobile";
// 基于Taro3（缺陷，不能同时显示多个月）
// import Calendar from "@/components/Calendar";
// 
import { RMCCalendar } from '@gem-mine/rmc-calendar';

// import { Calendar as RMCCalendar } from 'rmc-calendar';

import zhCN from './locale/zh_CN';
import enUS from './locale/en_US';
import locale from "./locale/zh_CN";
const now = new Date();

class BasicDemo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			show: true,
			config: {
				// infinite:true,
				value: [new Date(+new Date - 1 * 24 * 3600 * 1000), new Date(+new Date - 4 * 24 * 3600 * 1000)],
				type: 'range',
				prefixCls: "mc-calendar",
				firstDayOfWeek: 1,// 从周一开始，默认从周日开始
			},
		};

	}
	render() {

		return (
			<View style='height:100vh'>
				<View style={{ height: '70vh', overflow: 'hidden' }}>

					<RMCCalendar
						locale={zhCN}
						{...this.state.config}
						visible={this.state.show}
						onOk={(startTime, endTime) => {
							console.log("ok"); this.setState({
								startTime,
								endTime,
							});
						}}
						title={locale.monthTitle}
						// onSelect={(e)=>{console.log("onSelect",e)}}
						onSelect={(date) => {
							console.log('onSelect', date);
							return [date, new Date(+new Date - 7 * 24 * 3600 * 1000)];
						}}
						onChange={() => { console.log("onChange") }}
					/>
				</View>
				<div style={{ marginLeft: 10, fontSize: 14 }}>
					{
						this.state.startTime &&
						<p>开始时间：{this.state.startTime.toLocaleString()}</p>
					}
					{
						this.state.endTime &&
						<p>结束时间：{this.state.endTime.toLocaleString()}</p>
					}
				</div>

			</View>
		)

	}
}
export default BasicDemo;

// export default function DemoExample() {
// 	const handleMonthChange = () => {
// 		console.log("handleMonthChange")
// 	}
// 	// const [config,setConfig] = useState({startT})

// 	return (

// 		<View style='height:100vh'>
// 			{/* <Text className="header">基本用法</Text>

// 			<Calendar isMultiSelect singleMonth={true} startFromMonday={true} isSwiper={true} onMonthChange={handleMonthChange} />


// 			<Text className="header">mc-calendar</Text> */}
// 			<View style={{height:'70vh',overflow:'hidden'}}>

// 			<RMCCalendar
// 				locale={enUS}
// 				{...this.state.config}
// 				prefixCls="mc-calendar"
// 				visible={true}
// 				type="range"
// 				firstDayOfWeek={1}
// 				monthData={'MM YY'}
// 				onOk={()=>{console.log("ok")}}
// 			/>
// 			</View>

// 		</View>

// 	);
// }
