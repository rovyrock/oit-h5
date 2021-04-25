import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "@tarojs/components";
// import { Table, Row, Rows, TableWrapper, Cols } from '../../../components/Table';
import { Popup, Button, Checkbox } from "tea-component-mobile";


import Table, { IColumns } from '@/components/Taro3-Table';

// import "./index.less";

interface AnyOptions {
	[prop: string]: any
}

const getData = () => {
	return new Promise<AnyOptions[]>(resolve => {
		setTimeout(() => {
			resolve(
				new Array(20).fill(null).map((_, i: number): AnyOptions => {
					const random = (n) => String(parseInt(String(Math.random() * n)));
					return {
						user_id: i + 1,
						username: `username_${random(1e15)}`,
						telephone: random(1e15),
						sex: (i + 1) % 2,
						status: !!((i + 1) % 2),
						address: `${(i + 1)}_地址地址地址_${random(1e15)}`,
						orderInfo: {
							price: random(1e3),
							orderName: `orderName_${i + 1}`,
							createTime: `createTime_${i + 1}`
						},
						createTime: new Date().toLocaleString(),
					};
				})
			);
		}, 500);
	});
};


// Score Details by Expert
function TableExample3() {

	const [loading, setLoading] = useState<boolean>(false);

	const dataSource = [
		{
			game: "Innovation",
			expert1: "20",
			expert2: "2024",
			expert3: "2",
			expert4: "4",
			expert5: "204",
		},
		{
			game: "Developement Capability",
			expert1: "20",
			expert2: "2024",
			expert3: "2",
			expert4: "4",
			expert5: "204",
		},
		{
			game: "Production Capability/Scale",
			expert1: "20",
			expert2: "2024",
			expert3: "2",
			expert4: "4",
			expert5: "204",
		},
		{
			game: "Breakthrough potential/Studio",
			expert1: "20",
			expert2: "2024",
			expert3: "2",
			expert4: "4",
			expert5: "204",
		},
		{
			game: "IP",
			expert1: "20",
			expert2: "2024",
			expert3: "2",
			expert4: "4",
			expert5: "204",
		},
		{
			game: "Team track record/Founderation",
			expert1: "20",
			expert2: "2024",
			expert3: "2",
			expert4: "4",
			expert5: "204",
		},
		{
			game: "Strategic fit with Tencent",
			expert1: "20",
			expert2: "2024",
			expert3: "2",
			expert4: "4",
			expert5: "204",
		},
		{
			game: "Total",
			expert1: "20",
			expert2: "2024",
			expert3: "2",
			expert4: "4",
			expert5: "204",
		}
	]

	const columns: IColumns[] = [
		{
			title: 'Game',
			dataIndex: 'game',
			// sort: true,
			// 左固定列示例
			fixed: 'left',
			align: "left",
			width: 125,
			expandable: false
		},

		// 服务端排序示例，结合 onSort 钩子请求后端数据
		{
			title: 'Expert 1',
			width: 80,
			dataIndex: 'expert1',
			expandable: false
		},
		{
			title: 'Expert 2',
			width: 80,
			dataIndex: 'expert2',
			expandable: false
		},
		{
			title: 'Expert 3',
			width: 80,
			dataIndex: 'expert3',
			expandable: false
		},
		{
			title: 'Expert 4',
			width: 80,
			dataIndex: 'expert4',
			expandable: false
		},
		{
			title: 'Expert 5',
			width: 80,
			dataIndex: 'expert5',
			expandable: false
		},
	];

	return (
		<View className="gp-card">
			<Text className="header">Score Details by Expert</Text>

			<View className="gp-card-bd">
				<Table
					className="gp-table-pi"
					onChange={v => {
						// console.log('onChange -', v);
					}}
					columns={columns}
					dataSource={dataSource}
					rowKey='game'
					loading={loading}
					expandable={false}
					style={{
						// margin: '0 auto',
						// width: '100%',
						// height: '400px'
					}}
					// colClassName="col"
					// rowClassName="row"
					// 固定表头、横向滚动 示例
					scroll={{
						x: '100%',
						y: '100%'
					}}
				/>
			</View>
		</View>
	);
}

// Pipeline
function TableExample4() {

	const [loading, setLoading] = useState<boolean>(false);

	const dataSource = [
		{
			game: "T1",
			expert1: "STG",
			expert2: "2/5",
			expert3: "6917/8974",
			expert4: [{
				label: 'PUBGM',
				status: 1,
			}],
			expert5: [{
				label: 'Contra',
				status: 1,
			}]
		},
		{
			game: "T1",
			expert1: "SOC",
			expert2: "2/3",
			expert3: "8463/8164",
			expert4: [],
			expert5: [{
				label: 'SOP',
				status: 1,
			}, {
				label: "Don't  Sta…",
				status: 2,
			}],
		},
		{
			game: "T1",
			expert1: "SLG",
			expert2: "2/3",
			expert3: "1310/9641",
			expert4: [],
			expert5: [{
				label: "Age of Em…",
				status: 3,
			}],
		},
		{
			game: "T2",
			expert1: "MMORPG",
			expert2: "2/3",
			expert3: "894/614",
			expert4: [{
				label: "Saint Seiya",
				status: 2,
			}, {
				label: "Code D-B…",
				status: 3,
			}],
			expert5: [],
		}
	]

	const columns: IColumns[] = [
		{
			title: 'Priority',
			dataIndex: 'game',
			// sort: true,
			// 左固定列示例
			fixed: 'left',
			align: "left",
			width: 68,
			expandable: false
		},

		// 服务端排序示例，结合 onSort 钩子请求后端数据
		{
			title: 'Genre',
			width: 80,
			fixed: 'left',
			align: "center",
			dataIndex: 'expert1',
			expandable: false
		},
		{
			title: 'Progress',
			width: 80,
			align: "center",
			dataIndex: 'expert2',
			expandable: false
		},
		{
			title: 'Revenue(m)',
			width: 80,
			align: "center",
			dataIndex: 'expert3',
			expandable: false
		},
		{
			title: 'Online',
			width: 120,
			align: "center",
			dataIndex: 'expert4',
			expandable: false,
			render: (_, record, id) => {
				return record.expert4.length && record.expert4.map((item,index) => <View key={`tag-${id}-${index}`} className={`pipeline-tag pipeline-tag-${item.status}`}>{item.label}</View>)
			}
		},
		{
			title: '2021 pipeline',
			width: 120,
			dataIndex: 'expert5',
			align: "center",
			expandable: false,
			render: (_, record, id) => {
				return record.expert5.length && record.expert5.map((item,index) => <View key={`tag-${id}-${index}`} className={`pipeline-tag pipeline-tag-${item.status}`}>{item.label}</View>)
			}
		},
	];

	return (
		<View className="gp-card">
			<Text className="gp-card-bd">Pipeline</Text>

			<View className="gp-card-bd">
				<Table
					className="gp-table-pi"
					onChange={v => {
						// console.log('onChange -', v);
					}}
					columns={columns}
					dataSource={dataSource}
					rowKey='expert1'
					loading={loading}
					expandable={false}
					style={{
						// margin: '0 auto',
						// width: '100%',
						// height: '400px'
					}}
					// colClassName="col"
					// rowClassName="row"
					// 固定表头、横向滚动 示例
					scroll={{
						x: '100%',
						y: '100%'
					}}
				/>
			</View>
		</View>
	);
}

function TableExample2() {

	const [loading, setLoading] = useState<boolean>(false);


	const columns = [
		{
			title: "Game",
			dataIndex: `title`,
			// 左固定列示例
			width: 132,
			fixed: "left",
			align: "left",
			render: t => {
				return <Text className="gp-game">{t}</Text>;
			},
		},
		{
			title: <Image
				className="gp-game-logo"
				mode="widthFix"
				src={require(`@/assets/images/game/1.png`)}
			/>,
			dataIndex: `game1`,
			// 左固定列示例
			width: 85,
			render: t => {
				return <Text>{t}</Text>;
			},
		},
		{
			title: <Image
				className="gp-game-logo"
				mode="widthFix"
				src={require(`@/assets/images/game/2.png`)}
			/>,
			dataIndex: `game2`,
			// 左固定列示例
			width: 85,
			render: t => {
				return <Text>{t}</Text>;
			},
		},
		{
			title: <Image
				className="gp-game-logo"
				mode="widthFix"
				src={require(`@/assets/images/game/3.png`)}
			/>,
			dataIndex: `game3`,
			// 左固定列示例
			width: 85,
			render: t => {
				return <Text>{t}</Text>;
			},
		},
		{
			title: <Image
				className="gp-game-logo"
				mode="widthFix"
				src={require(`@/assets/images/game/4.png`)}
			/>,
			dataIndex: `game4`,
			// 左固定列示例
			width: 85,
			render: t => {
				return <Text>{t}</Text>;
			},
		}
	]

	const dataSource = [
		{
			title: "Soft Launch",
			game1: "2021.04",
			game2: "2021.04",
			game3: "2021.04",
			game4: "2021.04",
		},
		{
			title: "Alpha",
			game1: "2021.04",
			game2: "2021.04",
			game3: "2021.04",
			game4: "2021.04",
		},
		{
			title: "Production",
			game1: "2021.04",
			game2: "2021.04",
			game3: "2021.04",
			game4: "2021.04",
		},
		{
			title: "Pre-production",
			game1: "2021.04",
			game2: "2021.04",
			game3: "2021.04",
			game4: "2021.04",
		},
		{
			title: "Prototype",
			game1: "2021.04",
			game2: "2021.04",
			game3: "2021.04",
			game4: "2021.04",
		}

	]



	// const columns: IColumns[] = [
	// 	{
	// 		title: 'Game',
	// 		dataIndex: 'game',
	// 		sort: true,
	// 		// 左固定列示例
	// 		fixed: 'left',
	// 		width: 50,
	// 		render: t => {
	// 			return <Text style={{ color: 'red' }}>{t}</Text>;
	// 		}
	// 	},

	// 	// 服务端排序示例，结合 onSort 钩子请求后端数据
	// 	{
	// 		title: '手机号',
	// 		width: 80,
	// 		dataIndex: 'telephone',
	// 		sort: true,
	// 		sorter: true,
	// 		onSort: async (v) => {
	// 			console.log('onSort -', v);

	// 			setLoading(true);
	// 			const data = await getData();
	// 			setDataSource(data);
	// 			setLoading(false);
	// 		}
	// 	},
	// 	{
	// 		title: '性别',
	// 		width: 40,
	// 		dataIndex: 'sex',
	// 		render: t => {
	// 			switch (String(t)) {
	// 				case '0':
	// 					return '男';
	// 				case '1':
	// 					return '女';
	// 				default:
	// 					return '未知性别';
	// 			}
	// 		},
	// 	},
	// 	{
	// 		title: '状态',
	// 		width: 40,
	// 		dataIndex: 'status',
	// 		sort: true,

	// 		// 禁用点击展开功能
	// 		expandable: false,
	// 		render: t => {
	// 			return (<Button >{t.toString()}</Button>);
	// 		}
	// 	},
	// 	{
	// 		title: '地址',
	// 		width: 150,
	// 		dataIndex: 'address',
	// 	},
	// 	{
	// 		title: '订单信息',
	// 		width: 150,
	// 		dataIndex: 'orderInfo',
	// 		render: (_, record) => record?.orderInfo?.price,

	// 		// 自定义排序方式示例
	// 		sort: true,
	// 		sorter: (a, b, sortOrder): number => {
	// 			if (sortOrder === 'ascend') {
	// 				return a.orderInfo.price - b.orderInfo.price;
	// 			} else {
	// 				return b.orderInfo.price - a.orderInfo.price;
	// 			}
	// 		}
	// 	},
	// 	{
	// 		// 右固定列示例
	// 		// fixed: 'right',
	// 		title: '创建时间',
	// 		width: 50,
	// 		dataIndex: 'createTime',
	// 	},
	// ];
	return (
		<View className="gp-card">
			<Text className="header">Table</Text>

			<View className="gp-card-bd">


				<Table
					className="gp-table-pi"
					onChange={v => {
						console.log('onChange -', v);
					}}
					columns={columns}
					dataSource={dataSource}
					rowKey='title'
					loading={loading}
					style={{
						// margin: '0 auto',
						// width: '100%',
						// height: '400px'
					}}
					// colClassName="col"
					// rowClassName="row"
					// 固定表头、横向滚动 示例
					scroll={{
						x: '100%',
						y: '100%'
					}}
				/>
			</View>
		</View>
	);
}

export default function TableExample() {

	const [loading, setLoading] = useState<boolean>(false);
	const [dataSource, setDataSource] = useState<AnyOptions[]>([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async (): Promise<void> => {
		setLoading(true);
		const data: AnyOptions[] = await getData();
		setDataSource(data);
		setLoading(false);
	};
	const columns: IColumns[] = [
		{
			title: '用户名',
			dataIndex: 'username',
			sort: true,
			// 左固定列示例
			fixed: 'left',
			width: 100,
			render: t => {
				return <Text style={{ color: 'red' }}>{t}</Text>;
			}
		},

		// 服务端排序示例，结合 onSort 钩子请求后端数据
		{
			title: '手机号',
			width: 120,
			dataIndex: 'telephone',
			sort: true,
			sorter: true,
			onSort: async (v) => {
				console.log('onSort -', v);

				setLoading(true);
				const data = await getData();
				setDataSource(data);
				setLoading(false);
			}
		},
		{
			title: '性别',
			width: 40,
			dataIndex: 'sex',
			render: t => {
				switch (String(t)) {
					case '0':
						return '男';
					case '1':
						return '女';
					default:
						return '未知性别';
				}
			},
		},
		{
			title: '状态',
			width: 80,
			dataIndex: 'status',
			sort: true,
			// 禁用点击展开功能
			expandable: false,
			// render: t => {
			// 	return (<Button>{t.toString()}</Button>);
			// }
		},
		{
			title: '地址',
			width: 200,
			dataIndex: 'address',
		},
		{
			title: '订单信息',
			width: 150,
			dataIndex: 'orderInfo',
			render: (_, record) => record?.orderInfo?.price,

			// 自定义排序方式示例
			sort: true,
			sorter: (a, b, sortOrder): number => {
				if (sortOrder === 'ascend') {
					return a.orderInfo.price - b.orderInfo.price;
				} else {
					return b.orderInfo.price - a.orderInfo.price;
				}
			}
		},
		{
			// 右固定列示例
			// fixed: 'right',
			title: '创建时间',
			width: 120,
			dataIndex: 'createTime',
		},
	];
	return (
		<View className="gp-page">

			<TableExample2 />

			<TableExample3 />

			<TableExample4 />


			<Text className="header">Table</Text>

			{/* <View style={{ margin: '50px 0 20px' }}>
				<Button onClick={() => {
					const temp = [...dataSource];
					temp[3].telephone = 500;
					temp[4].telephone = 600;
					temp[5].telephone = 700;
					setDataSource(temp);
				}}
				>修改数据</Button>
				<Button onClick={fetchData}>刷新数据</Button>
				<Button onClick={setDataSource.bind(this, [])}>清空数据</Button>
				<Button onClick={setLoading.bind(this, !loading)}>loading 开关</Button>
			</View> */}

			{/* <ScrollView scrollX scrollY style={{width:"100vw",height:"331px"}}> */}

			<Table
				className="taro3table"
				onChange={v => {
					console.log('onChange -', v);
				}}
				columns={columns}
				dataSource={dataSource}
				rowKey='user_id'
				loading={loading}
				style={{
					margin: '0 auto',
					width: '100%',
					height: '400px'
				}}
				// colClassName="col"
				// rowClassName="row"
				// 固定表头、横向滚动 示例
				scroll={{
					x: '100%',
					y: '100%'
				}}
			/>
			{/* </ScrollView> */}





		</View>
	);
}


// export default function TableExample() {
// 	const tableHead = ['Head', 'Head2', 'Head3', 'Head4'],
// 		tableData = [
// 			['game1', '2', '3', '4'],
// 			['game2', 'b', 'c', 'd'],
// 			['game3', '2', '3', '456\n789'],
// 			['game4', 'b', 'c', 'd']
// 		],
// 		firstRow = [
// 			['game1'],
// 			['game2'],
// 			['game3'],
// 			['game4']
// 		];
// 	const columns = [
// 		{ key: "name", header: "姓名", width: 100, fixed: "left" },
// 		{ key: "age", header: "年龄", width: 100 },
// 		{ key: "stage", header: "年龄段", width: 100 },
// 		{ key: "marriage", header: "婚姻状况", width: 100 }
// 	]
// 	const records = [
// 		{ name: "Mario", age: 48, stage: "teenager", marriage: 0 },
// 		{ name: "Luigi", age: 38, stage: "youth", marriage: 0 },
// 		{ name: "Koopa", age: 28, stage: "youth", marriage: 1 },
// 		{ name: "Yoshi", age: 18, stage: "youth", marriage: 0 },
// 		{ name: "Link", age: 8, stage: "middle-aged", marriage: 2 },
// 		{ name: "Zelda", age: 58, stage: "middle-aged", marriage: 1 },
// 		{ name: "Wario", age: 68, stage: "elder", marriage: 3 },
// 		{ name: "Pikachu", age: 78, stage: "elder", marriage: 4 },
// 	];
// 	return (
// 		<View className="page">
// 			<Text className="header">Table</Text>

// 			<ScrollView className="">

// 				{/* <Table style={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
// 						<Row data={tableHead} />
// 					</Table> */}

// 				<Table style={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
// 					<TableWrapper className="db-table-thead fixed">
// 						<Row data={tableHead} />
// 					</TableWrapper>

// 					<View className="db-tabel-tbody">
// 						{/* Left Wrapper */}
// 						<TableWrapper className="fixed">
// 							<Cols data={firstRow} />
// 						</TableWrapper>

// 						{/* right Wrapper */}
// 						<ScrollView className="">
// 							<TableWrapper>
// 								<Cols data={tableData} />
// 							</TableWrapper>
// 						</ScrollView>
// 					</View>
// 				</Table>

// 			</ScrollView>


// 			<Table style={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
// 				<Row data={tableHead} />

// 				<Rows data={tableData} />
// 			</Table>


// 		</View>
// 	);
// }
