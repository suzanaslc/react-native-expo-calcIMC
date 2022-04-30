import React, { Component } from 'react';
import { FlatList, Alert, TextInput, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import logo from './assets/nutricao.png'; 

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const image = { uri:'./assets/nutricao.png'};

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      peso: '',
      altura: '',
    };
  }
  
  calcularIMC() {
    const { peso, altura } = this.state;
    const result = peso/ (altura * altura);
    Alert.alert('IMC', `Seu IMC é ${result.toFixed(2)}`);
  }

  render() {
  return (
    <View style={styles.container}>
    <Image source={logo}  style={{ width: 200, height: 200, marginTop: 90}} /> 
      <Image source={image} resizeMode="center" style={styles.image}/>
      
      <Text style={styles.paragraph}> Calcule o seu IMC </Text>

      <TextInput style={styles.input} value={this.state.peso}
          onChangeText={(peso) => this.setState({ peso })} placeholder={'Digite seu peso'}/>
      <TextInput style={styles.input} value={this.state.altura}
          onChangeText={(altura) => this.setState({ altura })} placeholder={'Digite sua altura'}/>
      
      <TouchableOpacity
        style={{ backgroundColor: '#A52A2A' , marginTop: 10, borderWidth: 1, borderColor:'#A52A2A', borderRadius: 10}} 
        onPress={this.calcularIMC.bind(this)}>
        <Text style={{ fontSize: 20, color: '#fff' }}>  Calcular  </Text>
      </TouchableOpacity>

      <Text style={styles.paragraph}>Faixas de Obesidade </Text>
      
            <FlatList
        data={[
          {key: '18.50 – 24.99: Peso Normal'},
          {key: '25.00 – 29.99: Pré-Obesidade.'},
          {key: '30.00 – 34.99: Obesidade Grau I.'},
          {key: '35.00 – 39.99: Obesidade Grau II.'},
          {key: '≥40.00: Obesidade Grau III'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{'\u2B24' + ' '}{item.key}</Text>}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 8,
    marginBottom: 80,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 75,
    marginBottom: 20,
    },
});
