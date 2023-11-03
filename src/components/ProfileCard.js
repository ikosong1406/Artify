import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "./Colors";
import { useNavigation } from "@react-navigation/native";

const SwiperComponent = () => {
  const cards = [
    {
      image: require("../../assets/image22.jpg"),
      title: "Mosu #1930",
      time: "102d Left",
      userprofile: require("../../assets/image2.jpg"),
      username: "Karafuru",
      price: "2,75 ",
      description:
        "Karafuru is home to 5,555 generative arts where colors reign supreme Leave the drab reality and enter the world of Karafuru by Museum of Toys",
    },
    {
      image: require("../../assets/image21.jpg"),
      title: "Mosu #1930",
      time: "102d Left",
      userprofile: require("../../assets/image2.jpg"),
      username: "Karafuru",
      price: "3,75 ",
      description:
        "Karafuru is home to 5,555 generative arts where colors reign supreme Leave the drab reality and enter the world of Karafuru by Museum of Toys",
    },
    {
      image: require("../../assets/image2.jpg"),
      title: "Mosu #1930",
      time: "102d Left",
      userprofile: require("../../assets/image2.jpg"),
      username: "Karafuru",
      price: "4,75 ",
      description:
        "Karafuru is home to 5,555 generative arts where colors reign supreme Leave the drab reality and enter the world of Karafuru by Museum of Toys",
    },
    {
      image: require("../../assets/image8.jpg"),
      title: "Mosu #1930",
      time: "102d Left",
      userprofile: require("../../assets/image2.jpg"),
      username: "Karafuru",
      price: "5,75 ",
      description:
        "Karafuru is home to 5,555 generative arts where colors reign supreme Leave the drab reality and enter the world of Karafuru by Museum of Toys",
    },
    {
      image: require("../../assets/image7.jpg"),
      title: "Mosu #1930",
      time: "102d Left",
      userprofile: require("../../assets/image2.jpg"),
      username: "Karafuru",
      price: "1,75 ",
      description:
        "Karafuru is home to 5,555 generative arts where colors reign supreme Leave the drab reality and enter the world of Karafuru by Museum of Toys",
    },
  ];

  const navigation = useNavigation();

  const handleCardPress = (selectedCard) => {
    navigation.navigate("sell1", { selectedCard });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
      <View style={styles.card}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image source={item.image} style={styles.cardImage} />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 12,
              marginLeft: 12,
            }}
          >
            <Text style={styles.cardUsername}>{item.username}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "row", marginTop: 24 }}>
          <FontAwesome5 name="ethereum" size={20} color={Colors.gray} />
          <Text style={styles.cardPrice}>{item.price}</Text>
          <Text style={styles.cardEth}>ETH</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={cards}
        renderItem={renderItem}
        style={{ height: "80%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 16,
    borderRadius: 10,
    width: "80%",
    height: "50%",
    backgroundColor: Colors.secondary,
    marginLeft: 44,
    marginTop: 20,
  },
  cardImage: {
    width: 82,
    height: 82,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
  cardTime: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.gray,
    marginLeft: 150,
  },
  cardProfile: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  cardUsername: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.gray,
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.white,
    marginLeft: 8,
    marginTop: 5,
  },
  cardEth: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.white,
    marginLeft: 5,
    marginTop: 5,
  },
});

export default SwiperComponent;
