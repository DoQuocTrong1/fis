import * as React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createAppContainer } from 'react-navigation';

import {  createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Configuration from './Configuration';
import Notification from './Notification';
import DataProcessing from './DataProcessing';
import Relationship from './Relationship';



const TabNavigator = createMaterialTopTabNavigator(
  {
    Configuration: {
      screen: Configuration,
      navigationOptions: {
        tabBarLabel: 'Cấu hình',   
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarLabel: 'Thông báo',
        
      }
    },
    DataProcessing: {
      screen: DataProcessing,
      navigationOptions: {
        tabBarLabel: 'Xử lý dữ liệu',
      }
    },
    Relationship: {
      screen: Relationship,
      navigationOptions: {
        tabBarLabel: 'Mối quan hệ',
      }
    },
  },{
    initialRouteName: "Configuration",
    tabBarOptions:{
      scrollEnabled:true,
      activeTintColor: '#fff',
      style:{backgroundColor:'#22252A'},
      tabStyle:{borderWidth:1, borderColor:'#fff', margin:10, borderRadius:25,},
      
    },
  },
)

export default createAppContainer(TabNavigator);