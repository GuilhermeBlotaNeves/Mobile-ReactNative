import React, { Component }  from 'react';
import { View, Text, Button, TextInput , StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';

class App10 extends Component {
  constructor(props){
    super(props);
    this.state = { vMoeda: 0.00, de: 1, para: 1, resultado: '', };
    this.conversor = this.conversor.bind(this);
  }

  conversor(){
    if(this.state.de == 3 && this.state.para == 1) {
      this.setState({ resultado: 'US$ ' + (this.state.vMoeda * 0.19).toFixed(2)});
    } else if (this.state.de == 3 && this.state.para == 2) {
      this.setState({ resultado: (this.state.vMoeda * 0.20).toFixed(2) + ' €'});
    } else if (this.state.de == 3 && this.state.para == 3) {
      this.setState({ resultado: 'R$ ' + (this.state.vMoeda * 1.00).toFixed(2)});
    } else if (this.state.de == 2 && this.state.para == 1) {
      this.setState({ resultado: 'US$ ' + (this.state.vMoeda * 0.97).toFixed(2)});
    } else if (this.state.de == 2 && this.state.para == 2) {
      this.setState({ resultado: (this.state.vMoeda * 1.00).toFixed(2) + ' €'});
    } else if (this.state.de == 2 && this.state.para == 3) {
      this.setState({ resultado: 'R$ ' + (this.state.vMoeda * 5.10).toFixed(2)});
    } else if (this.state.de == 1 && this.state.para == 1) {
      this.setState({ resultado: 'US$ ' + (this.state.vMoeda * 1.00).toFixed(2)});
    } else if (this.state.de == 1 && this.state.para == 2) {
      this.setState({ resultado: (this.state.vMoeda * 1.0305).toFixed(2) + ' €'});
    } else if (this.state.de == 1 && this.state.para == 3) {
      this.setState({ resultado: 'R$ ' + (this.state.vMoeda * 5.3754).toFixed(2)});
    }
  }

  render(){
    return (
      <View style={styles.container}>

        <Text style={styles.txt}>Conversor de Moedas</Text>
        <Text style={styles.txt2}>R$ - US$ - € </Text>

        <Text style={styles.txt1}>Valor: </Text>
        <TextInput style={styles.input} placeholder="Valor a ser convertido " onChangeText={vMoeda => {this.setState({ vMoeda });}} keyboardType="numeric" />

        <Text style={styles.txtD}>De: </Text>
        <Picker
          selectedValue={this.state.de}
          onValueChange={(itemValue, itemIndex) =>
          this.setState({ de: itemValue })
        }>
          <Picker.Item key={1} value={1} label="Dólar" />
          <Picker.Item key={2} value={2} label="Euro" />
          <Picker.Item key={3} value={3} label="Real" />
        </Picker>
        
        <Text style={styles.txtD}>Para: </Text>
        <Picker
          selectedValue={this.state.para}
          onValueChange={(itemValue, itemIndex) =>
          this.setState({ para: itemValue })
        }>
          <Picker.Item key={1} value={1} label="Dólar" />
          <Picker.Item key={2} value={2} label="Euro" />
          <Picker.Item key={3} value={3} label="Real" />
        </Picker>
        <Button title="Converter" onPress={this.conversor} />

        <Text style={styles.texto}> Resultado </Text>
        <Text style={styles.texto}> {this.state.resultado} </Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
   input: {
    height: 17,
    fontSize: 15,
    marginTop: 12
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
  },
  txt:{
    textAlign: 'center',
    fontSize: 25,
    color: 'blue',
    marginTop: 10,
  },
  txt2:{
    textAlign: 'center',
    fontSize: 20,
  },
  txt1:{
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
  },
  txtD:{
    fontSize: 20,
    marginTop: 10,
    color: 'blue',
  },

})
export default App10;