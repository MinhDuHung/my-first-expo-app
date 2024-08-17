import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login_phone" options={{ headerShown: false }} />
      <Stack.Screen name="forgot_password" options={{ headerShown: false }} />
      <Stack.Screen name="enter_otp" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
