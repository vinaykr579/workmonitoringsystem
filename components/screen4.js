import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Picker,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RNCamera} from 'react-native-camera';

class Screen4 extends Component {
  state = {
    cameraView: false,
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
        <View style={style.textView}>
          <Text style={style.topText}>FDS-SA/LOCATION</Text>
        </View>
        <View style={style.addCoachView}>
          <TouchableOpacity
            style={style.addNewCoachBtn}
            onPress={() => this.props.onPress()}>
            <Text style={style.addCoachBtnText}>+</Text>
          </TouchableOpacity>
          <View style={style.addCoachTextView}>
            <Text style={style.addCoachText}>Add new coach</Text>
          </View>
        </View>
        <View style={style.crntDateTimeView}>
          <Text style={style.crntDateTime}>Current Date/Time</Text>
        </View>
        <View style={style.selectCoachView}>
          <View style={style.selectCoach}>
            <Text style={style.selectCoachText}>Select Coach for Status: </Text>
          </View>
          <View>
            <Picker
              selectedValue={''}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => true}>
              <Picker.Item label="Select" value="" />
            </Picker>
          </View>
        </View>
        <View>
          <View style={style.checkRow}>
            <TouchableOpacity
              style={style.checkbox}
              onPress={() => this.props.onPress()}
            />
            <View style={style.checkTextBox}>
              <Text style={style.checkText}> Coach Allotted</Text>
            </View>
          </View>
          <View style={style.checkRow}>
            <TouchableOpacity
              style={style.checkbox}
              onPress={() => this.props.onPress()}
            />
            <View style={style.checkTextBox}>
              <Text style={style.checkText}> Fitment Ongoing</Text>
            </View>
          </View>
          <View style={style.checkRow}>
            <TouchableOpacity
              style={style.checkbox}
              onPress={() => this.props.onPress()}
            />
            <View style={style.checkTextBox}>
              <Text style={style.checkText}> Fitment Completed</Text>
            </View>
          </View>
          <View style={style.checkRow}>
            <TouchableOpacity
              style={style.checkbox}
              onPress={() => this.props.onPress()}
            />
            <View style={style.checkTextBox}>
              <Text style={style.checkText}> QA Done</Text>
            </View>
          </View>
          <View style={style.checkRow}>
            <TouchableOpacity
              style={style.checkbox}
              onPress={() => this.props.onPress()}
            />
            <View style={style.checkTextBox}>
              <Text style={style.checkText}>
                Inspection Certificate Received
              </Text>
            </View>
            {!this.state.cameraView && this.cameraHandler()}
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
    marginBottom: 10,
  },
  logo: {
    height: 60,
  },
  textView: {
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#383196',
    textAlign: 'center',
  },
  addCoachView: {
    height: 40,
    flexDirection: 'row-reverse',
  },
  addCoachTextView: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  addNewCoachBtn: {
    borderColor: '#000',
    backgroundColor: '#d2f3f4',
    borderWidth: 2,
    borderRadius: 6,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
  },
  addCoachBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#383196',
  },
  addCoachText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  crntDateTimeView: {
    height: 25,
    paddingRight: 10,
  },
  crntDateTime: {
    fontSize: 14,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  selectCoachView: {
    flexDirection: 'row',
    height: 50,
  },
  picker: {
    height: 30,
    width: 100,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  selectCoach: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectCoachText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 14,
  },
  checkbox: {
    height: 40,
    width: 40,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: 'green',
  },
  checkRow: {
    flexDirection: 'row',
    margin: 10,
  },
  checkTextBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  checkText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 14,
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
});

export default Screen4;
