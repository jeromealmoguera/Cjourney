import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default class Diary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Diary ng mga Panget.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8FC",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "#6667AB",
  },
});