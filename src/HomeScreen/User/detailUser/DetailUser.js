import * as React from 'react';
import { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../../style/style_mobile';

import UserEditScreen from './UserEdit';
import { Icon } from 'react-native-vector-icons/FontAwesome';

class DetailUser extends Component {
    onUser = () => { this.props.navigation.navigate('Detail') }

    static navigationOptions = {
        title: 'Tài khoản của tôi',
        headerRight: () => (
            <TouchableOpacity style={styles.btn_user}
                onPress={this.onUser}>
                <Text style={styles.btn_edit}>Sửa</Text>
            </TouchableOpacity>
        ),
        // headerLeft:() => (
        //     <TouchableOpacity style={styles.btn_user}
        //         onPress={this.onUser}>
        //         <Text style={styles.btn_edit}></Text>
        //     </TouchableOpacity>
        // ),
    };
    render() {
        return (
            <View style={styles.bg_primary}>
                <View style={styles.content_body}>
                    <View style={styles.box_home}>
                        <View style={styles.box_detail_info}>
                            <Text style={styles.txt_left_label}>Họ &amp; tên</Text>
                            <Text style={styles.txt_right_info}>Nguyễn Mạnh Cường</Text>
                        </View>
                        <View style={styles.box_detail_info}>
                            <Text style={styles.txt_left_label}>Số điện thoại</Text>
                            <Text style={styles.txt_right_info}>0962851471</Text>
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
        )
    }
}



export default DetailUser;