import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { Card, Button, Typography, WhiteSpace } from "tea-component-mobile";

import network from "@/utils/network";
const useFetch = (url) => {
	const [data, setData] = useState(null);
	// empty array as second argument equivalent to componentDidMount
	useEffect(() => {
		network.get(url).then((res) => {
			// 返回成功
			if (res.code === 0) {
				setData(res.data.list)
			}
		})
	}, [url]);

	return data;
};

// import "@/assets/less/pages/index.less";

export default function LayoutExample() {
	// const [data, setData] = useState(null)
	const data = useFetch('/store')

	return (
		<View style={{ height: "100vh" }}>
			<View className='oitm-layout'>
				<View className="oitm-layout__header">
					<Card>
						<Card.Body>
							<Typography.Heading level={3}>上中下布局，中间内容滚动</Typography.Heading>
						</Card.Body>
					</Card>
				</View>
				<View className="oitm-layout__content">
					{
						data?.map((item, index) => (
							<Card key={item.id}>
								<View key={item.id}>{item.name}</View>
							</Card>
						))
					}
					<WhiteSpace />
					<WhiteSpace>
						{[1, 2, 3, 4, 5, 6].map((value) => (
							<Card key={value}>
								<Card.Header>标题</Card.Header>
								<Card.Body
									title="内容区标题"
									subtitle="小标题"
									extra={<Button text>操作区</Button>}
								>
									内容区
								</Card.Body>
								<Card.Footer>footer</Card.Footer>
							</Card>
						))}
					</WhiteSpace>

				</View>
				<View className="oitm-layout__footer">
					<Button type="primary">
						Primary
        			</Button>
				</View>
			</View>
		</View>
	)

}
