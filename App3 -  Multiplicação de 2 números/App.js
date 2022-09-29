import React from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
 
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input1: 0,
      input2: 0,
      resultado: 0,
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    this.setState({resultado: this.state.input1 * this.state.input2});
  }
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.txt}>Multiplicador de Numeros </Text>
        <TextInput style={styles.input} placeholder="Digite o 1º número" onChangeText={input1 => {this.setState({ input1 });}} keyboardType="numeric" />
        <Text style={styles.txt2}>*</Text>
        <TextInput style={styles.input} placeholder="Digite o 2º número" onChangeText={input2 => {this.setState({ input2 });}} keyboardType="numeric" />
        <View style={styles.botao}>
          <Button title="Multiplicar" onPress={this.calcular} />
        </View>
        <Text style={styles.txt1}>É igual a {this.state.resultado} .</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 40,
  },
  botao:{
    alignItems: 'center',
    margin: 30,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  txt:{
    textAlign: 'center',
    fontSize: 35,
    color: 'blue',
    marginBottom: 30,
  },
  txt1:{
    textAlign: 'center',
    fontSize: 25,
    color: 'blue',
  },
  txt2:{
    textAlign: 'center',
    fontSize: 25,
    color: 'blue',
  }
});