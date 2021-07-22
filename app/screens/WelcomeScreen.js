import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
    //   blurRadius={2.5}
      style={styles.background}
      source={require("../assets/background2.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagLine}>Welcome To SpeakEasy!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login"/>
        <AppButton title="Register" color="secondary"/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: '100%'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
      color: colors.black,
      fontSize: 40,
      fontWeight: "600",
      paddingVertical: 200,
      alignItems: 'center'
  }
});

export default WelcomeScreen;
