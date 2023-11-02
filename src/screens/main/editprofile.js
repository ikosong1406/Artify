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
import Colors from "../../components/Colors";
import cover from "../../../assets/banner-photo.jpg";
import img1 from "../../../assets/image10.png";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

const Editprofile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.primary,
          width: 127,
          height: 36,
          marginTop: 34,
          padding: 7,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: 260,
        }}
      >
        <Text style={{ color: Colors.white, fontSize: 14 }}> Save Changes</Text>
      </TouchableOpacity>
      <Image
        source={cover}
        style={{ width: "100%", marginTop: 18, height: 200 }}
      />
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image source={img1} style={styles.img} />
      </View>
      <TextInput
        placeholder="Username"
        style={styles.formInput}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Bio"
        style={styles.formInput2}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  img: {
    width: 110,
    height: 110,
    marginTop: 50,
    marginLeft: "10%",
    borderRadius: 100,
    backgroundColor: Colors.success,
    zIndex: 2,
    position: "relative",
    top: -100,
    left: -12,
  },
  formInput: {
    width: "90%",
    height: "7%",
    backgroundColor: Colors.secondary,
    borderColor: Colors.white,
    borderWidth: 2,
    color: Colors.gray,
    borderRadius: 20,
    marginHorizontal: 20 * scaleFactor,
    paddingHorizontal: 15 * scaleFactor,
    fontSize: 10 * scaleFactor,
    marginTop: -70,
  },
  formInput2: {
    width: "90%",
    height: "12%",
    backgroundColor: Colors.secondary,
    borderColor: Colors.white,
    borderWidth: 2,
    color: Colors.gray,
    borderRadius: 20,
    marginHorizontal: 20 * scaleFactor,
    paddingHorizontal: 15 * scaleFactor,
    fontSize: 10 * scaleFactor,
    marginTop: 20,
  },
});

export default Editprofile;
