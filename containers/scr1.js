import React, {Component} from 'react';
import Layout from '../components/layout';
import Screen1 from '../components/screen1';

class Scr1 extends Component {
  nextScreen = () => {
    const {navigate} = this.props.navigation;
    navigate('Screen2');
  };

  render() {
    return (
      <Layout>
        <Screen1 onPress={() => this.nextScreen()} />
      </Layout>
    );
  }
}

export default Scr1;
