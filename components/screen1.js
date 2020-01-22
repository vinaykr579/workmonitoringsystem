import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Screen1 = props => {
  return (
    <View>
      <View style={style.logoView}>
        <Image
          style={style.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>
      <View style={style.companyNameView}>
        <Text style={style.companyName}>
          SANROK ENTERPRISES FIRE MANAGEMENT
        </Text>
      </View>
      <View style={style.actionView}>
        <TouchableOpacity style={style.action} onPress={() => props.onPress()}>
          <Text style={style.actionText}>Installation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.action} onPress={() => props.onPress()}>
          <Text style={style.actionText}>Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  companyNameView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingLeft: 25,
    paddingRight: 25,
  },
  logo: {
    height: 80,
  },
  companyName: {
    color: '#383196',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  actionView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 300,
    flexDirection: 'row',
  },
  action: {
    height: 80,
    backgroundColor: '#d2f3f4',
    width: 120,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: '#383196',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Screen1;
