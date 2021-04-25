import React, { useState } from "react";
import { View } from "@tarojs/components";
import { RMCCalendar } from '@gem-mine/rmc-calendar';

// import { Calendar as RMCCalendar } from 'rmc-calendar';
const now = new Date();

export default class BasicDemo extends React.Component {
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

            <RMCCalendar
                {...this.state.config}
                visible={this.state.show}
                onOk={(startTime, endTime) => {
                    console.log("ok"); this.setState({
                        startTime,
                        endTime,
                    });
                }}
                // onSelect={(e)=>{console.log("onSelect",e)}}
                onSelect={(date) => {
                    console.log('onSelect', date);
                    return [date, new Date(+new Date - 7 * 24 * 3600 * 1000)];
                }}
                onChange={() => { console.log("onChange") }}
            />

        )

    }
}