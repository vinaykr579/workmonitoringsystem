import React, {Component} from 'react';
import Layout from '../components/layout';
import Screen6 from '../components/screen6';

class Scr6 extends Component {
  nextScreen = () => {
    const {navigate} = this.props.navigation;
    navigate('Screen7');
  };

  render() {
    return (
      <Layout>
        <Screen6 onPress={() => this.nextScreen()} />
      </Layout>
    );
  }
}

export default Scr6;
