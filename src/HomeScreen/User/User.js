import * as React from 'react';
import {Component} from 'react';
import { Image,View,Text } from 'react-native';
import styles from '../../style/style_mobile';

export default class UserScreen extends Component {
    static navigationOpention = {
        tabBarLabel: 'Tab1'
    }
    render(){
        return(
            <View style={styles.bg_primary}>
                <Text>tab</Text>
            </View>
        )
    }
}