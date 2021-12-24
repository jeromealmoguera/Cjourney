import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

export default class Home extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <Text style={styles.text}>QUOTE OF THE DAY</Text>

        <Image
          style={styles.quote}
          source={require("../assets/quotes/Your_safety_is_not_your_distance_from_danger__Your_safety_is_your_closeness_to_God_-_Phone.jpg")}
        />

        <Text style={styles.text}>
          Dito ka puwede magsulat patungkol sa mga pangyayari sa iyo habang ikaw
          ay may sakit. Dito ka puwede magsulat patungkol sa mga pangyayari sa
          iyo habang ikaw ay may sakit. Dito ka puwede magsulat patungkol sa mga
          pangyayari sa iyo habang ikaw ay may sakit. Dito ka puwede magsulat
          patungkol sa mga pangyayari sa iyo habang ikaw ay may sakit. Dito ka
          puwede magsulat patungkol sa mga pangyayari sa iyo habang ikaw ay may
          sakit. Dito ka puwede magsulat patungkol sa mga pangyayari sa iyo
          habang ikaw ay may sakit.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
    fontSize: 20,
    color: "#6667AB",
  },
  quote: {
    borderRadius: 20,
    width: 282,
    height: 502,
  },
});
