/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

const exibeFrase = () => {
  var numeroAleatorio = Math.floor(Math.random() * 5);

  var frases = [];
  frases[0] = 'Você faz suas escolhas, e suas escolhas fazem você.';
  frases[1] = 'Aqueles que falam de você na sua ausência, é porque respeitam a sua presença.';
  frases[2] = 'O melhor sentimento do mundo é ver alguém sorrir e saber que você é o motivo.';
  frases[3] = 'Não adianta acreditar se você não tem coragem de lutar.';
  frases[4] = 'Melhor morrer do que perder a vida';

  
  Alert.alert(frases[numeroAleatorio]);  
};

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity onPress={exibeFrase} style={styles.botao}>
          <Text style={styles.textoBotao}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold'
  }
});
