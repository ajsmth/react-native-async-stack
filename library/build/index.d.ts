/// <reference types="react" />
import { IScreen } from "./stack";
declare const baseStack: import("./types").IStack<IScreen>;
declare function StackContainer({ stack }: {
    stack?: import("./types").IStack<IScreen> | undefined;
}): JSX.Element;
declare function createStack(): import("./types").IStack<IScreen>;
export { StackContainer, baseStack as Stack, createStack };
