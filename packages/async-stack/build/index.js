"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStack = exports.Stack = exports.StackContainer = void 0;
var React = __importStar(require("react"));
var create_async_stack_1 = require("./create-async-stack");
var stack_1 = require("./stack");
var baseStack = create_async_stack_1.createAsyncStack();
exports.Stack = baseStack;
function StackContainer(_a) {
    var children = _a.children, _b = _a.stack, stack = _b === void 0 ? baseStack : _b;
    return <stack_1.Stack stack={stack}>{children}</stack_1.Stack>;
}
exports.StackContainer = StackContainer;
function createStack() {
    return create_async_stack_1.createAsyncStack();
}
exports.createStack = createStack;
