import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";
import Colors from "../../components/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Sell1 = ({ route, navigation }) => {
  const { selectedCard } = route.params;
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleClose = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Image source={selectedCard.image} style={styles.image} />
      </TouchableOpacity>
      <Text
        style={{
          color: Colors.white,
          fontSize: 20,
          marginTop: 26,
          marginLeft: 29,
        }}
      >
        {selectedCard.username}
      </Text>
      <Text
        style={{
          fontSize: 34,
          fontWeight: "bold",
          color: Colors.white,
          marginTop: 10,
          marginLeft: 29,
        }}
      >
        {selectedCard.title}
      </Text>

      <View style={{ marginTop: 20, display: "flex", flexDirection: "row" }}>
        <Image source={selectedCard.userprofile} style={styles.userprofile} />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ color: Colors.gray, fontSize: 14 }}> Created By </Text>
          <Text style={{ color: Colors.white, fontSize: 18 }}>
            {" "}
            {selectedCard.username}{" "}
          </Text>
        </View>
      </View>

      <Text
        style={{
          color: Colors.white,
          fontSize: 14,
          marginTop: 21,
          marginLeft: 25,
        }}
      >
        {" "}
        {selectedCard.description}
      </Text>

      <View
        style={{
          backgroundColor: Colors.secondary,
          width: "100%",
          height: 90,
          paddingHorizontal: 24,
          paddingVertical: 17,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "35%",
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            backgroundColor: Colors.primary,
            borderRadius: 20,
            padding: 16,
            marginLeft: 20,
            paddingHorizontal: 100,
          }}
          onPress={() => {
            navigation.navigate("sell2");
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontSize: 20,
              marginLeft: 25,
              textAlign: "center",
            }}
          >
            Sell Items
          </Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.dark,
          }}
        >
          <TouchableOpacity
            onPress={toggleClose}
            style={{ marginLeft: 30, marginTop: 40 }}
          >
            <FontAwesome name="close" size={40} color={Colors.white} />
          </TouchableOpacity>
          <Image
            source={selectedCard.image}
            style={{ width: "100%", height: 400, marginTop: 130 }}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  image: {
    width: 344,
    height: 344,
    borderRadius: 20,
    marginTop: 104,
    marginLeft: 34,
  },
  userprofile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 24,
  },
});

export default Sell1;
