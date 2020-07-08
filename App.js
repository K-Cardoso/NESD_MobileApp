import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Image, Platform, View, SafeAreaView, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerItems, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

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
  
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({fontLoaded:true})
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <NavigationContainer>
        <AppDrawer_v2 />
      </NavigationContainer>
    );
  }
}
// -----------------------------------------------
// React Navigation v4 - custom drawer content
// -----------------------------------------------
// const CustomDrawerComponent = (props) => (
//   <SafeAreaView style={{flex: 1}}>
//     <View style={{height:110, backgroundColor: 'white', alignItems:'center'}}>
//       <Image source={require('./screens/image/sideLogo.png')} 
//         style={{marginTop:30,marginBottom:30,width:150,height:75}} />
//     </View>
//     <ScrollView>
//       <DrawerItems {...props}/>
//     </ScrollView>
//   </SafeAreaView>
// )

// const AppDrawer = createDrawerNavigator({
//   Home:{
//     screen:HomeScreen
//   },
//   City:{
//     screen:CityServices
//   },
//   BusSchedule:{
//     screen:BusSchedule
//   },
//   About:{
//     screen:About
//   },
//   Community:{
//     screen:CommunityInformation
//   },
//   CMSCalendar:{
//     screen:CMSSchoolCalendar
//   },
//   Social:{
//     screen:SocialMedia
//   }
// }, {
//   contentComponent: CustomDrawerComponent,
//   contentOptions:{
//     activeTintColor: 'green'
//   }
// })

// -----------------------------------------------
// React Navigation v5 - custom drawer content
// -----------------------------------------------
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Image source={require('./screens/image/sideLogo.png')}
          style={{marginTop:30,marginBottom:30,width:150,height:75}} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function AppDrawer_v2() {
  return(
    <Drawer.Navigator 
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: 'green'
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="City" component={CityServices} />
      <Drawer.Screen name="BusSchedule" component={BusSchedule} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Community" component={CommunityInformation} />
      <Drawer.Screen name="CMSCalendar" component={CMSSchoolCalendar} />
      <Drawer.Screen name="Social" component={SocialMedia} />
    </Drawer.Navigator>
  );
}