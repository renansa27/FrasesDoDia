import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Button,
  Alert,
  Image
} from 'react-native';

const altura = Dimensions.get('window').height;
const largura = Dimensions.get('window').width;

const frases = 
  ["O importante não é vencer todos os dias, mas lutar sempre.",
  "Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!",
  "Enquanto houver vontade de lutar haverá esperança de vencer.",
  "O medo de perder tira a vontade de ganhar.",
  "Aquele que não tem confiança nos outros, não lhes pode ganhar a confiança.",
  "Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto.",
  "Escolher o seu tempo é ganhar tempo.",
  "Arriscamo-nos a perder quando queremos ganhar demais.",
  "Muitos sabem ganhar dinheiro, mas poucos sabem gastá-lo.",
  "Perder para a razão, sempre é ganhar.",
  "Se você pretende ser rico, pense em economizar tanto quanto em ganhar.",
  "O homem digno ganha para viver; o menos honesto vive para ganhar.",
  "Para ganhar aquilo que vale a pena ter, pode ser necessário perder tudo mais.",
  "Não basta conquistar a sabedoria, é preciso usá-la.",
  "De que serve ao homem conquistar o mundo inteiro se perder a alma?",
  "De nada serve ao homem conquistar a Lua se acaba por perder a Terra.",
  "É fácil adquirir um inimigo; difícil é conquistar um amigo.",
  "Quer você acredite que consiga fazer uma coisa ou não, você está certo.",
  "Acredite na justiça, mas não a que emana dos demais e sim na tua própria.",
  "É melhor conquistar a si mesmo do que vencer mil batalhas."
  ]

const sorteiaFrase = () => {
  var i = Math.floor(Math.random()*20);
  return Alert.alert(
    '',
    frases[i]
  );
}

const Estilo = {
  estiloView:{
  	flex: 1,
    //fontSize:10,
    backgroundColor:'#FFF',
    width: largura,
    height: altura,
    justifyContent: 'center',
    alignItems: 'center'
    //textAlign: 'center',
    //marginHorizontal: 'auto'
    //padding:5,
    //color:'#FFF',
    //fontStyle: 'italic',//'normal', 'italic'
    //fontWeight: '300', //Entre 100 e 900
    //height:50,
    //width:50,
    //textAlign: 'center', //'auto', 'left', 'right', 'center', 'justify'
    //textDecorationLine: 'underline' //'none', 'underline', 'line-through', 'underline line-through'
  },
  estiloBotao:{
    backgroundColor: '#1E90FF',
    marginTop: 20,
    borderRadius: 6
  },
  estiloTexto:{
    fontWeight: '800',
    fontSize: 20,
    paddingHorizontal: 10
  }
};

export default class Frases extends Component{
  render(){
    return(
      <View style = { Estilo.estiloView }>
        <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity style = {Estilo.estiloBotao} onPress = {sorteiaFrase}>
          <Text style = {Estilo.estiloTexto}>Sorteia frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}