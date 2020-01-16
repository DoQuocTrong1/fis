import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import styles from '../../../style/style_mobile';
import { Header, Left, Right, Body, Container, Title, Content } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class DetailTicket extends Component {
    state = {
        visibleModal: null,
    };
    _renderButton = (text, icon, onPress) => (
        <TouchableOpacity style={styles.modal_btnBody} onPress={onPress}>
            <Icon name={icon} size={20} color={'#fff'} />
            <Text style={styles.panel_txtBody}>{text}</Text>
        </TouchableOpacity>
    );

    _renderModalContent = () => (
        <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
                <Text style={styles.modal_title}>Activiti</Text>
                <Icon.Button
                    name={'close'}
                    size={40} color={'#34373C'}
                    backgroundColor={'#22252A'}
                    style={{ marginRight: -20 }}
                    onPress={() => this.setState({ visibleModal: null })}
                />
            </View>
            <View style={styles.modalBody}>
                {this._renderButton('Resolved', 'subdirectory-arrow-left' ,null)}
                {this._renderButton('Tranfer', 'upload' ,null)}
                {this._renderButton('Comment', 'comment-text-outline' ,null)}
                {this._renderButton('Add images', 'image' ,null)}
                {this._renderButton('Update', 'reload' ,null)}
            </View>
        </View>
    );

    render() {
        return (
            <View style={styles.bg_primary}>
                <Modal isVisible={this.state.visibleModal === 1}>
                    {this._renderModalContent()}
                </Modal>
                <View style={styles.box_home}>
                    <View style={styles.table_panle}>
                        <View style={styles.panel_default}>
                            <View style={styles.panel_heading}>
                                <Text style={styles.panel_title}>Lỗi PC</Text>
                            </View>
                            <View style={styles.panel_body}>
                                <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                            </View>
                        </View>

                        <View style={styles.panel_default}>
                            <View style={styles.panel_heading}>
                                <Text style={styles.panel_title}>Detail</Text>
                            </View>
                            <View style={styles.panel_body}>
                                <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                            </View>
                        </View>
                    </View>


                </View>
            </View>
        );
    }
}

