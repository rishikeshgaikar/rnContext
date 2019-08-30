import React from 'react';
import { Button, View } from 'react-native';
import CartContext from './CartContext';

const CC = ({ params }) => (
  <View>
    <CartContext.Consumer>
      {contextValue => <Button title='btn' onPress={contextValue.onPlus} />}
    </CartContext.Consumer>
  </View>
);

export default CC;
