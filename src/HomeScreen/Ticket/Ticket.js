import * as React from 'react';
import { Component } from 'react';
import { Image, View, Text, TextInput, ScrollView } from 'react-native';
import styles from '../../style/style_mobile';
import Icon from 'react-native-vector-icons/Ionicons';
import ListTicket from './ListTicket';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AddTicket from './AddTicket/AddTicket';

class TicketScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.bg_primary}>
                <View style={styles.header_mobile}>
                    <Text style={styles.title_ticket}>Ticket</Text>
                    <Icon.Button
                        name='md-add'
                        color='#F17128'
                        backgroundColor='#22252A'
                        size={30}
                        style={styles.btn_add}
                        onPress={() => navigate('Profile')}
                    />
                </View>

                <View style={styles.box_home}>
                    <View style={styles.box_content}>
                        <View style={styles.form_group}>
                            <TextInput
                                style={styles.form_control}
                                placeholder="Nhập từ khóa cần tìm kiếm"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={'#fff'}
                            />
                            <Icon.Button style={styles.searchIcon} name="ios-search" size={25} color="#fff" backgroundColor='none' />
                        </View>
                        <View style={styles.box_list_content}>
                            <ListTicket />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const MainNavigator = createStackNavigator({
    Ticket: { screen: TicketScreen },
    Profile: { screen: AddTicket },
},
    {
        initialRouteName: 'Ticket',
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
                marginLeft: '15%'
            },
        },
    });

const Ticket = createAppContainer(MainNavigator);

export default Ticket;
