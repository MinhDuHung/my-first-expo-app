import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { ScaledSheet } from "react-native-size-matters";

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

const styles = ScaledSheet.create({
  btn: {
    backgroundColor: Colors.confirmButton,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 2,
  },
  text: {
    color: "white",
    fontSize: "16@s",
    fontWeight: "bold",
  },
});
