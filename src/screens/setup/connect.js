import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../components/Colors";
import img1 from "../../../assets/image10.png";
import img2 from "../../../assets/image1.png";
import img3 from "../../../assets/image2.png";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const scaleFactor = width / 375;

const Connect = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState("");

  const next = () => {
    navigation.navigate("setup");
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const close = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={img1} style={styles.img} />
      <Text
        style={{
          fontSize: 34,
          color: Colors.white,
          marginLeft: 24,
          marginTop: 16,
        }}
      >
        Choose your wallet
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginLeft: 24,
          marginTop: 10,
          color: Colors.gray,
        }}
      >
        By connecting your wallet you agree to our Terms of Service and Privacy
        Policy{" "}
      </Text>

      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: Colors.secondary,
          borderRadius: 15,
          width: "90%",
          height: "7%",
          alignItems: "center",
          marginTop: 64,
          marginLeft: 20,
        }}
      >
        <Image source={img2} style={styles.img1} />
        <Text style={{ fontSize: 20, color: Colors.white, marginLeft: 30 }}>
          {" "}
          Metamask
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: Colors.secondary,
          borderRadius: 15,
          width: "90%",
          height: "7%",
          alignItems: "center",
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        <Image source={img3} style={styles.img1} />
        <Text style={{ fontSize: 20, color: Colors.white, marginLeft: 30 }}>
          Trust Wallet
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: Colors.secondary,
          borderRadius: 15,
          width: "90%",
          height: "7%",
          alignItems: "center",
          marginTop: 20,
          marginLeft: 20,
        }}
        onPress={toggleModal}
      >
        <Entypo name="link" size={30} color="black" style={styles.img1} />
        <Text style={{ fontSize: 20, color: Colors.white, marginLeft: 30 }}>
          Enter ethereum address
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={next}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 24, color: Colors.white }}>
              Enter ethereum address
            </Text>
            <TextInput
              placeholder="Address"
              style={styles.formInput}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TouchableOpacity style={styles.button1} onPress={close}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
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
  img: {
    width: 257,
    height: 257,
    marginTop: 50,
    marginLeft: "20%",
  },
  img1: {
    width: 34,
    height: 35,
    marginLeft: 40,
  },
  button: {
    width: "80%",
    height: 49,
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-between",
    marginTop: 64,
    marginLeft: 40,
  },
  button1: {
    width: "100%",
    height: 49,
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  modalContent: {
    backgroundColor: Colors.dark,
    borderRadius: 10,
    width: "95%",
    padding: width * 0.04,
    marginTop: 600,
  },
  formInput: {
    width: "100%",
    backgroundColor: Colors.secondary,
    borderColor: Colors.white,
    borderWidth: 2,
    color: Colors.gray,
    borderRadius: 10,
    marginVertical: 25,
    paddingHorizontal: 15 * scaleFactor,
    paddingVertical: 10 * scaleFactor,
    fontSize: 10 * scaleFactor,
  },
});

export default Connect;
