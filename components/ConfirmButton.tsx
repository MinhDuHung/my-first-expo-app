import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const ConfirmButton: React.FC<Props> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ConfirmButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.confirmButton,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
