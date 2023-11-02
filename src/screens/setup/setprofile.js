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
import img1 from "../../../assets/image10.png";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

const Setup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    navigation.navigate("welcome");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> SETUP PROFILE </Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image source={img1} style={styles.img} />
        <TouchableOpacity
          style={{
            width: "30%",
            height: "20%",
            borderColor: Colors.white,
            borderWidth: 2,
            color: Colors.gray,
            borderRadius: 10,
            marginTop: 50,
            marginLeft: "20%",
            marginTop: "20%",
          }}
        >
          <Text
            style={{
              fontSize: 16 * scaleFactor,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            Upload Profile
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Bio"
        style={styles.formInput}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Text style={styles.buttonText}>Submit</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  img: {
    width: 120,
    height: 120,
    marginTop: 50,
    marginLeft: "10%",
    borderRadius: 100,
    backgroundColor: Colors.success,
  },
  header: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "900",
  },
  formInput: {
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
    marginTop: 50,
  },
  button: {
    width: "90%",
    height: 49,
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 20,
    justifyContent: "space-between",
    marginHorizontal: 20 * scaleFactor,
    marginTop: 20,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Setup;
