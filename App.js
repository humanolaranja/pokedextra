import Home from './src/screens/Home.js';
import Pokemon from './src/screens/Pokemon.js';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Pokemon: {screen: Pokemon},
});

const App = createAppContainer(MainNavigator);

export default App;