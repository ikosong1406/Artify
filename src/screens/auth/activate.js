import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import email from "react-native-email-link";
import OTPInputView from "react-native-otp-inputs";
import Colors from "../../components/Colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

export default function ActivationScreen({ navigation }) {
  const [activationCode, setActivationCode] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [showResend, setShowResend] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendActivationCode = () => {
    const code = generateActivationCode();
    email({
      subject: "Activation Code",
      body: `Your activation code is: ${code}`,
    });
    setActivationCode(code);
    setCountdown(120);
    setShowResend(false);
  };

  const generateActivationCode = () => {
    return Math.floor(Math.random() * 10000).toString();
  };

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setShowResend(true);
    }
  }, [countdown]);

  const handleActivate = () => {
    // Add code activation logic here to verify activationCode
    if (activationCode === inputCode) {
      // Activation successful
    } else {
      // Activation failed
    }
  };

  const handleLogin = () => {
    navigation.navigate("connect");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          color: Colors.white,
          marginLeft: 20,
          marginTop: 100,
        }}
      >
        Forgot Password
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginLeft: 20,
          marginTop: 10,
          color: Colors.gray,
        }}
      >
        A Password reset link will be sent to the email entered below
      </Text>
      <OTPInputView
        style={{
          width: "80%",
          height: 100,
          marginLeft: "10%",
          marginTop: "5%",
        }}
        pinCount={4}
        code={activationCode}
        onCodeChanged={(code) => setActivationCode(code)}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: width / 4,
        }}
      >
        <Text style={styles.resend}>Resend code in {countdown}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              marginLeft: width / 30,
              marginTop: height / 30,
            }}
          >
            Resend
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Text style={styles.buttonText}>Activate</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  resend: {
    textAlign: "center",
    marginTop: height / 30,
    fontSize: 20,
  },
  button: {
    width: "85%",
    height: 49,
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 50,
    marginHorizontal: 30,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
});
