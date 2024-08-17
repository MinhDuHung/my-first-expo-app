import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface Props {
  title: string;
  onPress: () => void;
  width: number;
  height: number;
  fontSize: number;
  fontWeight: any;
  borderRadius: number;
}
const ConfirmButton = ({ title, onPress, width, height, fontSize, borderRadius, fontWeight }: Props) => {
  return (
    <TouchableOpacity style={[styles.btn, { width, height, borderRadius }]} onPress={onPress}>
      <Text style={{ color: "white", fontSize, fontWeight }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ConfirmButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.confirmButton,
    justifyContent: "center",
    alignItems: "center",
  },
});
