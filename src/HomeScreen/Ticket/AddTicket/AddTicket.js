import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

import styles from '../../../style/style_mobile';
import TabView from './TabTicket/TabView';

class AddTicket extends React.Component {
    static navigationOptions = {
        title: 'Thêm mới thiết bị',
    };
    render() {
        return (
            <View style={{
                backgroundColor: '#22252A',
                flex: 1,
            }}>
                <TabView />
            </View>
        );
    }
}

export default AddTicket;