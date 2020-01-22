import React, {Component} from 'react';
import Layout from '../components/layout';
import Screen7 from '../components/screen7';

class Scr7 extends Component {
  nextScreen = () => {
    const {navigate} = this.props.navigation;
    navigate('Screen7');
  };

  render() {
    return (
      <Layout>
        <Screen7 onPress={() => this.nextScreen()} />
      </Layout>
    );
  }
}

export default Scr7;
