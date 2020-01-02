import * as React from 'react';
import { Component } from 'react';
import { View, TouchableOpacity, TextInput, Picker } from 'react-native';
import styles from '../../../style/style_mobile';
import { Header, Left, Right, Body, Container, Button, Icon, Title, Text, Content } from 'native-base';
import ToggleSwitch from 'rn-toggle-switch';
import { node } from 'prop-types';


class UserEdit extends Component {
    static navigationOptions = {
        header: null,
    };
    state = { switchValue: true }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }
    render() {
        return (

            <Container style={{ backgroundColor: '#22252A', }}>
                <Header transparent>
                    <Left><Button transparent onPress={() => this.props.navigation.goBack()}><Icon name='arrow-back' /></Button></Left>
                    <Body transparent ><Title style={{marginLeft:15}}>Tài khoản của tôi</Title></Body>
                    <Button transparent><Text style={styles.btn_edit}>Lưu</Text></Button>
                </Header>
                <Content>
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
                                    <Picker style={styles.right_info}
                                        selectedValue={this.state.language}
                                        itemPosition='right_info'
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
                                        radius={15}
                                        onValueChange={(val) => {
                                            /* your handler function... */
                                        }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>

        )
    }
}



export default UserEdit;