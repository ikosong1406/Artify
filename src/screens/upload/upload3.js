import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import Colors from "../../components/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import img from "../../../assets/image12.png";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

const Upload3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={img} style={styles.image} />
      <Text style={{ fontSize: 35, color: Colors.white, textAlign: "center" }}>
        Hurrah
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: Colors.white,
          width: 284,
          marginTop: 16,
        }}
      >
        Your NFT Published
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          backgroundColor: Colors.secondary,
          width: 150,
          padding: 5,
          justifyContent: "center",
          borderRadius: 20,
        }}
      >
        <Text style={{ color: Colors.white, fontSize: 16 }}> Share</Text>
        <FontAwesome5
          name="share-alt"
          size={24}
          color={Colors.white}
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        <Text style={styles.buttonText}>Back To Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "90%",
    height: 49,
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 50,
    marginHorizontal: 20 * scaleFactor,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Upload3;
