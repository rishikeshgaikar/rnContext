import React, { Component } from 'react';
import { RootContainer } from './Routes';
import CartProvider from './src/CartProvider';

export class App extends Component {
  render() {
    return (
      <CartProvider>
        <RootContainer />
      </CartProvider>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import { Text, View, Button } from 'react-native';

// // first we will make a new context
// const CartContext = React.createContext();
// // Then create a provider Component
// class CartProvider extends Component {
//   state = {
//     count: 0
//   };
//   render() {
//     return (
//       <CartContext.Provider
//         value={{
//           state: this.state,
//           chnageCounter: () =>
//             this.setState({
//               count: this.state.count + 1
//             })
//         }}
//       >
//         {this.props.children}
//       </CartContext.Provider>
//     );
//   }
// }

// class Cart extends Component {
//   render() {
//     return (
//       <CartProvider>
//         <CartContext.Consumer>
//           {context => (
//             <React.Fragment>
//               <Text>Count: {context.state.count}</Text>
//               <Button onPress={context.chnageCounter} title='Change' />
//             </React.Fragment>
//           )}
//         </CartContext.Consumer>
//       </CartProvider>
//     );
//   }
// }

// const CartComponent = props => (
//   <View>
//     <Cart />
//   </View>
// );

// class Cart2 extends Component {
//   render() {
//     return (
//       <View>
//         <Cart />
//       </View>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <CartComponent />
//       </View>
//     );
//   }
// }

// export default App;
