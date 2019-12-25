import * as React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import styles from '../../../style/style_mobile';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';


class UserEdit extends Component {
    static navigationOptions = {
        title: 'Tài khoản của tôi',
        headerRight: () => (
            <TouchableOpacity style={styles.btn_user}>
                <Text style={styles.btn_edit}>Lưu</Text>
            </TouchableOpacity>
        ),
    };
   
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
                        <TextInput style={styles.txt_right_info}>Nam</TextInput>
                    </View>
                    <View style={styles.box_detail_info}>
                        <Text style={styles.txt_left_label}>Địa chỉ</Text>
                        <TextInput style={styles.txt_right_info}>Hà Nội</TextInput>
                    </View>
                </View>
            </View>
        </View>
        )
    }
}



export default UserEdit;