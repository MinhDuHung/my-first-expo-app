import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BaseContainer from "@/components/BaseContainer";
import Back from "@/assets/svgs/Back";
import { scale, ScaledSheet } from "react-native-size-matters";
import { router } from "expo-router";
import InputComponent from "@/components/InputComponent";
import ConfirmButton from "@/components/ConfirmButton";
import AppWrapper from "@/components/AppWrapper";

const ForgotPassWord = () => {
  const [input, setInput] = useState<string>("");

  return (
    <AppWrapper>
      <BaseContainer style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.title}>Khôi phục mật khẩu</Text>
          <Back opacity={0} />
        </View>

        <View style={styles.body}>
          <View style={{ flex: 1 }}>
            <Text style={styles._title}>Bạn quên mật khẩu?</Text>
            <Text style={styles.content}> Vui lòng nhập thông tin Email hoặc Số điện thoại đã đăng ký với Container Go! Chúng tôi sẽ gửi link khôi phục mật khẩu đến thiết bị của bạn !</Text>

            <InputComponent
              title={"Nhập email hoặc SĐT"}
              value={input}
              placeholder="Example@email.com"
              setState={setInput}
              style={{
                borderWidth: 0.5,
                borderColor: "rgba(0,0,0,.1)",
                shadowOpacity: 0.1,
                shadowOffset: {
                  width: 1,
                  height: 1,
                },
                elevation: 2,
              }}
              textStyle={{
                color: "black",
                fontWeight: "400",
              }}
            />
          </View>
          <ConfirmButton
            title={"Gửi"}
            onPress={() => console.log("submit")}
            style={{
              height: scale(40),
              marginBottom: scale(30),
            }}
            textStyle={{
              fontWeight: "500",
              fontSize: scale(16),
            }}
          />
        </View>
      </BaseContainer>
    </AppWrapper>
  );
};

export default ForgotPassWord;

const styles = ScaledSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: "15@s",
    paddingTop: "10@s",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: "16@s",
    textAlign: "center",
    flex: 1,
  },
  _title: {
    color: "black",
    fontWeight: "bold",
    fontSize: "16@s",
    textAlign: "center",
  },
  body: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: "15@s",
    width: "100%",
    marginTop: "15@s",
    borderTopRightRadius: "25@s",
    borderTopLeftRadius: "25@s",
    paddingHorizontal: "15@s",
  },
  content: {
    color: "black",
    fontWeight: "300",
    fontSize: "14@s",
    textAlign: "center",
    marginTop: "10@s",
    marginBottom: "30@s",
  },
});
