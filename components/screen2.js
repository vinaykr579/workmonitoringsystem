import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const Screen2 = props => {
  return (
    <View>
      <View style={style.topLogoView}>
        <Image
          style={style.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>
      <View style={style.textView}>
        <Text style={style.topText}>SITES/LOCATIONS</Text>
      </View>
      <View style={style.locationContainer}>
        <View style={style.locationRow}>
          <TouchableOpacity
            style={style.locationBox}
            onPress={() => props.onPress()}>
            <Text style={style.location}>RCF</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.locationBox}
            onPress={() => props.onPress()}>
            <Text style={style.location}>MCF</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.locationBox}
            onPress={() => props.onPress()}>
            <Text style={style.location}>ICF</Text>
          </TouchableOpacity>
        </View>
        <View style={style.locationRow}>
          <TouchableOpacity
            style={style.locationBox}
            onPress={() => props.onPress()}>
            <Text style={style.location}>KGP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.locationBox}
            onPress={() => props.onPress()}>
            <Text style={style.location}>DLT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.locationBox}
            onPress={() => props.onPress()}>
            <Text style={style.location}>+</Text>
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
  },
  logo: {
    height: 60,
  },
  textView: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#383196',
    textAlign: 'center',
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
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#383196',
  },
});

export default Screen2;
