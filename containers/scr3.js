import React, {Component} from 'react';
import Layout from '../components/layout';
import Screen3 from '../components/screen3';

class Scr3 extends Component {
  nextScreen = () => {
    const {navigate} = this.props.navigation;
    navigate('Screen4');
  };

  render() {
    return (
      <Layout>
        <Screen3 onPress={() => this.nextScreen()} />
      </Layout>
    );
  }
}

export default Scr3;
