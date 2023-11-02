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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

const Forgot = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    navigation.navigate("forgot1");
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

      <View style={{ marginTop: 30 }}>
        <TextInput
          placeholder="Email"
          style={styles.formInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Text style={styles.buttonText}>Next</Text>
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
  formInput: {
    width: "90%",
    backgroundColor: Colors.dark,
    borderColor: Colors.white,
    borderWidth: 2,
    color: Colors.gray,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 20 * scaleFactor,
    paddingHorizontal: 15 * scaleFactor,
    paddingVertical: 10 * scaleFactor,
    fontSize: 10 * scaleFactor,
  },
  button: {
    width: "90%",
    height: 49,
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20 * scaleFactor,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Forgot;
