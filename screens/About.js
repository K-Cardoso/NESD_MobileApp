import React, { Component} from 'react';
import { Linking , StatusBar, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';
import { MaterialIcons,Entypo } from '@expo/vector-icons';

class About extends Component{

  static navigationOptions = {
    drawerIcon:(
      <MaterialIcons name="info-outline" size={25} color="dimgray"/>
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
            <Title>
                About
            </Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={styles.padder}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>

            <View>
              
              <Text style={styles.bodyHeader}>
                {"\n"}
                What is NESD?
              </Text>
              <Text style={styles.bodyText}>
                The North End Smart District (NESD) has been defined by 15 studies between 1993 
                and 2016 that identified the area as a future hotspot for development, attracting 
                new economic activities, particularly centered on technology and innovation sectors.
              </Text>
              <Text style={styles.bodyHeader}>
                {"\n"}
                Why Are We Here?
              </Text>
              <Text style={styles.bodyText}>
                The information here is intended to start a conversation about how we can leverage smart 
                city efforts to be a resource for the work you are already doing in your neighborhood, 
                place of business, place of investment, or project area and to find new opportunities to 
                collaborate together.
                {"\n"}
              </Text>
            <View style={{alignItems:'center'}}>
              <Image 
                style={{width: 298, height: 291}}
                source={require('./image/NESD_map.jpeg')} 
              />
            </View>
            <Text style={styles.bodyText}>
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
          </View>

          <Text style={styles.links}
                onPress={() => Linking.openURL('http://northendsmartdistrict.com/')}>
            North End Smart District Webpage
          </Text>

        </Content>
      </Container>
    )
  }
}

export default About;

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header:{
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    }),
  },
  links:{
    color: 'blue'
  },
  padder:{
    backgroundColor: '#3d87ff',
  },
  bodyText:{
    fontSize: 16,
    fontFamily: 'open-sans-regular',
    textAlign: 'center',
  },
  bodyHeader:{
    fontSize: 18,
    fontFamily: 'montserrat-bold',
    textAlign: 'center',
  },
});
