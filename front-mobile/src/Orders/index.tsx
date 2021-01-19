import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

export default function Orders() {
  const navigation = useNavigation();
  const [ orders, setOrders ] = useState<Order[]>([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const isFocused = useIsFocused();

  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
      .finally(() => setIsLoading(false));
  }

  //para renderizar a tela e ver se o pedido foi entregue ou não
  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [ isFocused ]);

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', {
      order
    });
  }

  return (
    <>
      <Header />
      <ScrollView style={ styles.container }>
        { isLoading ? (
          <Text style={ styles.txtLoading }>Buscando pedidos...</Text>
        ) : (
            orders.map(order => (
              <TouchableWithoutFeedback
                key={ order.id }
                onPress={ () => handleOnPress(order) }
              >
                <OrderCard order={ order } />
              </TouchableWithoutFeedback>
            ))
          ) }
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    backgroundColor: '#f4f4f4',
  },
  txtLoading: {
    alignItems: 'center',
    fontSize: 22,
    color: '#9E9E9E',  
    textAlign: 'center',
    marginTop: '70%'
  }
});
