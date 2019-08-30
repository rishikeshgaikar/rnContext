import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import CartContext from './CartContext.js';
import CB from './CB';

export default class Cart extends Component {
  alertme() {
    alert('test');
  }

  combinedCall() {
    this.alertme();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CartContext.Consumer>
          {contextValue => (
            <React.Fragment>
              <Text style={{ fontSize: 50 }}>{contextValue.state.count}</Text>
              <Button title='Plus' onPress={contextValue.onPlus} />
              <Button
                title='Minus'
                onPress={() => {
                  contextValue.onMinus();
                  this.alertme();
                }}
              />
              <Button title='alert' onPress={() => this.alertme()} />
            </React.Fragment>
          )}
        </CartContext.Consumer>
        {/* <CartContext.Consumer>
          {contextValue => {
            const onPlus = () => {
              contextValue.onPlus;
              this.alertme('test');
            };
            return <Button title='Minus' onPress={contextValue.onPlus} />;
          }}
        </CartContext.Consumer> */}

        <CB />
      </View>
    );
  }
}
