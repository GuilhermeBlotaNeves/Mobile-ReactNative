import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.textoTittle}>Anúncios</Text>
        </View>
        <View style={styles.box0}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.box1}>
              <Image source={require('./Whey.jpg')} style={styles.imagem} />
              <Text style={styles.texto}>WHEY tristom </Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./Dura.jpg')} style={styles.imagem} />
              <Text style={styles.texto}>          Durateston 250mg              R$ 700 </Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./Creatina.png')} style={styles.imagem} />
              <Text style={styles.texto}>           Creatina Probiotica              R$ 200 
            </Text>
            </View>
             <View style={styles.box1}>
              <Image source={require('./wheyGold.png')} style={styles.imagem} />
            <Text style={styles.texto}>  Whey Protein Gold Standard    R$ 300 </Text>
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
    height: 150,
  },
  textoTittle:{
    fontSize: 50,
    textAlign: 'center',
    color: 'blue',
    margin: 50,
  },
  imagem:{
    resizeMode: 'stretch',
    height: 120,
    width: 120,
    margin: 10,
    borderRadius: 5,
  },
  texto:{
    fontSize: 13,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  box0:{
    alignItems: 'center',
    height: 250,
    width: 395,
    margin: 10,
    borderColor: 'black',
  },
  box1:{
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    height: 250,
    width: 200,
    marginRight: 10,
    marginLeft: 10,
  },
})
export default App;