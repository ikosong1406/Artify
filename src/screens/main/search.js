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
import { FontAwesome } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

function Search() {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: Colors.white,
          fontSize: 34,
          marginTop: 62,
          marginLeft: 24,
        }}
      >
        Search
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: Colors.secondary,
          width: "85%",
          marginLeft: 30,
          borderRadius: 20,
          marginTop: 25,
          paddingHorizontal: 24,
        }}
      >
        <FontAwesome
          name="search"
          size={24}
          color={Colors.white}
          style={{ marginTop: 12 }}
        />
        <TextInput
          placeholder="Search Your Nft"
          style={styles.formInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  formInput: {
    width: "50%",
    backgroundColor: Colors.secondary,
    color: Colors.gray,
    borderRadius: 20,
    paddingHorizontal: 15 * scaleFactor,
    paddingVertical: 10 * scaleFactor,
    fontSize: 10 * scaleFactor,
  },
});

export default Search;
