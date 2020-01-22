import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

class Layout extends Component {
  render() {
    return (
      <SafeAreaView style={style.container}>{this.props.children}</SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e8deea',
  },
});

export default Layout;
