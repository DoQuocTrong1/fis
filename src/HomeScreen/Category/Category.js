import * as React from 'react';
import { Component } from 'react';
import { Image, View, Text,TouchableOpacity } from 'react-native';
import styles from '../../style/style_mobile';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CategoryScreen extends Component {

    render() {
        return (
            <View style={styles.bg_primary}>
                <View style={styles.header_mobile}>
                    <Text style={styles.title_ticket}>Danh mục</Text>
                </View>
                <View style={styles.content_body}>
                    <View style={styles.box_home}>
                        <View style={styles.box_menu}>
                            <TouchableOpacity style={styles.btn_user}>
                                <Text style={styles.txt_btn_user}>Dashboard </Text>
                                <Icon name="ios-arrow-forward" color='#fff' size={18} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn_user}>
                                <Text style={styles.txt_btn_user}>Quản lý tài khoản </Text>
                                <Icon name="ios-arrow-forward" color='#fff' size={18} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn_user}>
                                <Text style={styles.txt_btn_user}>Quản lý SDB </Text>
                                <Icon name="md-add" color='#fff' size={18} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn_user}>
                                <Text style={styles.txt_btn_user}>Quản lý Cetreon </Text>
                                <Icon name="md-add" color='#fff' size={18} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}