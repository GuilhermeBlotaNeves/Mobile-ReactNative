import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = ' Guilherme Neves ';
    let img = 'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/304992544_2629799283819323_6395515580285267605_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHfjSHZmWBRYEVNzvFDZyhSJQhnifrYzp0lCGeJ-tjOnX1OyKnT4PoisoI3BbkfL4PIw74xdPm6FrNSU38am8z-&_nc_ohc=5whB-D5BYYUAX-S6UQ_&_nc_ht=scontent-gru1-1.xx&oh=00_AT8B6H9WHtz-ZGRZq-sHIK9OgcUQjbDKqNja5zKTPEExkw&oe=63203363';
    let RA = ' 1290482022010 ';
    let FONE = '(13)99146-3361';
    return(
      <View>
        <Text style={{color:'blue', fontSize: 30, margin: 20}}> Meu perfil</Text>
        <Text style={{ fontSize: 20, }}>
          Bem Vindo! 
          </Text>
      
          
 
 <Image
   source={{ uri: img }}
   style={{ width: 300, height: 300}}
 />
<Text style={{ fontSize: 25}}>DADOS PESSOAIS</Text>

 <Text >Nome: {nome}</Text>
 <Text >RA: {RA}</Text>
 <Text >Telefone: {FONE}</Text>


 <Text style={{ fontSize: 25 }}>FORMAÇÂO</Text>

<Text>  ANÁLISE E DESENVOLVIMENTO DE SISTEMAS • CPS- CENTRO PAULA SOUZA | FATEC - FACULDADE DE TECNOLOGIA DE PRAIA GRANDE• INICIADO EM 08/2020 - CURSANDO   </Text>

<Text style={{ fontSize: 25 }}>PROJETOS</Text>


</View>



)
}
}

export default App;






