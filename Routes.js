import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import Home from './src/Home';
import Cart from './src/Cart';
import CD from './src/CD';

const Rootstack = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Cart: {
      screen: Cart
    }
  },
  { contentComponent: CD }
);
const RootContainer = createAppContainer(Rootstack);
export { RootContainer };
