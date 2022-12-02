import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Moeda from "./src/Moeda";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Moeda moeda1="USD" moeda2="BRL" />

        <Moeda moeda1="BRL" moeda2="USD" />

        <Moeda moeda1="BRL" moeda2="BITCOIN" />

        <Moeda moeda1="USD" moeda2="BITCOIN" />

        <Moeda moeda1="BITCOIN" moeda2="BRL" />

        <Moeda moeda1="USDBITCOIN" moeda2="USD" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
