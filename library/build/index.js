"use strict";
exports.__esModule = true;
exports.createStack = exports.Stack = exports.StackContainer = void 0;
var React = require("react");
var create_async_stack_1 = require("./create-async-stack");
var stack_1 = require("./stack");
var baseStack = (0, create_async_stack_1.createAsyncStack)();
exports.Stack = baseStack;
function StackContainer(_a) {
    var _b = _a.stack, stack = _b === void 0 ? baseStack : _b;
    return <stack_1.Stack stack={stack}/>;
}
exports.StackContainer = StackContainer;
function createStack() {
    return (0, create_async_stack_1.createAsyncStack)();
}
exports.createStack = createStack;
