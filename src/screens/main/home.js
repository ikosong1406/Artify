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
import Colors from "../../components/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import SwiperComponent from "../../components/Swiper";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          borderWidth: 2,
          borderColor: Colors.gray,
          borderRadius: 20,
          marginLeft: 24,
          paddingHorizontal: 25,
          width: 120,
          marginTop: 36,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <FontAwesome5 name="ethereum" size={18} color={Colors.gray} />
          <Text style={{ color: Colors.white, fontSize: 16, marginLeft: 12 }}>
            26,031
          </Text>
        </View>
        <Text
          style={{
            zIndex: 2,
            color: Colors.white,
            fontSize: 14,
            backgroundColor: Colors.dark,
            position: "relative",
            top: 7,
            width: 50,
            textAlign: "center",
            marginLeft: 7,
          }}
        >
          {" "}
          Balance
        </Text>
      </View>
      <Text
        style={{
          color: Colors.white,
          fontSize: 25,
          fontWeight: "500",
          marginLeft: 24,
          marginTop: 35,
        }}
      >
        Trending Items
      </Text>
      <View style={{ marginTop: 10, height: "95%" }}>
        <SwiperComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
});

export default Home;
