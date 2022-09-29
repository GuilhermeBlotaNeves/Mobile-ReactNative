import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert , Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      altura: 0,
      massa: 0,
      resultado: 0,
      resultTexto: 'Digite os valores corretamente',
    };
    this.calcular = this.calcular.bind(this);
  }
  
   

  calcular() {
    this.state.resultado =
      this.state.massa / (this.state.altura * this.state.altura);

    if (this.state.massa < 10 || this.state.massa > 200) {
      console.log(this.state.massa);
      Alert.alert('Erro!', 'Verifique valor do peso.');
      this.state.resultTexto = 'Verifique valor do peso.';
      this.state.resultado = 0;
    } else if (this.state.altura < 1 || this.altura > 3) {
      Alert.alert('Erro!', 'Verifique valor da altura.');
      this.state.resultTexto = 'Verifique valor da altura.';
      this.state.resultado = 0;
    } else if (isNaN(this.state.altura)) {
      Alert.alert('Erro!', "Altura deve ser separada por '.' \nEx: 1.56");
      this.state.resultTexto = 'Verifique valor da altura.';
      this.state.resultado = 0;
    } else if (this.state.resultado < 16) {
      this.state.resultTexto = 'Muito abaixo do peso!';
    } else if (this.state.resultado < 17) {
      this.state.resultTexto = 'Moderadamente abaixo do peso!';
    } else if (this.state.resultado < 18.5) {
      this.state.resultTexto = 'Abaixo do peso!';
    } else if (this.state.resultado < 25) {
      this.state.resultTexto = 'Saudável!';
    } else if (this.state.resultado < 30) {
      this.state.resultTexto = 'Sobrepeso!';
    } else if (this.state.resultado < 35) {
      this.state.resultTexto = 'Obesidade Grau 1°!';
    } else if (this.state.resultado < 40) {
      this.state.resultTexto = 'Obesidade Grau 2°!';
    } else {
      this.setState.resultTexto = 'Obesidade Grau 3°';
    }
    this.setState(this.state);
  }
  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.entrada}>
        <Image
          source={{ uri: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/175397900_101099182125522_4897646547118247592_n.png?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=D-R4Y5CGOzgAX_v3Ul1&_nc_ht=scontent-gru2-1.xx&oh=00_AT95ajFJbe5vwuEuPRx5NuHr1mcasemrLxoV11Aq8OkZrg&oe=634B999D'}}
          style={{ width: 270, height: 200}}
        />
          <Text style={{ fontSize: 30, margin: 25 }}>Cálculo do IMC</Text>
          <Text style={{ color: 'blue', fontSize: 22, margin: 2 }}>PESO:</Text>
          <TextInput
            autoCapitalize="none"
            placeholder="Informe seu peso:"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(massa) => {
              this.setState({ massa });
            }}
          />
          <Text style={{ color: 'blue', fontSize: 22, margin: 5 }}>
            ALTURA:
          </Text>
          <TextInput
            autoCapitalize="none"
            placeholder="Informe sua altura:"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(altura) => {
              this.setState({ altura });
            }}
          />
        </View>
        <Button onPress={this.calcular} title="Calcular" color="#00008B" />
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={styles.resultado}>{this.state.resultTexto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5432',
    justifyContent: 'center',
  },
  entrada: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    marginTop: 20,
  },
  resultado: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 0,
  },
});
