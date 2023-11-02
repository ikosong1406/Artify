import React from "react";
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
import Colors from "../../components/Colors";
import img1 from "../../../assets/image6.png";

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={img1} style={styles.img} />
      <Text
        style={{
          color: Colors.white,
          fontSize: 40,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        Hey! Welcome{" "}
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: Colors.white,
          marginTop: 16,
          textAlign: "center",
        }}
      >
        Create and Sell your NFT in 1 seconds
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  img: {
    width: 310,
    height: 310,
    marginTop: 150,
    marginLeft: "10%",
  },
});
export default Welcome;
