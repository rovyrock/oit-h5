import React, { useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Card, Button, Typography, WhiteSpace, Radio } from "tea-component-mobile";
import network from "@/utils/network";
import { initTestEnv } from 'src/utils/utils';

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
export default function MockExample() {
  const [type, setType] = useState()
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
          <Card>
            <Card.Header>Mock数据Demo</Card.Header>
            <Card.Body>
              {
                data?.map((item, key) => (<View key={key}>
                  <View key={key}>{item.name}</View>
                  <Radio.Group value={type} block type="button" onChange={(value) => {
                    console.log("Radio", value)
                    setType(value)
                  }}>
                    {item.rankTypes.map((value, index) => (
                      <Radio key={`${key}-${index}`} name={`${key}-${index}`}>{value}</Radio>
                    ))}
                  </Radio.Group>
                </View>
                ))
              }
            </Card.Body>
          </Card>
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
