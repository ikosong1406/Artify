import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Colors from "../../components/Colors";
import img1 from "../../../assets/image3.png";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Screen1 = ({ navigation }) => {
  const next = () => {
    navigation.navigate("onboarding2");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={img1} style={styles.img} />
      <View style={styles.container2}>
        <Text style={styles.header}> Discover largest NFT marketplace</Text>
        <Text style={styles.p}>Buy and sell digital items</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 10,
              backgroundColor: Colors.white,
              marginLeft: "35%",
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 10,
              backgroundColor: "#1C212B",
              marginLeft: "10%",
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 10,
              backgroundColor: "#1C212B",
              marginLeft: "10%",
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={next}>
          <Text style={styles.buttonText}>Next</Text>
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
  container2: {
    backgroundColor: Colors.secondary,
    width: "100%",
    height: "60%",
    marginTop: 104,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 42,
  },
  header: {
    color: "white",
    textAlign: "center",
    fontSize: 34,
    fontWeight: "500",
  },
  p: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 16,
  },
  button: {
    width: 312,
    height: 49,
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-between",
    marginTop: 80,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Screen1;
