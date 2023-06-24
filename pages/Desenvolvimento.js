import * as React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';

export default function Home() {
   return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Desenvolvimento de Sistemas</Text>
      </View>
      <View style={styles.content}>
		  
		  <View style={styles.blocoImagem}>
		  	<Image style={styles.imagem}
        			source={
						require('./../assets/ds.jpg')
					}
      			/>
		  </View>
		  
        <Text style={styles.text}>O TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS é o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.</Text>
      </View>
      <View style={styles.footer}>
        <Image source={require('./../assets/logo.png')} style={styles.logo} />
        <Text style={styles.footerText}>https://www.etecitanhaem.com.br/</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8F6',
  },
	imagem:{
		width:180,
		height:180,
		borderRadius:10,
	},
	blocoImagem:{
	marginTop:20,
	marginLeft:80,
	marginBottom:20
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
  content: {
    flex: 1,
    padding: 20,
	backgroundColor: '#e8ffd7',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#008000',
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


