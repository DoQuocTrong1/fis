import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../style/style_mobile';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.bg_primary}>
                <View style={styles.login_logo}>
                    <Image source={require('../../logo/logo.png')} style={styles.logo}></Image>
                    <Text style={styles.txt_logo}>FPT.HyperSM Platform Login</Text>
                </View>
                <View style={styles.alert_success}>
                    <Text style={styles.txt_alert}> Tên đăng nhập hoặc mật khẩu không đúng!</Text>
                </View>
                <View>
                    <View style={styles.form_group}>
                        <Icon style={styles.searchIcon} name="user" size={25} color="#fff" />
                        <TextInput
                            style={styles.form_control}
                            placeholder="Nhập tên tài khoản đăng nhập"
                            underlineColorAndroid="transparent"
                            placeholderTextColor={'#fff'}
                        />
                        
                    </View>
                    <View style={styles.form_group}>
                        <Icon style={styles.searchIcon} name="lock" size={25} color="#fff" />
                        <TextInput
                            style={styles.form_control}
                            placeholder="Mật khẩu"
                            underlineColorAndroid="transparent"
                            placeholderTextColor={'#fff'}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.btn_login}>
                        <Text style={styles.txt_btnLogin}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_gotpass}>
                        <Text style={styles.txt_forgotpass}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}