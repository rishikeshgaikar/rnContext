import React from 'react';
import { Text, View } from 'react-native';
import CartContext from './CartContext';

const CC = ({ params }) => (
  <View>
    <CartContext.Consumer>
      {contextValue => (
        <Text style={{ fontSize: 50 }}>{contextValue.state.count}</Text>
      )}
    </CartContext.Consumer>
  </View>
);

export default CC;
