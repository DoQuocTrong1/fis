import * as React from 'react';
import { Component } from 'react';
import {View,Dimensions} from 'react-native';

import data from '../data/dataBar';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5
};

export default class FPT extends Component{
    
    render(){
        
        return(
            <View style={{flex:1}}>
                 <BarChart data={data}
                    width={screenWidth}
                    height={220}
                    yAxisLabel={''}
                    chartConfig={chartConfig}
                    verticalLabelRotation={30} />

            </View>
        )
    }
}