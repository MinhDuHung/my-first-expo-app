import React from "react";
import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(login)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MainLayout;
