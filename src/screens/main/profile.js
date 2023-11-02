import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../../components/Colors";
import cover from "../../../assets/banner-photo.jpg";
import img1 from "../../../assets/image10.png";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={cover} style={{ width: "100%" }} />
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image source={img1} style={styles.img} />
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: Colors.gray,
            width: 105,
            height: 36,
            marginTop: 18,
            padding: 7,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 150,
          }}
          onPress={() => navigation.navigate("edit")}
        >
          <Text style={{ color: Colors.white, fontSize: 14 }}>
            {" "}
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: Colors.white,
          fontSize: 34,
          marginTop: -70,
          marginLeft: 20,
        }}
      >
        {" "}
        Alexandra{" "}
      </Text>
      <Text
        style={{
          color: Colors.gray,
          fontSize: 12,
          marginLeft: 30,
          marginTop: 10,
        }}
      >
        Sell anything
      </Text>

      <View
        style={{
          marginLeft: 30,
          marginTop: 55,
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ color: Colors.white, fontSize: 18 }}>54</Text>
          <Text style={{ color: Colors.gray, fontSize: 15, marginLeft: 8 }}>
            Items Total
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginLeft: 60 }}>
          <Text style={{ color: Colors.white, fontSize: 18 }}>3,7K</Text>
          <Text style={{ color: Colors.gray, fontSize: 15, marginLeft: 8 }}>
            Views
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginLeft: 60 }}>
          <Text style={{ color: Colors.white, fontSize: 18 }}>1,2K</Text>
          <Text style={{ color: Colors.gray, fontSize: 15, marginLeft: 8 }}>
            Liked
          </Text>
        </View>
      </View>

      <View
        style={{
          marginLeft: 30,
          marginTop: 55,
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            width: 165,
            height: 45,
            backgroundColor: Colors.secondary,
            padding: 12,
            borderRadius: 10,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text style={{ color: Colors.gray, fontSize: 16 }}>
            {" "}
            All categories
          </Text>
          <SimpleLineIcons
            name="arrow-down"
            size={15}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 105,
            height: 45,
            backgroundColor: Colors.primary,
            paddingHorizontal: 20,
            borderRadius: 10,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            marginLeft: 80,
          }}
          onPress={() => navigation.navigate("upload1")}
        >
          <Text style={{ color: Colors.gray, fontSize: 16 }}> Upload</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  img: {
    width: 88,
    height: 92,
    marginTop: 50,
    marginLeft: "10%",
    borderRadius: 100,
    backgroundColor: Colors.success,
    zIndex: 2,
    position: "relative",
    top: -85,
    left: -12,
  },
});

export default Home;
