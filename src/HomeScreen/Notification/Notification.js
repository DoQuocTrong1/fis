import * as React from 'react';
import { Component } from 'react';
import { FlatList, View, Text, SafeAreaView } from 'react-native';
import styles from '../../style/style_mobile';
import data from './data/data';

function Item({ title, time }) {
    return (
        <View style={styles.notification_content}>
            <Text style={styles.notification_heading}>{title}</Text>
            <Text style={styles.notification_text}>{time}</Text>
        </View>
    );
}

export default class NotificationScreen extends Component {

    render() {
        return (
            <View style={styles.bg_primary}>
                <View style={styles.header_mobile}>
                    <Text style={styles.title_ticket}>Thông báo</Text>
                </View>
                <View style={styles.content_body}>
                    <View style={styles.box_home}>
                        <View style={styles.box_content}>
                            <View style={styles.box_noti}>
                                <FlatList
                                    data={data}
                                    renderItem={({ item }) => <Item
                                        title={item.title}
                                        time={item.time} />}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}