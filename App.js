import React from 'react';
import { Alert, Button, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import CityServices from './screens/CityServices'
import CommunityInformation from './screens/CommunityInformation'
import SocialMedia from './screens/SocialMedia'

export default class app extends React.Component {
  render() {
    return (
      <AppDrawer />
    );
  }
}

const AppDrawer = createDrawerNavigator({
  Home:{
    screen:HomeScreen
  },
  City:{
    screen:CityServices
  },
  Community:{
    screen:CommunityInformation
  },
  Social:{
    screen:SocialMedia
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d87ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#e2edff'
  },
  buttonText: {
    padding: 20,
    color: 'black'
  },
  image:{
    alignItems: 'center',
    width: 167,
    height: 44
  }
});
