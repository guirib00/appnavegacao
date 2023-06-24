import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>
		  <View style={styles.blocoImagem}>
		  	<Image style={styles.imagem}
        			source={
						require('./../assets/logo.png')
					}
      			/>
		  </View>
      <View style={styles.botoes}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sobre')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Desenvolvimento')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Desenvolvimento de Sistemas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Administracao')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Administração</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Image source={require('./../assets/logo.png')} style={styles.logo} />
        <Text style={styles.footerText}>https://www.etecitanhaem.com.br/</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ffd7',
  },
  botoes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
	imagem:{
		width:290,
		height:180,
		borderRadius:10,
	},
	blocoImagem:{
	marginTop:20,
	marginLeft:20,
	marginBottom:10
	},
  button: {
    width: '70%',
    height: 40,
    backgroundColor: '#1d8989',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  header: {
    backgroundColor: '#B8E994',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#84BF83',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  footer: {
    backgroundColor: '#B8E994',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#84BF83',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 48,
    height: 30,
	 marginTop:8,
    marginRight: 10,
  },
  footerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
