
import React, { useEffect, useState } from "react";
import EventEmitter from "eventemitter3";
import { Popup } from "tea-component-mobile";

export function callBoth(...fns) {
    return ((...args) => {
        let lastResult;
        for (const fn of fns) {
            if (typeof fn === "function") {
                lastResult = fn(...args);
            }
        }
        return lastResult;
    });
}
export function ActionSheet(props) {
    return <Popup overlay={props.overlay}>{props.children}</Popup>;
}
class ActionSheetEmitter extends EventEmitter {
}
export const actionSheetEmitter = new ActionSheetEmitter();
export function ActionSheetManager(props) {
    const [options, setOptions] = useState(props);
    useEffect(() => {
        const onShow = ({ ...options }) => {
            setOptions({ ...options, visible: true });
        };
        const onHide = () => {
            setOptions(options => ({ ...options, visible: false }));
        };
        actionSheetEmitter.on("show", onShow);
        actionSheetEmitter.on("hide", onHide);
        return () => {
            actionSheetEmitter.removeListener("show", onShow);
            actionSheetEmitter.removeListener("hide", onHide);
        };
    }, []);
    return (
        <ActionSheet
            {...options}
            onClose={callBoth(options.onClose, () => actionSheetEmitter.emit("hide"))}
        />
    );
}