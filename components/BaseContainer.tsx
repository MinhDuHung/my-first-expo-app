import React from "react";
import { View, ViewProps, StyleSheet, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  children: React.ReactNode;
}

const BaseContainer: React.FC<Props> = ({ children, style, ...rest }) => {
  const inset = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  return (
    <View style={[{ paddingTop: inset.top, paddingBottom: inset.bottom, width, height }, style]} {...rest}>
      {children}
    </View>
  );
};

export default BaseContainer;
