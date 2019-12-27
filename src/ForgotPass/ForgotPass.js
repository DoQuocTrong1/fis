import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../style/style_mobile';
import Icon from 'react-native-vector-icons/Feather';

export default class ForgotPass extends Component {
    render() {
        return (
            <View style={styles.bg_primary}>
                <View style={styles.login_logo}>
                    <Image source={require('../../logo/logo.png')} style={styles.logo}></Image>
                </View>
                <View>
                    <View style={styles.form_group}>
                        <Icon style={styles.searchIcon} name="mail" size={25} color="#fff" />
                        <TextInput
                            style={styles.form_control}
                            placeholder="Nhập tên tài khoản đăng nhập"
                            underlineColorAndroid="transparent"
                            placeholderTextColor={'#fff'}
                        />     
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.btn_login}>
                        <Text style={styles.txt_btnLogin}>KHÔI PHỤC MẬT KHẨU</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_gotpass}>
                        <Text style={styles.txt_forgotpass}>Quay lại trang chủ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}