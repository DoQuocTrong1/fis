import * as React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Configuration from './Configuration';
import Notification from './Notification';
import DataProcessing from './DataProcessing';
import Relationship from './Relationship';


const initialLayout = { width: Dimensions.get('window').width };
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: '#22252A', }}
    scrollEnabled={true}
    tabStyle={{borderColor:'#fff', borderWidth:0.5, borderRadius:30, margin:10}}
  />
);
const TabViewExample  = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Cấu hình' },
    { key: 'second', title: 'Thông Báo' },
    { key: 'three', title: 'Xử lý dữ liệu' },
    { key: 'four', title: 'Mối quan hệ' },
  ]);

  const renderScene = SceneMap({
    first: Configuration,
    second: Notification,
    three: DataProcessing,
    four: Relationship,
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