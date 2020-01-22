import React, {Component} from 'react';
import Layout from '../components/layout';
import Screen2 from '../components/screen2';

class Scr2 extends Component {
  nextScreen = () => {
    const {navigate} = this.props.navigation;
    navigate('Screen3');
  };

  render() {
    return (
      <Layout>
        <Screen2 onPress={() => this.nextScreen()} />
      </Layout>
    );
  }
}

export default Scr2;
