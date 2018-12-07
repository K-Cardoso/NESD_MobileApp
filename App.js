import React from 'react';
import { Font } from 'expo';
import { Image, Platform, View, SafeAreaView, ScrollView } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import CityServices from './screens/CityServices'
import CommunityInformation from './screens/CommunityInformation'
import About from './screens/About'
import SocialMedia from './screens/SocialMedia'
import BusSchedule from './screens/BusSchedule'
import CMSSchoolCalendar from './screens/CMSSchoolCalendar'

export default class app extends React.Component {
  // Loading Roboto Medium as system fonts
  state={
    fontLoaded: false
  }
  
  async componentWillMount(){
    await Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({fontLoaded:true})
  }

  render() {
    if (!this.state.fontLoaded){
      return <Expo.AppLoading />;
    }
    return (
      <AppDrawer />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height:110, backgroundColor: 'white', alignItems:'center'}}>
      <Image source={require('./screens/image/sideLogo.png')} 
        style={{marginTop:30,marginBottom:30,width:150,height:75}} />
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
  BusSchedule:{
    screen:BusSchedule
  },
  About:{
    screen:About
  },
  Community:{
    screen:CommunityInformation
  },
  CMSCalendar:{
    screen:CMSSchoolCalendar
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