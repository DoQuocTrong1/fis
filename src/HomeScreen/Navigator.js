import * as React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DashBroadScreen from './DashBroad/DashBroad';
import CategoryScreen from './Category/Category';
import UserScreen from './User/navigator';
import TicketScreen from './Ticket/Ticket';
import NotificationScreen from './Notification/Notification';
import IconBadge from 'react-native-icon-badge';

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
        barStyle: { backgroundColor: '#22252A', height: 100 },

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
        barStyle: { backgroundColor: '#22252A', height: 100 },

      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarLabel: 'Thông báo',
        tabBarIcon: ({ tintColor }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
            <IconBadge
              MainElement={
                <Icon style={[{ color: tintColor }]} size={30} name={'checkbox-multiple-blank-outline'} />
              }
              BadgeElement={
                <Text style={{ color: '#FFFFFF' }}>{2}</Text>
              }
              IconBadgeStyle={
                {
                  width: 30,
                  height: 30,
                  backgroundColor: '#FF00EE'
                }
              }

            />
          </View>),
        activeColor: '#F17128',
        inactiveColor: '#fff',
        barStyle: { backgroundColor: '#22252A', height: 100 },

      }
    },
    category: {
      screen: CategoryScreen,
      navigationOptions: {
        tabBarLabel: 'Danh mục',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={30} name={'grid'} />
          </View>),
        activeColor: '#F17128',
        inactiveColor: '#fff',
        barStyle: { backgroundColor: '#22252A', height: 100 },
      }
    },
    User: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel: 'Cá nhân',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={30} name={'account-card-details-outline'} />
          </View>),
      }
    },
  },
  {
    initialRouteName: "Home",
    activeColor: '#F17128',
    inactiveColor: '#fff',
    barStyle: { backgroundColor: '#22252A', height: 100, },

  },
);

export default createAppContainer(TabNavigator);

