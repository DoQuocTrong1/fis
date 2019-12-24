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
                    <Text style={styles.txt_logo}>Quên mật khẩu</Text>
                </View>
                <View style={styles.alert_success}>
                    <Text style={styles.txt_alert}> Gửi mật khẩu thành công</Text>
                </View>
                <View>
                    <View style={styles.searchSection}>
                        <Icon style={styles.searchIcon} name="mail" size={25} color="#fff" />
                        <TextInput
                            style={styles.input}
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