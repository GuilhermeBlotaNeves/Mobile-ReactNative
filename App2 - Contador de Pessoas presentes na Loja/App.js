import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  const onPress1 = () => setCount((prevCount) => prevCount - 1);


  

  return (

   

    <View style={styles.container}>
     <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Contador De Pessoas</Text>
      <View style={styles.countContainer}>
        <Text>{count}</Text>
        
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPress1}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    color: 'blue'
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  area:{
    marginTop: 80
  },
  textoPrincipal:{
    fontSize: 28,
    color: 'blue',
  },
  alinhaTexto:{
    textAlign: 'center'
  }
});

export default App;
