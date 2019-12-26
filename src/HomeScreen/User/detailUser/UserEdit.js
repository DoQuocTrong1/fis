import * as React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Picker } from 'react-native';
import styles from '../../../style/style_mobile';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import ToggleSwitch from 'rn-toggle-switch';
class UserEdit extends Component {
    static navigationOptions = {
        title: 'Tài khoản của tôi',
        headerRight: () => (
            <TouchableOpacity style={styles.btn_user}>
                <Text style={styles.btn_edit}>Lưu</Text>
            </TouchableOpacity>
        ),
    };
    state = { switchValue: true }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }
    render() {
        return (
            <View style={styles.bg_primary}>
                <View style={styles.content_body}>
                    <View style={styles.box_home}>
                        <View style={styles.box_detail_info}>

                            <Text style={styles.txt_left_label}>Họ &amp; tên</Text>
                            <TextInput style={styles.txt_right_info}>Nguyễn Mạnh Cường</TextInput>
                        </View>
                        <View style={styles.box_detail_info}>
                            <Text style={styles.txt_left_label}>Số điện thoại</Text>
                            <TextInput style={styles.txt_right_info}>0962851471</TextInput>
                        </View>
                        <View style={styles.box_detail_info}>
                            <Text style={styles.txt_left_label}>Giới tính</Text>
                            <Picker style={styles.txt_right_info}
                                selectedValue={this.state.language}
                                onValueChange={(itemValue, itemPosition) =>
                                    this.setState({ language: itemValue, choosenIndex: itemPosition })}>
                                <Picker.Item label="Nam " value="Men" />
                                <Picker.Item label="Nữ " value="Women" />
                            </Picker>
                        </View>
                        <View style={styles.box_detail_info}>
                            <Text style={styles.txt_left_label}>Địa chỉ</Text>
                            <TextInput style={styles.txt_right_info}>Hà Nội</TextInput>
                        </View>
                        <View style={styles.box_detail_info}>
                            <Text style={styles.txt_left_label}>Gửi thông tin qua email</Text>
                            <ToggleSwitch
                                text={{ on: 'On', off: 'Off', activeTextColor: '#fff', inactiveTextColor: '#fff' }}
                                color={{
                                    indicator: 'white', active: '#F17128', inactive: '#22252A',
                                    activeBorder: '#41B4A4', inactiveBorder: '#E9E9E9'
                                }}
                                active={false}
                                disabled={false}
                                width={25}
                                radius={25}
                                onValueChange={(val) => {
                                    /* your handler function... */
                                }} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}



export default UserEdit;