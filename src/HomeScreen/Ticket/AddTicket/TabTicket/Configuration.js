import * as React from 'react';
import { Component } from 'react';
import { View, Dimensions, Text, TextInput, TouchableOpacity, Picker, ScrollView, Switch } from 'react-native';

import styles from '../../../../style/style_mobile'
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'rn-toggle-switch';


export default class Configuration extends Component {
    state = {
        choosenIndex: 0,

    };
    state2 = { switchValue: true }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }
    render() {
        return (
            <View style={styles.box_noti_ticket}>
                <View style={styles.box_content}>
                    <View style={styles.box_add_new_content}>
                        <ScrollView>
                            <Text style={styles.txt_box_add_new}>
                                Host basic infomation
                            </Text>
                            <View style={styles.form_add}>

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
                                    <TouchableOpacity style={styles.btn_group_inline}>
                                        <Icon name="md-add" color='#F17128' size={18} />
                                        <Text style={styles.txt_btn_group}>Add new entry</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.box_new_entry}>
                                    <View style={styles.form_group}>
                                        <TextInput style={styles.form_control}
                                            placeholder="Name"
                                            placeholderTextColor='#fff'></TextInput>
                                    </View>
                                    <View style={styles.form_group}>
                                        <TextInput style={styles.form_control}
                                            placeholder="Value"
                                            placeholderTextColor='#fff'></TextInput>
                                    </View>
                                </View>

                                <View style={styles.group_inline}>
                                    <Text style={styles.txt_group_inline}>Create Services linked to the Template too</Text>
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
                            <Text style={styles.txt_box_add_new}> Host check options </Text>
                            <View style={styles.form_add}>
                                <View style={styles.form_group}>
                                    <Picker style={styles.form_control}
                                        selectedValue={this.state.language}
                                        onValueChange={(itemValue, itemPosition) =>
                                            this.setState({ language: itemValue, choosenIndex: itemPosition })}>
                                        <Picker.Item label="--Check command-- " value="java" />
                                    </Picker>
                                </View>
                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="Args"
                                        placeholderTextColor='#fff'></TextInput>
                                </View>
                                <Text style={{ color: '#fff', marginLeft: 10 }}>Custom macros</Text>
                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="Name"
                                        placeholderTextColor='#fff'></TextInput>
                                </View>
                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="Value"
                                        placeholderTextColor='#fff'></TextInput>
                                </View>
                            </View>

                            <Text style={styles.txt_box_add_new}> Scheduling options </Text>
                            <View style={styles.form_add}>
                                <View style={styles.form_group}>
                                    <Picker style={styles.form_control}
                                        selectedValue={this.state.language}
                                        onValueChange={(itemValue, itemPosition) =>
                                            this.setState({ language: itemValue, choosenIndex: itemPosition })}>
                                        <Picker.Item label="--Check Period -- " value="java" />
                                    </Picker>
                                </View>
                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="Max Check Attempts"
                                        placeholderTextColor='#fff'></TextInput>
                                </View>
                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="Normal Check Interval"
                                        placeholderTextColor='#fff'></TextInput>
                                </View>
                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="Retry Check Interval"
                                        placeholderTextColor='#fff'></TextInput>
                                </View>

                                <View style={styles.group_inline}>
                                    <Text style={styles.txt_group_inline}>Active Checks Enabled</Text>
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
                                <View style={styles.group_inline}>
                                    <Text style={styles.txt_group_inline}>Passive Checks Enabled</Text>
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

                            <View style={styles.form_add}>
                                <TouchableOpacity style={styles.btn_registration}>
                                    <Text style={styles.txt_btnLogin}>ĐĂNG KÝ</Text>
                                </TouchableOpacity>

                                <View style={styles.row_addTicket}>
                                    <TouchableOpacity style={styles.btn_save_Ticket}>
                                        <Text style={styles.txt_btnLogin}>SAVE</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btn_reset_Ticket}>
                                        <Text style={styles.txt_btnLogin}>RESET</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                </View>
            </View>
        )
    }
}