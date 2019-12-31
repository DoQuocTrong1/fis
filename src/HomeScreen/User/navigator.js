import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import DetailScreen from './detailUser/DetailUser';
import UserScreen from './User';

const MainNavigator = createStackNavigator({
    User: { screen: UserScreen },
    Detail: { screen: DetailScreen },
},
    {
        initialRouteName: 'User',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#22252A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 22,
                marginLeft: '20%'
            },

        },

    });

const User = createAppContainer(MainNavigator);

export default User;