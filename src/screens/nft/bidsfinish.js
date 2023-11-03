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
import img from "../../../assets/image11.png";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

const Bid2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={img} style={styles.image} />
      <Text style={{ fontSize: 35, color: Colors.white, textAlign: "center" }}>
        Bid Placed
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
        Your order was placed successfully For more details, check Offers Status
        in tab offers made.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("profile");
        }}
      >
        <Text style={styles.buttonText}>Check my bid</Text>
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

export default Bid2;
