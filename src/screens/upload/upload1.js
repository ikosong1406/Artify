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
import { Ionicons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

const Upload1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: Colors.white,
          fontSize: 34,
          textAlign: "center",
          marginTop: 37,
        }}
      >
        {" "}
        Upload Items{" "}
      </Text>
      <Text
        style={{
          color: Colors.white,
          fontSize: 16,
          marginTop: 37,
          marginHorizontal: 20 * scaleFactor,
        }}
      >
        Upload new items*
      </Text>
      <Text
        style={{
          color: Colors.gray,
          fontSize: 12,
          marginTop: 8,
          marginHorizontal: 20 * scaleFactor,
        }}
      >
        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB,
        GLTF, Max size: 40 MB
      </Text>
      <TouchableOpacity
        style={{
          borderStyle: "dashed",
          borderWidth: 2,
          width: 360,
          heigh: 168,
          borderColor: Colors.gray,
          marginTop: 8,
          marginHorizontal: 20 * scaleFactor,
          borderRadius: 10,
          padding: 24,
          alignItems: "center",
        }}
      >
        <Ionicons name="cloud-upload-outline" size={100} color={Colors.gray} />
        <Text style={{ color: Colors.gray, fontSize: 16 }}>
          {" "}
          Upload Your NFT
        </Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Name"
        style={styles.formInput}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="External Link"
        style={styles.formInput}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Text
        style={{
          fontSize: 10,
          marginHorizontal: 20 * scaleFactor,
          marginTop: 8,
        }}
      >
        {" "}
        Artify will include a link to this URL on this itern's detail page, so
        that users can click to learn more about it. You are welcome to link to
        your own webpage with more details.
      </Text>
      <TextInput
        placeholder="Bio"
        style={styles.formInput2}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TouchableOpacity
        style={{
          width: "90%",
          height: 45,
          backgroundColor: Colors.primary,
          paddingHorizontal: 20,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          marginLeft: 20,
          marginTop: 35,
        }}
        onPress={() => navigation.navigate("upload1")}
      >
        <Text style={{ color: Colors.gray, fontSize: 16 }}> Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  formInput: {
    width: "90%",
    height: "7%",
    backgroundColor: Colors.secondary,
    color: Colors.gray,
    borderRadius: 20,
    marginHorizontal: 20 * scaleFactor,
    paddingHorizontal: 15 * scaleFactor,
    fontSize: 10 * scaleFactor,
    marginTop: 20,
  },
  formInput2: {
    width: "90%",
    height: "12%",
    backgroundColor: Colors.secondary,
    color: Colors.gray,
    borderRadius: 20,
    marginHorizontal: 20 * scaleFactor,
    paddingHorizontal: 15 * scaleFactor,
    fontSize: 10 * scaleFactor,
    marginTop: 20,
  },
});

export default Upload1;
