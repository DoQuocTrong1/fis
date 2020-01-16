import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DetailTicketScreen from './index';


const TabNavigator = createMaterialTopTabNavigator(
    {
        Infomation: {
            screen: DetailTicketScreen,
            navigationOptions: {
                tabBarLabel: 'Infomation',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Image source={require('../../../images/info.png')} style={{width: 30, height: 30}}/>
                    </View>),
                activeColor: '#F17128',
                inactiveColor: '#fff',
            }
        },
        LogReport: {
            screen: DetailTicketScreen,
            navigationOptions: {
                tabBarLabel: 'Log report',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                         <Image source={require('../../../images/report.png')} style={{width: 30, height: 30}}/>
                    </View>),
                activeColor: '#F17128',
                inactiveColor: '#fff',            
               
            }
        },
        Attachment: {
            screen: DetailTicketScreen,
            navigationOptions: {
                tabBarLabel: 'Attachment',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Image source={require('../../../images/attachment.png')} style={{width: 30, height: 30}}/>
                    </View>),
                activeColor: '#F17128',
                inactiveColor: '#fff',
            }
        },
    },
    {
        initialRouteName: "Infomation",
        activeColor: '#F17128',
        inactiveColor: '#fff',
        tabBarOptions: {
            showIcon: true,
            style:{backgroundColor: '#22252A', height:100,paddingTop:20},
          
        }

    },
);

export default createAppContainer(TabNavigator);

