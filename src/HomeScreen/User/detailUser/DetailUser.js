import * as React from 'react';
import { Component } from 'react';
import { Image, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../../style/style_mobile';
import { Header, Left, Right, Body, Container, Button, Icon, Title, Text, Content } from 'native-base';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UserEditScreen from './UserEdit';
// import { Icon } from 'react-native-vector-icons/FontAwesome';

class DetailUser extends Component {
    static navigationOptions = {
        header: null,
    };
    onUser = () => { this.props.navigation.navigate('Details') };
    onBack = () => {this.props.navigation.dispatch(NavigationActions.back())};
    render() {
        return (
            <Container style={{ backgroundColor: '#22252A', }}>
                <Header transparent>
                    <Left><Button transparent onPress={this.onBack}>
                    <Icon name='arrow-back' /></Button></Left>
                    <Body transparent ><Title style={{ marginLeft: 15 }}>Tài khoản của tôi</Title></Body>
                    <Button transparent onPress={this.onUser}><Text style={styles.btn_edit}>Sửa</Text></Button>
                </Header>
                <Content>
                    <View style={styles.bg_primary}>
                        <View style={styles.content_body}>
                            <View style={styles.box_home}>
                                <View style={styles.box_detail_info}>
                                    <Text style={styles.txt_left_label}>Họ & tên</Text>
                                    <View>
                                        <Text style={styles.txt_right_info}>Nguyễn Mạnh Cường</Text>
                                    </View>
                                </View>
                                <View style={styles.box_detail_info}>
                                    <Text style={styles.txt_left_label}>Số điện thoại </Text>
                                    <View>
                                        <Text style={styles.txt_right_info}>0962851471</Text>
                                    </View>
                                </View>
                                <View style={styles.box_detail_info}>
                                    <Text style={styles.txt_left_label}>Giới tính</Text>

                                    <Text style={styles.txt_right_info}>Nam</Text>
                                </View>
                                <View style={styles.box_detail_info}>
                                    <Text style={styles.txt_left_label}>Địa chỉ</Text>

                                    <Text style={styles.txt_right_info}>Hà Nội</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const RootStack = createStackNavigator({
    Home: DetailUser,
    Details: UserEditScreen,
}, {
    defaultNavigationOptions: {
        header: null
    },
});

export default createAppContainer(RootStack);