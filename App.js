import React from 'react';
import { Alert, Button, AppRegistry, Image, Platform, 
  StyleSheet, Text, TouchableHighlight, TouchableOpacity, 
  TouchableNativeFeedback, TouchableWithoutFeedback, View,
  SafeAreaView, ScrollView, Dimensions, StatusBar } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import CityServices from './screens/CityServices'
import CommunityInformation from './screens/CommunityInformation'
import SocialMedia from './screens/SocialMedia'

import TrashRecycle from './screens/TrashRecycle'


export default class app extends React.Component {
  render() {
    return (
      <AppDrawer />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height:100, backgroundColor: 'grey', alignItems:'center'}}>
      <Image source={require('./screens/image/logo.png')} style={{marginTop:40, marginBottom: 10}} />
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawer = createDrawerNavigator({
  Home:{
    screen:HomeScreen
  },
  City:{
    screen:CityServices
  },
  Trash:{
    screen:TrashRecycle
  },
  Community:{
    screen:CommunityInformation
  },
  Social:{
    screen:SocialMedia
  }
}, {
  contentComponent: CustomDrawerComponent,
  contentOptions:{
    activeTintColor: 'green'
  }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d87ff',
    alignItems: 'center',
    justifyContent: 'center',

    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  },
});
