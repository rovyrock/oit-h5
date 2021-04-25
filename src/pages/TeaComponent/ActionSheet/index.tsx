
// import React from "react";
// import { View, Text } from "@tarojs/components";
// import { Button, Select } from "tea-component-mobile";
// import { ActionSheet } from "@/components/ActionSheet";

// export default function DemoExample() {
// 	const options = [
// 		{ text: "Latest", value: "1" },
// 		{ text: "Hot", value: "2" },
// 	  ];
	  
// 	return (
// 		<View className="page">
// 			<Text className="header">ActionSheet 动作面板</Text>
// 			<View className="section">
// 				{/* <Button>动作面板</Button> */}
// 				<ActionSheet
// 					overlay={close => (
// 						<View className="oitm-actionsheet">
// 							{/* <View className="oitm-actionsheet__hd">动作面板</View> */}
// 							<View className="oitm-actionsheet__bd">
// 								{
// 									options.map((item,index)=>(<Button key={index} onClick={()=>{
// 										console.log(item);
// 										close()
// 									}}>{item.text}</Button>))
// 								}
//               				</View>
// 							<View className="oitm-actionsheet__ft">
// 								<Button onClick={close}>
// 									Cancel
//                 				</Button>
// 							</View>

// 						</View>
// 					)}
// 				><Button onClick={()=>console.log('click')}>Latest</Button></ActionSheet>
// 			</View>
// 		</View>
// 	);
// }



import React from "react";
import { View, Text } from "@tarojs/components";
import {
  ActionSheet,
  Button,
  ComponentProvider,
} from "tea-component-mobile";

export default function ActionSheetExample() {
  return (
    <ComponentProvider>
      <View className="page">
        <Text className="header">ActionSheet 动作面板</Text>
        <Text className="header">基本用法</Text>
        <View className="section">
          <Button
            onClick={() =>
              ActionSheet.show({
                options: ["选项一", "选项二"],
                onSelect: index => console.log(index),
              })
            }
          >
            动作面板
          </Button>
        </View>

        <Text className="header">面板标题</Text>
        <View className="section">
          <Button
            onClick={() =>
              ActionSheet.show({
                title: "面板标题说明",
                options: ["选项一", "选项二"],
                onSelect: index => console.log(index),
              })
            }
          >
            动作面板
          </Button>
        </View>

        <Text className="header">选项配置</Text>
        <View className="section">
          <Button
            onClick={() =>
              ActionSheet.show({
                title: "面板标题说明",
                options: [
                  { name: "选项一" },
                  { name: "选项二", description: "选项说明文案" },
                  { name: "选项三", disabled: true },
                  { name: "选项四", destructive: true },
                ],
                onSelect: index => console.log(index),
              })
            }
          >
            动作面板
          </Button>
        </View>
      </View>
    </ComponentProvider>
  );
}