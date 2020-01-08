import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './src/style/style_mobile';
import { Rating, AirbnbRating,SearchBar } from 'react-native-elements';

class UserScreen extends Component {
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;

    return (

      <View style={styles.bg_primary}>
        <AirbnbRating />

        <AirbnbRating
          count={11}
          reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
          defaultRating={11}
          size={20}
        />
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />

      </View>
    )
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showTheThing: false,
      data: 1,
    }
  }

  componentHideAndShow = () => {
    if (this.state.data == 1) {
      this.setState({ showTheThing: true })
    } else {
      this.setState({ showTheThing: false })
    }
  }
  componentDidMount() {
    this.componentHideAndShow();
  }

  render() {
    return (
      <View style={styles.bg_primary} >

        {
          // Display the content in screen when state object "content" is true.
          // Hide the content in screen when state object "content" is false. 
          this.state.showTheThing ? <UserScreen /> : null
        }
        <Button title="Hide/Show Component" onPress={this.componentHideAndShow} />
      </View>
    );
  }
}


