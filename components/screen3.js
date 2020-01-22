import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const Screen3 = props => {
  return (
    <View>
      <View style={style.topLogoView}>
        <Image
          style={style.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>
      <View style={style.locationContainer}>
        <View style={style.locationRow}>
          <TouchableOpacity
            style={style.locationBox}
            onPress={() => props.onPress()}>
            <Text style={style.location}>FDS SA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.locationBox}
            onPress={() => props.onPress()}>
            <Text style={style.location}>FDS RAKE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.locationBox}
            onPress={() => props.onPress()}>
            <Text style={style.location}>FDASS</Text>
          </TouchableOpacity>
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
  locationContainer: {
    padding: 20,
    flexDirection: 'column',
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  locationBox: {
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
});

export default Screen3;
