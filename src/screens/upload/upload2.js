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
import { FontAwesome5 } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

const Upload2 = ({ navigation }) => {
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
        Set Price
      </Text>
      <TextInput
        placeholder="Supply Item"
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
        The number of coples that can be minted. No gas cost to your Quantities
        above one coming soon
      </Text>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 34 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: 100,
            height: 56,
            backgroundColor: Colors.secondary,
            color: Colors.gray,
            borderRadius: 20,
            marginHorizontal: 20 * scaleFactor,
            paddingHorizontal: 15 * scaleFactor,
            fontSize: 10 * scaleFactor,
          }}
        >
          <FontAwesome5
            name="ethereum"
            size={30}
            color={Colors.gray}
            style={{ marginTop: 10 }}
          />
          <Text
            style={{
              color: Colors.white,
              fontSize: 20,
              marginLeft: 8,
              marginTop: 15,
            }}
          >
            {" "}
            ETH
          </Text>
        </View>
        <TextInput
          placeholder="Price"
          style={styles.formInput2}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>

      <View
        style={{
          backgroundColor: Colors.gray,
          width: "90%",
          height: 1,
          marginLeft: 20,
          marginTop: 50,
        }}
      />
      <Text
        style={{
          color: Colors.white,
          fontSize: 16,
          marginLeft: 24,
          marginTop: 24,
        }}
      >
        Fees
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "85%",
          marginLeft: 25,
          marginTop: 20,
        }}
      >
        <Text style={{ color: Colors.gray, fontSize: 12 }}>Artify fee</Text>
        <Text style={{ color: Colors.gray, fontSize: 12 }}>2,50%</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "85%",
          marginLeft: 25,
          marginTop: 20,
        }}
      >
        <Text style={{ color: Colors.gray, fontSize: 12 }}>
          Customer Royalty
        </Text>
        <Text style={{ color: Colors.gray, fontSize: 12 }}>10,00%</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 50,
          justifyContent: "space-between",
          width: "85%",
          marginLeft: 24,
        }}
      >
        <Text style={{ color: Colors.white, fontSize: 18, marginTop: 12 }}>
          {" "}
          Total Earnings
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <FontAwesome5
            name="ethereum"
            size={30}
            color={Colors.gray}
            style={{ marginTop: 10 }}
          />
          <Text
            style={{
              color: Colors.white,
              fontSize: 25,
              marginTop: 12,
              marginLeft: 10,
            }}
          >
            {" "}
            0,875
          </Text>
        </View>
      </View>

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
          marginTop: 80,
        }}
        onPress={() => navigation.navigate("upload3")}
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
    width: 200,
    height: 56,
    backgroundColor: Colors.secondary,
    color: Colors.gray,
    borderRadius: 20,
    paddingHorizontal: 15 * scaleFactor,
    fontSize: 10 * scaleFactor,
  },
});

export default Upload2;
