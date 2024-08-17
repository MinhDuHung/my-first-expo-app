import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Profile from "@/assets/svgs/Profile";
import Lock from "@/assets/svgs/Lock";
import Phone from "@/assets/svgs/Phone";
import OpenEye from "@/assets/svgs/OpenEye";
import { ScaledSheet } from "react-native-size-matters";

interface Props {
  title: string;
  value: string;
  leftIcon?: string;
  rightIcon?: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const InputComponent = ({ value, leftIcon, title, rightIcon, setState }: Props) => {
  const [secure, setSecure] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        {leftIcon && LeftIcon(leftIcon)}
        <TextInput value={value} secureTextEntry={secure} style={styles.textInput} onChangeText={(v) => setState(v)} />
        {rightIcon && RightIcon(rightIcon, setSecure)}
      </View>
    </View>
  );
};

export default InputComponent;

const LeftIcon = (leftIcon: string) => {
  const icons: Record<string, React.JSX.Element> = {
    profile: <Profile />,
    lock: <Lock />,
    phone: <Phone />,
  };
  return <View style={{ position: "absolute", zIndex: 1, left: 15 }}>{icons[leftIcon]}</View>;
};

const RightIcon = (leftIcon: string, setSecure: React.Dispatch<React.SetStateAction<boolean>>) => {
  const icons: Record<string, React.JSX.Element> = {
    open_eye: (
      <TouchableOpacity onPress={() => setSecure((p) => !p)}>
        <OpenEye />
      </TouchableOpacity>
    ),
  };
  return <View style={{ position: "absolute", zIndex: 1, right: 15 }}>{icons[leftIcon]}</View>;
};

const styles = ScaledSheet.create({
  container: {
    height: "60@s",
    width: "90%",
    gap: "5@s",
    marginBottom: "10@s",
  },
  textInput: {
    height: "50@s",
    borderRadius: "10@s",
    backgroundColor: "white",
    paddingHorizontal: "50@s",
    width: "100%",
    fontSize: "16@s",
  },

  title: {
    paddingHorizontal: "15@s",
    color: "white",
    fontSize: "16@s",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
});
