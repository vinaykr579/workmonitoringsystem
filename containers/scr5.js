import React, {Component} from 'react';
import Layout from '../components/layout';
import Screen5 from '../components/screen5';

class Scr5 extends Component {
  nextScreen = () => {
    const {navigate} = this.props.navigation;
    navigate('Screen6');
  };

  render() {
    return (
      <Layout>
        <Screen5 onPress={() => this.nextScreen()} />
      </Layout>
    );
  }
}

export default Scr5;
