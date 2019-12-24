import * as React from 'react';
import { Component } from 'react';
import { View, Dimensions, Text, TextInput, TouchableOpacity, Picker, ScrollView } from 'react-native';

import styles from '../../../../style/style_mobile'
import Icon from 'react-native-vector-icons/Ionicons';


export default class Configuration extends Component {
    state = {
        choosenIndex: 0
    };
    render() {
        return (
            <View style={styles.box_noti_ticket}>
                <View style={styles.box_content}>
                    <View style={styles.box_add_new_content}>
                        <Text style={styles.txt_box_add_new}>
                            Host basic infomation
                            </Text>
                        <View style={styles.form_add}>
                            <ScrollView>
                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="Tên * "
                                        placeholderTextColor='#fff'></TextInput>
                                </View>

                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="Alias * "
                                        placeholderTextColor='#fff'
                                    ></TextInput>
                                </View>

                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="IP Adress / DNS * "
                                        placeholderTextColor='#fff'></TextInput>
                                </View>

                                <View style={styles.form_group}>
                                    <Picker style={styles.form_control}
                                        selectedValue={this.state.language}
                                        onValueChange={(itemValue, itemPosition) =>
                                            this.setState({ language: itemValue, choosenIndex: itemPosition })}>
                                        <Picker.Item label="--Monitored from-- " value="java" />

                                    </Picker>
                                </View>

                                <View style={styles.form_group}>
                                    <Picker style={styles.form_control}
                                        selectedValue={this.state.language}
                                        onValueChange={(itemValue, itemPosition) =>
                                            this.setState({ language: itemValue, choosenIndex: itemPosition })}>
                                        <Picker.Item label="--Timezone / Location--" value="java" />

                                    </Picker>
                                </View>
                                <View style={styles.group_inline}>
                                    <Text style={styles.txt_group_inline}>Template</Text>
                                    <TouchableOpacity>
                                        
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.btn_login}>
                                    <Text style={styles.txt_btnLogin}>Đăng nhập</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}