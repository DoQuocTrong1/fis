/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './src/HomeScreen/Navigator';
import AddTicket from './src/HomeScreen/Ticket/AddTicket/AddTicket';
import Login from './src/Login/Login';
import UserEdit from './src/HomeScreen/User/detailUser/UserEdit';

AppRegistry.registerComponent(appName, () => HomeScreen);