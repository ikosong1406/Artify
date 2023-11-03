import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import Colors from "../../components/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

const Bid = ({ route, navigation }) => {
  const { selectedCard } = route.params;
  const [bidPrice, setBidPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const submitBid = () => {
    // Check if the bidPrice is valid (e.g., a number greater than 0)
    if (isNaN(bidPrice) || parseFloat(bidPrice) <= 0) {
      // Handle invalid bid
      alert("Please enter a valid bid price.");
    } else {
      navigation.navigate("bid2");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          marginTop: 40,
          textAlign: "center",
          color: Colors.white,
        }}
      >
        {" "}
        Bid Details
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 50,
        }}
      >
        <Image source={selectedCard.image} style={styles.image} />
        <View style={{ marginLeft: 16 }}>
          <Text style={{ fontSize: 25, color: Colors.white }}>
            {selectedCard.title}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: Colors.gray,
              width: 148,
              height: 71,
              marginTop: 10,
            }}
          >
            {selectedCard.description}
          </Text>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <Image
              source={selectedCard.userprofile}
              style={styles.userprofile}
            />
            <Text
              style={{
                marginLeft: 10,
                color: Colors.white,
                fontSize: 15,
                marginTop: 5,
              }}
            >
              {selectedCard.username}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: Colors.secondary,
          marginTop: 50,
          width: "85%",
          marginLeft: 30,
          paddingHorizontal: 50,
          borderRadius: 20,
        }}
      >
        <FontAwesome5
          name="ethereum"
          size={30}
          color={Colors.gray}
          style={{ marginLeft: 50, marginTop: 5 }}
        />
        <TextInput
          onChangeText={(text) => setBidPrice(text)}
          value={bidPrice}
          placeholder="Enter bid price"
          keyboardType="numeric"
          style={styles.formInput}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 12,
          color: Colors.gray,
        }}
      >
        {" "}
        You must bid at least {selectedCard.price} ETH
      </Text>

      <TouchableOpacity style={styles.button} onPress={submitBid}>
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
  image: {
    width: 148,
    height: 163,
    borderRadius: 20,
    marginLeft: 40,
  },
  userprofile: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  formInput: {
    width: "50%",
    backgroundColor: Colors.secondary,
    color: Colors.gray,
    borderRadius: 20,
    marginLeft: 10,
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
export default Bid;
