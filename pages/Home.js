// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Page</Text>
		  
		  <TouchableOpacity
			  onPress={() => navigation.navigate('Sobre')}
					   >
		  	<text>Sobre</text>
		  </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		}
});

