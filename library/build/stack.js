"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Stack = void 0;
var React = require("react");
var create_async_stack_1 = require("./create-async-stack");
var react_native_screens_1 = require("react-native-screens");
var react_native_1 = require("react-native");
function WebStack(_a) {
    var stack = _a.stack;
    var screens = (0, create_async_stack_1.useStackItems)(stack);
    return (<WebScreenStack style={__assign(__assign({}, react_native_1.StyleSheet.absoluteFillObject), { overflow: "hidden" })}>
      {screens.map(function (screen) {
            return (<WebScreen key={screen.key} status={screen.status} onPushEnd={function () { return stack.onPushEnd(screen.key); }} onPopEnd={function () { return stack.onPopEnd(screen.key); }}>
            {screen.element}
          </WebScreen>);
        })}
    </WebScreenStack>);
}
function WebScreenStack(props) {
    return <react_native_1.View {...props}/>;
}
function WebScreen(_a) {
    var children = _a.children, onPushEnd = _a.onPushEnd, onPopEnd = _a.onPopEnd, status = _a.status;
    var animatedValue = React.useRef(new react_native_1.Animated.Value(status === "settled" ? 1 : 0));
    React.useEffect(function () {
        if (status === "pushing") {
            react_native_1.Animated.spring(animatedValue.current, {
                toValue: 1,
                useNativeDriver: true,
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true
            }).start(onPushEnd);
        }
        if (status === "popping") {
            react_native_1.Animated.spring(animatedValue.current, {
                toValue: 0,
                useNativeDriver: true,
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true
            }).start(onPopEnd);
        }
    }, [status]);
    var translateX = animatedValue.current.interpolate({
        inputRange: [0, 1],
        outputRange: ["100%", "0%"]
    });
    return (<react_native_1.Animated.View pointerEvents={status === "popping" ? "none" : "auto"} style={[react_native_1.StyleSheet.absoluteFill, { transform: [{ translateX: translateX }] }]}>
      {children}
    </react_native_1.Animated.View>);
}
function NativeStack(_a) {
    var stack = _a.stack;
    var screens = (0, create_async_stack_1.useStackItems)(stack);
    return (<react_native_screens_1.ScreenStack style={react_native_1.StyleSheet.absoluteFill}>
      {screens.map(function (screen, i) {
            return (<NativeScreen index={i} key={screen.key} status={screen.status} onPushEnd={function () { return stack.onPushEnd(screen.key); }} onPopEnd={function () { return stack.onPopEnd(screen.key); }} {...(screen.screenProps || {})}>
            <react_native_screens_1.ScreenStackHeaderConfig hidden={!screen.headerProps} {...screen.headerProps}/>

            {screen.element || null}
          </NativeScreen>);
        })}
    </react_native_screens_1.ScreenStack>);
}
function NativeScreen(_a) {
    var index = _a.index, status = _a.status, onPushEnd = _a.onPushEnd, onPopEnd = _a.onPopEnd, children = _a.children, props = __rest(_a, ["index", "status", "onPushEnd", "onPopEnd", "children"]);
    React.useEffect(function () {
        if (status === "pushing") {
            onPushEnd();
        }
        if (status === "popping") {
            onPopEnd();
        }
    }, [status, onPushEnd, onPopEnd]);
    return (<react_native_screens_1.Screen active={1} activityState={2} style={react_native_1.StyleSheet.absoluteFill} onDismissed={onPopEnd} gestureEnabled={index !== 0} {...props}>
      {children}
    </react_native_screens_1.Screen>);
}
var Stack = react_native_1.Platform.select({
    native: NativeStack,
    web: WebStack,
    "default": WebStack
});
exports.Stack = Stack;
