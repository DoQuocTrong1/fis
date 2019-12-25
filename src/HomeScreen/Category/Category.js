import * as React from 'react';
import {Component} from 'react';
import { Image,View,Text } from 'react-native';
import styles from '../../style/style_mobile';

export default class CategoryScreen extends Component {

    render(){
        return(
            <View style={styles.bg_primary}>
             <View style={styles.header_mobile}>
                    <Text style={styles.title_ticket}>Danh mục</Text>
                    
                </View>
            </View>
        )
    }
}