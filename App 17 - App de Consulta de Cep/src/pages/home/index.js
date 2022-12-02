import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function home() {
  navigation = useNavigation();

  function abrirConsulta() {
    navigation.navigate('consulta');
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/image.png')} />

      <TouchableOpacity style={styles.button} onPress={abrirConsulta}>
        <Text style={styles.textbutton}>Comecar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2F5',
  },
  image: {
    width: 500,
    height: 500,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#020202',
    width: 330,
    alignSelf: 'center',
    height: 54,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },

  textbutton: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
