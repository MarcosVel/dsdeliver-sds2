import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';
import OrderCard from '../OrderCard';

export default function Orders() {
  return (
    <>
      <Header />
      <ScrollView style={ styles.container }>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    backgroundColor: '#f4f4f4',
  }
});
