import * as React from 'react';
import { createAppContainer } from 'react-navigation';

import {  createMaterialTopTabNavigator } from 'react-navigation-tabs';

import TopCpu from './TopCPU';
import VPBank from './VPBank';
import FPTsever from './FPTsever';

const TabNavigator = createMaterialTopTabNavigator(
  {
    TopCpu: {
      screen: TopCpu,
      navigationOptions: {
        tabBarLabel: 'Top CPU USAGE',   
      }
    },
    FPTSever: {
      screen: FPTsever,
      navigationOptions: {
        tabBarLabel: 'FPT SERVER',
        
      }
    },
    VPBank: {
      screen: VPBank,
      navigationOptions: {
        tabBarLabel: 'VP BANK',
      }
    },
    SHIHANBank: {
      screen: FPTsever,
      navigationOptions: {
        tabBarLabel: 'SHIHAN BANK',
      }
    },
  },{
    initialRouteName: "TopCpu",
    tabBarOptions:{
      scrollEnabled:true,
      activeTintColor: '#fff',
      style:{backgroundColor:'#22252A'},     
      inactiveTintColor:'#878787',
    },
  },
)

export default createAppContainer(TabNavigator);
