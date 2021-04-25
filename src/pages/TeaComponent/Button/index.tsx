import React from "react";
import { View, Text } from "@tarojs/components";
import { Button, Level, Typography } from "tea-component-mobile";


export default function ButtonExample() {
  return (
    <View className="page">
      <Text className="header">Button 按钮</Text>

      <Text className="header">类型</Text>
      <View className="section">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
      </View>

      <Text className="header">危险按钮</Text>
      <View className="section">
        <Button danger>Default</Button>
        <Button danger type="primary">
          Primary
        </Button>
      </View>

      <Text className="header">贴底按钮 (使用时会 fixed 在页面底部)</Text>
      <View className="fixed-button">
        <Button fixed>Default</Button>
        <Button fixed type="primary">
          Primary
        </Button>

        <Button.Group type="fixed">
          <Button>次要操作</Button>
          <Button type="primary">主操作</Button>
        </Button.Group>

        <Button.Group
          type="fixed"
          content={
            <Typography.Text>
              <Typography.Text size="xs" theme="light">
                费用：
              </Typography.Text>
              1200.00 元
            </Typography.Text>
          }
        >
          <Button type="primary">立即支付</Button>
        </Button.Group>

        <Button.Group
          type="fixed"
          content={
            <Level
              style={{ height: "100%", width: "100%" }}
              start={
                <Typography.Text>
                  <Typography.Text size="xs" theme="light">
                    费用：
                  </Typography.Text>
                  1200.00 元
                </Typography.Text>
              }
              end={
                <Button type="primary" text>
                  取消订单
                </Button>
              }
            />
          }
        >
          <Button type="primary">立即支付</Button>
        </Button.Group>
      </View>

      <Text className="header">禁用</Text>
      <View className="section">
        <Button disabled>Default</Button>
        <Button type="primary" disabled>
          Primary
        </Button>
      </View>

      <Text className="header">加载中</Text>
      <View className="section">
        <Button loading loadingText="加载中...">
          Default
        </Button>
        <Button type="primary" loading loadingText="加载中...">
          Primary
        </Button>
      </View>

      <Text className="header">尺寸</Text>
      <View className="section size-button">
        <Button size="md">中按钮</Button>
        <Button size="md" type="primary">
          中按钮
        </Button>
      </View>

      <View className="section size-button">
        <Button size="sm">小按钮</Button>
        <Button size="sm" type="primary">
          小按钮
        </Button>
      </View>

      <Text className="header">包含图标</Text>
      <View className="section">
        <Button icon="search">Default</Button>
        <Button type="primary" icon="search">
          Primary
        </Button>
      </View>

      <Text className="header">文本按钮</Text>
      <View className="section text-button">
        <Button text icon="search" />
        <Button text>搜索</Button>
        <Button text icon="search">
          搜索
        </Button>
        <Button text disabled icon="search">
          搜索
        </Button>
      </View>

      <View className="section text-button">
        <Button text type="primary" icon="edit" />
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

      <View className="section text-button">
        <Button text danger icon="delete" />
        <Button text danger>
          删除
        </Button>
        <Button text danger icon="delete">
          删除
        </Button>
        <Button text disabled danger icon="delete">
          删除
        </Button>
      </View>

      <Text className="header">按钮组</Text>
      <View className="section">
        <Button.Group>
          <Button type="primary">主操作</Button>
          <Button>次要操作</Button>
        </Button.Group>

        <Button.Group type="horizontal">
          <Button size="md" type="primary">
            主操作
          </Button>
          <Button size="md">次要操作</Button>
        </Button.Group>

        <Button.Group type="horizontal">
          <Button size="sm" type="primary">
            主操作
          </Button>
          <Button size="sm">次要操作</Button>
        </Button.Group>
      </View>

      <View className="section">
        <Text className="header">操作按钮组</Text>

        <Button.Group type="operational">
          <Button>操作一</Button>
          <Button>操作二</Button>
        </Button.Group>

        <Button.Group type="operational">
          <Button>操作一</Button>
          <Button>操作二</Button>
          <Button>操作三</Button>
        </Button.Group>

        <Button.Group type="operational">
          <Button>操作一</Button>
          <Button>操作二</Button>
          <Button icon="more" />
        </Button.Group>
      </View>
    </View>
  );
}