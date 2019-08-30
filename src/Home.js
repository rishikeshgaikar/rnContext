import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import CartContext from './CartContext';
import CC from './CC';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CartContext.Consumer>
          {contextValue => (
            <Text style={{ fontSize: 50 }}>{contextValue.state.count}</Text>
          )}
        </CartContext.Consumer>
        <Button
          title='Go To Cart'
          onPress={() => this.props.navigation.navigate('Cart')}
        />
        <CC />
        <CC />
        <CC />
        <Button
          title='Drawer'
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}

export default Home;
