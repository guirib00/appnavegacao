import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AdminScreen() {
   return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Administração</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.blocoImagem}>
          <Image
            style={styles.imagem}
            source={require('./../assets/adm.jpg')}
          />
        </View>
        <Text style={styles.text}>O TÉCNICO EM ADMINISTRAÇÃO é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Realiza atividades de controle e auxilia nos processos de direção, utilizando ferramentas da informática. Fomenta ideias e práticas empreendedoras. Desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental.</Text>
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
  imagem: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },
  blocoImagem: {
    marginTop: 8,
    marginLeft: 80,
    marginBottom: 20,
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
    marginTop: 8,
    marginRight: 10,
  },
  footerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
