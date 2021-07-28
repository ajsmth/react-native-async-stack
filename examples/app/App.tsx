import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StackContainer, Stack } from "react-native-async-stack";


Stack.push({
  element: (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Hello from the application</Text>
    </SafeAreaView>
  ),
});

export default function App() {
  return (
    <StackContainer stack={Stack}>
      <SafeAreaView style={styles.container}>
        <Text>Hello from the application</Text>
      </SafeAreaView>
    </StackContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
