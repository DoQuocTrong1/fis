import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';



import TopCpu from './TopCPU';
import VPBank from './VPBank';
import FPTsever from './FPTsever';

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: '#22252A' }}
    scrollEnabled={true}
  />
);
const TabViewExample = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'TopCPU' },
    { key: 'second', title: 'VPBank' },
    { key: 'three', title: 'FPTsever' }
  ]);

  const renderScene = SceneMap({
    first: TopCpu,
    second: VPBank,
    three: FPTsever,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

export default TabViewExample;
