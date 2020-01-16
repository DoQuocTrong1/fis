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
    
    _renderHeader(item, expanded) {
        return (
            <View style={styles.btn_task}>
                <Text style={styles.txt_title}>
                    {item.title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 20, color: '#fff' }} name="ios-arrow-dropup" />
                    : <Icon style={{ fontSize: 20, color: '#fff' }} name="ios-arrow-dropdown" />}
            </View>
        );
    }

    _renderContent(item) {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.txt_Task}>
                    Open
                </Text>
                <Text style={styles.txt_Task}>
                    In Processing
                </Text>
                <Text style={styles.txt_Task}>
                    On Hold
                </Text>
                <Text style={styles.txt_Task}>
                    Close
                </Text>
            </View>
        );
    }
    render() {
        const onAccordion = (
            <Accordion
                dataArray={dataArray}
                animation={true}
                expanded={true}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
            />
        );
   

        return (
            <View style={styles.bg_primary}>
                <View style={styles.header_mobile}>
                    <Image source={require('../../images/logoSmall.png')} style={styles.logo_title}></Image>
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