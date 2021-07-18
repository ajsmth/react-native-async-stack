import * as React from "react";
import { IStack } from "./types";
import { ScreenProps, ScreenStackHeaderConfigProps } from "react-native-screens";
export interface IScreen {
    meta?: any;
    element?: React.ReactElement<any>;
    screenProps?: ScreenProps;
    headerProps?: ScreenStackHeaderConfigProps;
    href?: string;
}
interface IStackProps {
    stack: IStack<IScreen>;
    children?: React.ReactNode;
}
declare function NativeStack({ stack, children }: IStackProps): JSX.Element;
declare const Stack: typeof NativeStack;
export { Stack };
