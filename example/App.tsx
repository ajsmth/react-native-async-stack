import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

import { StackContainer, Stack } from "react-native-async-stack";

Stack.push({ element: <FirstScreen /> });

export default function App() {
  return <StackContainer stack={Stack} />;
}

function FirstScreen({}) {
  const [inputValue, setInputValue] = React.useState("123");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        style={{ borderWidth: 1, fontSize: 16 }}
      /> */}
      <Button
        title="Next Screen"
        onPress={() =>
          Stack.push({
            element: <TestScreen value={inputValue} setValue={setInputValue} />,
            headerProps: {
              title: inputValue,
            },
          })
        }
      />
    </SafeAreaView>
  );
}

function TestScreen({ value, setValue }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Value: {value}</Text>

      <TextInput
        value={value}
        onChangeText={setValue}
        style={{ borderWidth: 1, fontSize: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
