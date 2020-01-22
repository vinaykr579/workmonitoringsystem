import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RNCamera} from 'react-native-camera';

class Screen7 extends Component {
  state = {
    cameraView: false,
    items: [
      {
        name: 'Item1',
        value: 1,
        selected: false,
      },
      {
        name: 'Item2',
        value: 2,
        selected: false,
      },
      {
        name: 'Item3',
        value: 3,
        selected: false,
      },
      {
        name: 'Item4',
        value: 4,
        selected: false,
      },
      {
        name: 'Item5',
        value: 5,
        selected: false,
      },
      {
        name: 'Item6',
        value: 6,
        selected: false,
      },
      {
        name: 'Item7',
        value: 7,
        selected: false,
      },
      {
        name: 'Item8',
        value: 8,
        selected: false,
      },
    ],
  };

  cameraHandler = () => {
    return (
      <TouchableOpacity onPress={() => this.setState({cameraView: true})}>
        <Icon name="photo-camera" size={30} />
      </TouchableOpacity>
    );
  };

  takePic = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      this.setState({cameraView: false});
    }
  };

  cameraView = () => {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={style.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        <TouchableOpacity
          style={style.captureView}
          onPress={() => this.takePic()}>
          <Icon name="photo-camera" size={30} style={style.capture} />
        </TouchableOpacity>
      </RNCamera>
    );
  };

  multiSelectHandler = index => {
    let items = this.state.items;
    items[index].selected = items[index].selected === true ? false : true;
    this.setState({items: items});
  };
  render() {
    if (this.state.cameraView === true) {
      return this.cameraView();
    }
    return (
      <View>
        <View style={style.topLogoView}>
          <Image
            style={style.logo}
            source={require('../assets/images/logo.png')}
          />
        </View>
        <View style={style.boxContainer}>
          <View style={style.boxRow}>
            <TouchableOpacity
              style={style.box}
              onPress={() => this.props.onPress()}>
              <Text style={style.location}>SERVICE REPORT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.box}
              onPress={() => this.props.onPress()}>
              <Text style={style.location}>JOINT REPORT</Text>
            </TouchableOpacity>
            <View style={style.cameraBox}>
              {!this.state.cameraView && this.cameraHandler()}
            </View>
          </View>
        </View>
        <View style={style.formContainer}>
          <View style={style.formRow}>
            <View>
              <Text style={style.labeltext}>Narration: </Text>
            </View>
            <View>
              <TextInput multiline={true} style={style.multiline} />
            </View>
          </View>
          <View style={style.formRow}>
            <View>
              <Text style={style.labeltext}>Items Changed: </Text>
            </View>
            <ScrollView style={style.multiselectbox}>
              {this.state.items.map((item, index) => {
                let itemStyle =
                  item.selected === true ? style.itemSelected : style.item;
                return (
                  <TouchableOpacity
                    onPress={() => this.multiSelectHandler(index)}
                    key={item.value}
                    style={itemStyle}>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  topLogoView: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    height: 60,
  },
  boxContainer: {
    padding: 20,
    flexDirection: 'column',
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  box: {
    borderColor: '#000',
    backgroundColor: '#d2f3f4',
    borderWidth: 2,
    borderRadius: 6,
    height: 60,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  location: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#383196',
  },
  cameraBox: {
    height: 60,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  multiline: {
    width: 300,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  formContainer: {
    padding: 20,
    justifyContent: 'space-around',
  },
  labeltext: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  formRow: {
    marginBottom: 20,
  },
  preview: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  captureView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  capture: {
    position: 'absolute',
    bottom: 0,
  },
  multiselectbox: {
    backgroundColor: '#fff',
    height: 100,
    width: 300,
    borderRadius: 6,
  },
  item: {
    borderBottomWidth: 0.5,
    borderColor: '#000',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSelected: {
    borderBottomWidth: 0.5,
    borderColor: '#000',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default Screen7;
