import React, { Component } from 'react';
import { View, Text, Image ,Button , StyleSheet} from 'react-native';
 


const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor(numero_aleatorio * 10);
   alert(numero_aleatorio);
}
const App = () => {

  return (
    <View>
     <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13f4bgUKzStM1rhN5gzhFEyuiliKyjiFJLA&usqp=CAU'}}
          style={{width: 400, height: 300  }}
        />

       <Text style={{color: 'pink', fontSize: 35, margin: 25, textAlign: 'center'}}>
         Jogo do N° aleatorio
        </Text>

        <Text style={{ fontSize: 20, margin: 5, textAlign: 'center'}}> Pense em um N° de 0 a 10 </Text>
      
      <Button  title="Descobrir" onPress={geraNumeroAleatorio} />
    </View>
  );
};



export default App;

