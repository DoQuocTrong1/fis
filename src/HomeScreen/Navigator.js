import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';

import {  createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DashBroadScreen from './DashBroad/DashBroad';
import CategoryScreen from './Category/Category';
import UserScreen from './User/User';
import TicketScreen from './Ticket/Ticket';
import NotificationScreen from './Notification/Notification';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: DashBroadScreen,
      navigationOptions: {
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'home-variant-outline'} />
          </View>),
        activeColor: '#F17128',
        inactiveColor: '#fff',
        barStyle: { backgroundColor: '#22252A', height:70 },
        
      }
    },
    Ticket: {
      screen: TicketScreen,
      navigationOptions: {
        tabBarLabel: 'Ticket',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'checkbox-multiple-blank-outline'} />
          </View>),
        activeColor: '#F17128',
        inactiveColor: '#fff',
        barStyle: { backgroundColor: '#22252A', height:70 },
        
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarLabel: 'Thông báo',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'bell-outline'} />
          </View>),
        activeColor: '#F17128',
        inactiveColor: '#fff',
        barStyle: { backgroundColor: '#22252A', height:70 },
        
      }
    },
    category: {
      screen: CategoryScreen,
      navigationOptions: {
        tabBarLabel: 'Danh mục',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'grid'} />
          </View>),
        activeColor: '#F17128',
        inactiveColor: '#fff',
        barStyle: { backgroundColor: '#22252A' , height:70},
      }
    },
    User: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel: 'Cá nhân',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'account-card-details-outline'} />
          </View>),
      }
    },
  },
  {
    initialRouteName: "Home",
    activeColor: '#F17128',
    inactiveColor: '#fff',
    barStyle: { backgroundColor: '#22252A', height:70,  },
    
  },
);

export default createAppContainer(TabNavigator);

