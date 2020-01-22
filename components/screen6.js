import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Picker,
} from 'react-native';

const Screen6 = props => {
  return (
    <View>
      <View style={style.topLogoView}>
        <Image
          style={style.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>
      <View style={style.textView}>
        <Text style={style.topText}>SERVICE</Text>
      </View>
      <View style={style.formConatiner}>
        <View style={style.row}>
          <View style={style.label}>
            <Text style={style.labletext}>Select Location:</Text>
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
        <View style={style.row}>
          <View style={style.label}>
            <Text style={style.labletext}>Service Engg. Lead:</Text>
          </View>
          <View>
            <TextInput style={style.textinput} />
          </View>
        </View>
        <View style={style.row}>
          <View style={style.label}>
            <Text style={style.labletext}>Service Engg. Supervisor 1:</Text>
          </View>
          <View>
            <TextInput style={style.textinput} />
          </View>
        </View>
        <View style={style.row}>
          <View style={style.label}>
            <Text style={style.labletext}>Service Engg. Supervisor 2:</Text>
          </View>
          <View>
            <TextInput style={style.textinput} />
          </View>
        </View>
        <View style={style.row}>
          <View style={style.btnContainer}>
            <TouchableOpacity style={style.btn} onPress={() => props.onPress()}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

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
  formConatiner: {
    padding: 20,
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  label: {
    justifyContent: 'center',
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  labletext: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textinput: {
    height: 40,
    backgroundColor: 'white',
    width: 150,
  },
  picker: {
    height: 40,
    width: 150,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 40,
    width: 150,
    backgroundColor: 'green',
    borderColor: '#000',
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen6;
