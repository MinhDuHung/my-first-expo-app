import Logo from "@/assets/svgs/Logo";
import BaseContainer from "@/components/BaseContainer";
import ConfirmButton from "@/components/ConfirmButton";
import InputComponent from "@/components/InputComponent";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { scale, ScaledSheet } from "react-native-size-matters";

export default function EnterOTP() {
  const [otp, setOTP] = useState<string>("");
  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.primary }}>
      <Image style={{ flex: 1, opacity: 0.3 }} source={require("../assets/images/background.png")} />

      <BaseContainer style={styles.container}>
        <Logo style={{ marginTop: scale(50), marginBottom: scale(50) }} />

        <View style={styles.input}>
          <InputComponent title={"Nhập mã OTP"} value={otp} setState={setOTP} />
          <ConfirmButton title={"Đăng nhập"} onPress={() => console.log("otp....")} style={{ width: width * 0.9, height: scale(50), borderRadius: scale(15) }} textStyle={{ fontSize: scale(16), fontWeight: "bold" }} />
        </View>

        <View style={styles.bottom}>
          <ConfirmButton title={"Đăng nhập bằng tài khoản"} onPress={() => router.navigate("/")} style={{ width: width / 2, height: scale(40), borderRadius: scale(10) }} textStyle={{ fontSize: scale(13), fontWeight: "200" }} />
          <Text
            onPress={() => router.navigate("/forgot_password")}
            style={{
              textDecorationStyle: "solid",
              color: "white",
              fontWeight: "300",
              textDecorationLine: "underline",
            }}
          >
            Quên mật khẩu?
          </Text>
        </View>
      </BaseContainer>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    position: "absolute",
    zIndex: 1,
  },
  input: {
    width: "90%",
    alignItems: "center",
    gap: "15@s",
    height: "300@vs",
  },
  bottom: { width: "100%", alignItems: "center", gap: "20@s" },
});
