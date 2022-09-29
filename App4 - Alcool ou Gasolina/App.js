import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input1: 0,
      input2: 0,
      resultado: "",
      resultado1: 0,
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    resultado1 = this.state.input1 / this.state.input2;
    if(this.state.input1 == this.state.input2){
      this.setState({resultado: "Qualquer um amigo!"});
    } else if(resultado1 < 0.7) {
      this.setState({resultado: "Alcool"});
    } else {
      this.setState({resultado: "Gasolina"});
    }

  }
 
  render(){
    return(
      <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://thumbs.dreamstime.com/z/bomba-do-posto-de-gasolina-com-bocal-de-combust%C3%ADvel-38229903.jpg',
        }}
      />
        <Text style={styles.texto}>Alcool ou Gasolina </Text>

         

        <View style={styles.imagemPosto}>
         
        </View>
      
        <TextInput style={styles.input} placeholder="Preço do Alcool" onChangeText={input1 => {this.setState({ input1 });}} keyboardType="numeric" />

        <TextInput style={styles.input} placeholder="Preço da Gasolina" onChangeText={input2 => {this.setState({ input2 });}} keyboardType="numeric" />

        <View style={styles.botao}>
          <Button title="Verificar" onPress={this.calcular} />
        </View>

        <Text style={styles.texto1}> O melhor para voçê {this.state.resultado} </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 30,
    padding: 20,
  },
  botao: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: 'blue',
  },
  texto1:{
    textAlign: 'center',
    fontSize: 25,
    color: 'blue',
  },
    tinyLogo: {
    width: 150,
    height: 150,
  }
});