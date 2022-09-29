import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet} from 'react-native';

 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.Txt}>Vagas De Emprego</Text>
        </View>
        <View style={styles.box0}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.box1}>
              <Image source={require('./Google.png')} style={styles.imagem} />
              <Text style={styles.Txt2}>Desenvolvedor BackEnd Jr</Text>
              <Text style={styles.Txt3}>Requisitos:</Text>
              <Text style={styles.Txt3}>Requisitos: JAVA, JAVA SCRIPT, PHYTON</Text>
              <Text style={styles.Txt4}>Salário: R$ 2.500,00 - EMAIL:vagas@gmail.com</Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./Google.png')} style={styles.imagem} />
              <Text style={styles.Txt2}> QA Jr</Text>
              <Text style={styles.Txt3}>Requisitos:</Text>
              <Text style={styles.Txt3}>Conhecimento com testes manuais</Text>
              <Text style={styles.Txt4}> Salário:R$ 2.500,00 ~ 4.500,00 - EMAIL:vagas@gmail.com</Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./amazon.png')} style={styles.imagem} />
              <Text style={styles.Txt2}>Desenvolvedor FrontEnd Jr</Text>
              <Text style={styles.Txt3}>Requisitos:</Text>
              <Text style={styles.Txt3}> BOOTSTRAP 5.0, JAVA SCRIPT, REACT</Text>
              <Text style={styles.Txt4}>Salário: A combinar - EMAIL:vagas@gmail.com</Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./amazon.png')} style={styles.imagem} />
              <Text style={styles.Txt2}>FullStack Jr</Text>
              <Text style={styles.Txt3}>Requisitos:</Text>
              <Text style={styles.Txt3}>JAVA , JAVA SCRIPT , REACT , CSS</Text>
              <Text style={styles.Txt4}>Salário: R$ 3.000,00 - EMAIL:vagas@gmail.com</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box:{
    height: 150
  },
  Txt:{
    fontSize: 50,
    textAlign: 'center',
    color: 'red',
    marginTop: 50
  },
  Txt2:{
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
    padding: 10,
  },
  Txt3:{
    fontSize: 25,
    textAlign: 'left',
    color: 'black',
    padding: 10,
  },
  Txt4:{
    fontSize: 20,
    textAlign: 'left',
    color: 'black',
    padding: 10,
  },
   imagem:{
    resizeMode: 'stretch',
    height: 125,
    width: 130,
    margin: 10,
    borderRadius: 5,
  },
  box0:{
    alignItems: 'center',
    height: 700,
    width: 400,
    margin: 5,
    padding: 5
  },
  box1:{
    backgroundColor: "#eaeaea",
    height: 300,
    width: 400,
    marginBottom: 40,
    borderRadius: 5,
  },
})
export default App;