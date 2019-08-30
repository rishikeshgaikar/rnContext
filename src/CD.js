import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CC from './CC';

export class CD extends Component {
  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Cart')}
        >
          <Text>Cart</Text>
        </TouchableOpacity>
        <CC />
        <CC />
        <CC />
      </View>
    );
  }
}

export default CD;
