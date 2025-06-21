import { H1 } from "@/components/ui/typography";
import * as React from "react";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <H1>Hello</H1>
    </View>
  );
}