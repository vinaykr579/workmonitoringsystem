import React, {Component} from 'react';
import Layout from '../components/layout';
import Screen4 from '../components/screen4';

class Scr4 extends Component {
  nextScreen = () => {
    const {navigate} = this.props.navigation;
    navigate('Screen5');
  };

  render() {
    return (
      <Layout>
        <Screen4 onPress={() => this.nextScreen()} />
      </Layout>
    );
  }
}

export default Scr4;
