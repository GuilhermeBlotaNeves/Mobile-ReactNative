import React, { Component } from "react";
import { TextInput, Text, TouchableOpacity, Keyboard, StyleSheet, View } from "react-native";

import api from "../../services/api";

export default class Moeda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moeda1: props.moeda1,
      moeda2: props.moeda2,
      moeda2Valor: 0,
      valorConvertido: 0,
    };
    this.converter = this.converter.bind(this);
  }


  async converter() {
    let moeda = this.state.moeda1 + "_" + this.state.moeda2;
    let response = await api.get(
      `convert?q=${moeda}&compact=ultra&apiKey=3110d41608cc9c47be9d`
    );
    let cotacao = response.data[moeda];
    let resultado = cotacao * parseFloat(this.state.moeda2Valor);
    
    this.setState({
      valorConvertido: resultado.toFixed(2),
    });
    Keyboard.dismiss();
  }

  render() {
    let { moeda1, moeda2 } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          {moeda1} Converter {moeda2}
        </Text>
        <TextInput
          autoFocus={true}
          style={styles.areaInput}
          onChangeText={(moeda2Valor) => this.setState({ moeda2Valor })} 
          keyboardType="numeric"
          placeholder="Valor "
        />
        <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
          <Text style={styles.botaoTexto}>CONVERTER</Text>
        </TouchableOpacity>
        <Text style={styles.valorConvertido}>
          {(this.state.valorConvertido === 0) ? " " : this.state.valorConvertido}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  areaInput: {
    width: 280,
    height: 45,
    backgroundColor: "#CCC",
    textAlign: "center",
    marginTop: 15,
    fontSize: 20,
    color: "blue",
    borderRadius: 5,
  },
  botaoArea: {
    width: 150,
    height: 45,
    backgroundColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  botaoTexto: {
    fontSize: 17,
    fontWeight: "bold",
    color: "blue",
  },
  valorConvertido: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginTop: 5,
  },
});