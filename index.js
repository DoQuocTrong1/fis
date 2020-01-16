/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './src/HomeScreen/Navigator';
import Test from './Test';


AppRegistry.registerComponent(appName, () => Test);
