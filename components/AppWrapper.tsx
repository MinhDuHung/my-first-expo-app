import { StyleSheet, Image, View, ViewProps } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface Props extends ViewProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<Props> = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.primary }}>
      <Image style={{ flex: 1, opacity: 0.3 }} source={require("../assets/images/background.png")} />
      {children}
    </View>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({});
