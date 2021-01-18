import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={ styles.container }>
      <Image source={ require('../assets/logo.png') } />
      <Text style={ styles.text }>DS Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 70,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    color: '#fff',
    marginLeft: 10,
    fontFamily: 'OpenSans_700Bold'
  },
});
