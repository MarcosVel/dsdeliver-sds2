import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={ styles.container }>
        <Image source={ require('../assets/logo.png') } />
        <Text style={ styles.text }>DS Delivery</Text>
      </View>
    </TouchableWithoutFeedback>
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
