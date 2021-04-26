import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { Card, Button, Typography, WhiteSpace, Level, Cell } from "tea-component-mobile";

import network from "@/utils/network";
import "./feeds.less";

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
	const data = useFetch('/feeds')

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
					<WhiteSpace>
						{
							data?.map((item, index) => (
								<View key={index} className="feeds">
									<WhiteSpace>
										<Level className="feeds__hd" start={
											<View className="feeds__channel">
												<Typography.Text size="sm" theme="light">
													{item.channel_name}
												</Typography.Text>

												{item.channel_name === 'steam' ? (item.tweets_like ? <View
													className={`oitm-icon-thumbs-up`} /> : <View
													className={`oitm-icon-thumbs-down`} />) : ''}

												<View className="feeds__comment-score">

													{item.channel_name == 'google play' ?
														new Array(item.comment_score).fill(' ').map((item, index) =>
															<View key={index} className={`oitm-icon-star-fill`} />
														)
														: ''}
												</View>

											</View>
										} end={
											<View className="feeds__sentiment">

												{
													item.sentiment_rating === 1 ? <View key={index} className={`oitm-icon-negative`} /> : (item.sentiment_rating === 2 ? <View key={index} className={`oitm-icon-positive`} /> : <View key={index} className={`oitm-icon-neutral`} />)
												}

											</View>
										}></Level>
									</WhiteSpace>
									<Cell className="feeds__bd"
										description={
											<>
												<Typography.Text size="sm" className="feeds__username">{item.reviewer ? `${item.reviewer}:` : ''}</Typography.Text>
												<Typography.Text size="sm">{item.content}</Typography.Text>
												<Typography.Text size="sm" block theme="light">
													{item.comment_time}
												</Typography.Text>
											</>
										}
										footer={
											<Button.Group type="operational" className="feeds__operation">
												<Button onClick={() => console.log(1)}>
													<View className="oitm-icon-share"></View>
													<Typography.Text theme="light">1234</Typography.Text>
												</Button>
												<Button onClick={() => console.log(2)}>
													<View className="oitm-icon-like"></View>
													<Typography.Text theme="light">1234</Typography.Text>
												</Button>
												<Button onClick={() => console.log("more")}>
													<View className="oitm-icon-comment"></View>
													<Typography.Text theme="light">1234</Typography.Text>
												</Button>
											</Button.Group>
										}
										onClick={() => console.log("Cell")}
									/>
								</View>
							))
						}
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
