import * as React from 'react';
import { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';
import data from '../data/dataLine';
import { LineChart } from "react-native-chart-kit";;

const chartConfig = {
  backgroundColor: '#2d3035',
  backgroundGradientFrom: '#2d3035',
  backgroundGradientTo: '#000',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  }
};

export default class VPBank extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LineChart
          data={data}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    )
  }
}