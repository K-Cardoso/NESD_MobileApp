import React, { Component} from 'react';
import { Linking , StatusBar, Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { StackNavigator } from "react-navigation";
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';
import { Ionicons,FontAwesome,Entypo } from '@expo/vector-icons';

class HomeScreen extends Component{

  static navigationOptions = {
    drawerIcon:(
      <Entypo name="home" size={25} color="dimgray"/>
    )
  }
  render(){
    return(
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent>
              <Entypo name="menu" size={25} onPress={() =>this.props.navigation.openDrawer()}/>
            </Button>
          </Left>
          <Body>
            <Text>
                Home
            </Text>
          </Body>
        </Header>
        <Content padder style={styles.padder}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>

          <Text style={styles.bodyText}>
            {"\n"}
            About North End Smart District Charlotte’s North End Smart District (NESD) is blazing a new path for development in the Queen City.
            {"\n"}
            The North End Smart District (NESD) has been defined by 15 studies between 1993 and 2016 that identified the area as 
              a future hotspot for development, attracting new economic activities, particularly centered on technology and innovation sectors.
            {"\n"}
            Designated in 2011 as the Applied Innovation Corridor, Community Investment Plan bond funding is earmarked for collaborative 
            economic development investments to improve the public realm. The NESD builds from that to focus on collaborations with the 
            community within the eight neighborhoods in the district.
            {"\n"}
            Charlotte’s smart city vision includes creating a district that acts as a hub for the city’s innovation engine. Smart Cities 
            optimize infrastructure to maximize services and opportunities for public good. Government, companies, universities, and 
            community partners collaborate to use innovation and data to increase economic opportunities, connectedness, efficiency, 
            and harness the potential of its people.
            {"\n"}
            The NESD’s innovative approach to Smart Cities is one that ensures residents have a seat at the table making decisions for 
            their community.
            {"\n"}
          </Text>

          <Text style={styles.links}
                onPress={() => Linking.openURL('http://northendsmartdistrict.com/')}>
            North End Smart District Webpage
          </Text>

        </Content>
      </Container>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: '#3d87ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header:{
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  },
  links:{
    color: 'blue'
  },
  padder:{
    backgroundColor: '#3d87ff'
  },
  bodyText:{
    textAlign: 'center',
    
  }
});
