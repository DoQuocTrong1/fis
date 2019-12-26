import * as React from 'react';
import { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styles from '../../style/style_mobile';
import Icon from 'react-native-vector-icons/FontAwesome';

import DetailScreen from './detailUser/DetailUser';




class UserScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        const { navigate } = this.props.navigation
        return (

            <View style={styles.bg_primary}>
                <View style={styles.header_mobile}>
                    <Text style={styles.title_ticket}>Thông tin tài khoản</Text>
                </View>
                <View style={styles.content_body}>
                    <View style={styles.box_home}>
                        <View style={styles.box_menu}>
                            <TouchableOpacity style={styles.btn_user}
                                onPress={() => navigate('Detail')}>
                                <Text style={styles.txt_btn_user}>Thông tin cá nhân </Text>
                                <Icon name="chevron-right" color='#fff' size={18} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn_user}>
                                <Text style={styles.txt_btn_user}>Đổi mật khẩu </Text>
                                <Icon name="chevron-right" color='#fff' size={18} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn_user}>
                                <Text style={styles.txt_btn_user}>Thoát tài khoản </Text>
                                <Icon name="chevron-right" color='#fff' size={18} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


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