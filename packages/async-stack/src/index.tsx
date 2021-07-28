import * as React from "react";
import { createAsyncStack } from "./create-async-stack";
import { IScreen, Stack as StackComponent } from "./stack";

const baseStack = createAsyncStack<IScreen>();

function StackContainer({ children, stack = baseStack }) {
  return <StackComponent stack={stack}>{children}</StackComponent>;
}

function createStack() {
  return createAsyncStack<IScreen>();
}

export { StackContainer, baseStack as Stack, createStack };
