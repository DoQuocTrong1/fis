import * as React from 'react';
import { Component } from 'react';
import { Image, View, Text, Dimensions, SafeAreaView } from 'react-native';
import styles from '../../style/style_mobile';
import Icon from 'react-native-vector-icons/FontAwesome5';


import TabBarChar from './TabBarChar/TabView';
import TabLineChar from './TabLineChar/TabView';
import TicketList from './TabList/ListTicket';
import { ScrollView } from 'react-native-gesture-handler';


export default class DashBroadScreen extends Component {
    render() {
        return (
            <View style={styles.bg_primary}>
                <View style={styles.header_mobile}>
                    <Image source={require('../../../logo/logoSmall.png')} style={styles.logo_title}></Image>
                </View>

                <View style={styles.content_body}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={styles.box_noti_dashboard}>
                            <View style={styles.col_xs_4}>
                                <View style={styles.box_item}>
                                    <View style={styles.icon_noti}>
                                        <Icon name={'link'} size={40} color={'#F17128'}></Icon>
                                        <Text style={styles.txt_noti}>25</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.col_xs_4}>
                                <View style={styles.box_item}>
                                    <View style={styles.icon_noti}>
                                        <Icon name={'box'} size={40} color={'#F17128'}></Icon>
                                        <Text style={styles.txt_noti}>25</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.col_xs_4}>
                                <View style={styles.box_item}>
                                    <View style={styles.icon_noti}>
                                        <Icon name={'images'} size={40} color={'#F17128'}></Icon>
                                        <Text style={styles.txt_noti}>25</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.box_home}>
                            <View style={styles.box_content}>
                                <TabBarChar />
                            </View>
                        </View>

                        <View style={styles.box_home}>
                            <View style={styles.box_content}>
                                <TabLineChar />
                            </View>
                        </View>

                        <View style={styles.box_home}>
                            <View style={styles.box_content}>
                                <Text style={styles.title_box}>
                                    Danh sách ticket
                                </Text>
                                <TicketList />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}