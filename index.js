/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './src/HomeScreen/Navigator';

AppRegistry.registerComponent(appName, () => HomeScreen);
