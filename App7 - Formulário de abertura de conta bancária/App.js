import React, { Component } from 'react';
import { View, Text, Button, Switch, TextInput,StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

class App7 extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: '', idadeUser:'', sexoValor: '', escolaridadeValor: 0, valorLimite: 0, 
    status: false, resultados: [],

      sexo: [
        { nome: '', valor: '' },
        { nome: 'Masculino', valor: 'masculino' },
        { nome: 'Feminino', valor: 'feminino' },
        ],

      escolaridades: [
        {nome: '', valor: '' },
        {nome: 'Ensino fundamental completo',valor: 'ensino fundamental completo',},
        {nome: 'Ensino fundamental incompleto',valor: 'ensino fundamental incompleto',},
        {nome: 'Ensino medio completo', valor: 'ensino medio completo' },
        {nome: 'Ensino medio incompleto', valor: 'ensino medio incompleto' },
        {nome: 'Ensino superior completo', valor: 'ensino superior completo' },
        {nome: 'Ensino superior incompleto',valor: 'ensino superior incompleto',},
        {nome: 'Lê e escrever', valor: 'Lê e escrever',},
        {nome: 'Analfabeto', valor: 'Analfabeto',},
      ],
    };

    this.forms = this.forms.bind(this);
  }

  forms() {
    this.setState({resultados: [
      this.state.userName,
      this.state.idadeUser,
      this.state.sexo[this.state.sexoValor].valor,
      this.state.escolaridades[this.state.escolaridadeValor].valor,
      this.state.valorLimite.toFixed(2),
      this.state.status ? 'Sim' : 'Não',
      ],
    });
  }

  render() {
    let sexoItem = this.state.sexo.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />;
    });
    let escolaridadeItem = this.state.escolaridades.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />;
    });
    return (
      <View style={styles.container}>
        <Text style={styles.txtT}>Abertura de Conta</Text>

        <Text style={styles.TxtD}>Nome : </Text>
        <TextInput style={styles.input}
        placeholder= "  Nome  "
        onChangeText={(userName) => {this.setState({ userName });
        }}
        />
        

        <Text style={styles.TxtD}>Idade :</Text>
          <TextInput style={styles.input}
           placeholder= " Idade "
          ponChangeText={(idadeUser) => {this.setState({ idadeUser });
          }}
          />

        <Text style={styles.TxtD}>Sexo : </Text>
        <Picker
          selectedValue={this.state.sexoValor}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ sexoValor: itemValue })
          }>
          {sexoItem }
        </Picker>

        <Text style={styles.TxtD}>Escolaridade : </Text>
        <Picker
          selectedValue={this.state.escolaridadeValor}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ escolaridadeValor: itemValue })
          }>
          {escolaridadeItem}
        </Picker>

        <Text style={styles.TxtD}>Limite : </Text>
        <Slider
          minimumValue={0}
          maximumValue={1000}
          step={100}
          onValueChange={(valorSelecionado) =>
            this.setState({ valorLimite: valorSelecionado })
          }
          value={this.state.valorLimite}
        />
        <Text style={{ textAlign: 'center', fontSize: 16 }}>
          R$ {this.state.valorLimite.toFixed(2)}
        </Text>

        <Text style={styles.TxtD}>Brasileiro : </Text>
        
        <Switch
          value={this.state.status}
          onValueChange={(valorSwitch) =>
            this.setState({ status: valorSwitch })
          }
        />

        <Button onPress={this.forms} title="Confirmar" />

        <Text style={styles.txtT1}>Dados informados :</Text>

        <Text style={styles.TxtD}>Nome: {this.state.resultados[0]}</Text>

        <Text style={styles.TxtD}>Idade: {this.state.resultados[1]}</Text>

        <Text style={styles.TxtD}>Sexo: {this.state.resultados[2]}</Text>

        <Text style={styles.TxtD}>Escolaridade: {this.state.resultados[3]}</Text>
        
        <Text style={styles.TxtD}>Limite: {this.state.resultados[4]}</Text>

        <Text style={styles.TxtD}>Brasileiro: {this.state.resultados[5]}</Text>
        
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
    height: 20,
    fontSize: 12,
    marginTop: 10
  },
  txtT:{
    textAlign: 'center',
    fontSize: 25,
    color: 'blue',
    marginTop: 12,
  },
  txtT1:{
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
  },
  TxtD:{
    fontSize: 15,
    marginTop: 10,
  },
  
});
export default App7;