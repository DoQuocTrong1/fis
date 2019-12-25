import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert, TouchableOpacity, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-table-component';

export default class ExampleThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
          widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
        }
      }
     
      render() {
        const state = this.state;
        const tableData = [];
        for (let i = 0; i < 30; i += 1) {
          const rowData = [];
          for (let j = 0; j < 9; j += 1) {
            rowData.push(`${i}${j}`);
          }
          tableData.push(rowData);
        }
     
        return (
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                </Table>
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                    {
                      tableData.map((rowData, index) => (
                        <Row
                          key={index}
                          data={rowData}
                          widthArr={state.widthArr}
                          style={[styles.row, index%2 && {backgroundColor: '#1e2124'}]}
                          textStyle={styles.text}
                        />
                      ))
                    }
                  </Table>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        )
      }
    }
     
    const styles = StyleSheet.create({
      container: { flex: 1,  paddingTop: 30, backgroundColor: '#2d3035' },
      header: { height: 50, backgroundColor: '#22252A' },
      text: { textAlign: 'center', fontWeight: '100', color:'#fff' },
      dataWrapper: { marginTop: -1 },
      row: { height: 40, backgroundColor: '#41484f' }
    });