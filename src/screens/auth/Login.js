import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../components/Colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> SIGN IN </Text>
      <Text
        style={{
          fontSize: 25,
          color: Colors.white,
          marginLeft: 20,
          marginTop: 25,
        }}
      >
        {" "}
        Welcome Back !
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginLeft: 20,
          marginTop: 10,
          color: Colors.gray,
        }}
      >
        {" "}
        We are happy to see you again. Please sign up to your Account
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: height / 20,
          marginLeft: width / 10,
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: Colors.gray,
            borderWidth: 2,
            padding: 10,
            display: "flex",
            flexDirection: "row",
            borderRadius: 10,
          }}
        >
          <AntDesign name="google" size={width * 0.07} color="#DB4437" />
          <Text style={{ fontSize: 25, marginLeft: width / 20 }}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: width * 0.1,
            borderColor: Colors.gray,
            borderWidth: 2,
            padding: 10,
            display: "flex",
            flexDirection: "row",
            borderRadius: 10,
          }}
        >
          <FontAwesome
            name="facebook-square"
            size={width * 0.08}
            color="#3b5998"
          />
          <Text style={{ fontSize: 25, marginLeft: width / 20 }}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: height / 30,
        }}
      >
        <View style={styles.hr80} />
        <Text style={{ marginTop: height / 40 }}> OR </Text>
        <View style={styles.hr80} />
      </View>

      <View style={{ marginTop: 50 }}>
        <TextInput
          placeholder="Enter Your Email"
          style={styles.formInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="Enter password"
          style={styles.formInput}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("forgot")}>
        <Text style={styles.formTextLinkRight}>Forgot Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tab")}
      >
        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
      </TouchableOpacity>

      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.formTextLinkCenter}>Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              marginLeft: width / 30,
              marginTop: height / 20,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  img: {
    width: 207,
    height: 207,
    marginTop: 122,
    marginLeft: "25%",
  },
  header: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "900",
  },
  formInput: {
    width: "85%",
    backgroundColor: Colors.dark,
    borderColor: Colors.white,
    borderWidth: 2,
    color: Colors.gray,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 30 * scaleFactor,
    paddingHorizontal: 15 * scaleFactor,
    paddingVertical: 10 * scaleFactor,
    fontSize: 10 * scaleFactor,
  },
  button: {
    width: "85%",
    height: 49,
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 30 * scaleFactor,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  formTextLinkRight: {
    color: Colors.primary,
    fontSize: 13 * scaleFactor,
    textAlign: "left",
    width: "80%",
    marginVertical: 10 * scaleFactor,
    marginHorizontal: 250 * scaleFactor,
  },
  hr80: {
    width: "27%",
    height: 1 * scaleFactor,
    backgroundColor: Colors.white,
    marginTop: height / 30,
    marginHorizontal: 40 * scaleFactor,
  },
  formTextLinkCenter: {
    marginLeft: width / 4,
    fontSize: 18,
    marginTop: height / 20,
  },
});

export default Login;
