/// <reference types="react" />
import { IScreen } from "./stack";
declare const baseStack: import("./types").IStack<IScreen>;
declare function StackContainer({ children, stack }: {
    children: any;
    stack?: import("./types").IStack<IScreen>;
}): JSX.Element;
declare function createStack(): import("./types").IStack<IScreen>;
export { StackContainer, baseStack as Stack, createStack };
