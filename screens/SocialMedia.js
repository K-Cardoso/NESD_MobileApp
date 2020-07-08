import React, { Component} from 'react';
import { Linking , StatusBar, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, Left, Right, Body, Button, Title, Container, Content } from 'native-base';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

class SocialMedia extends Component{

  static navigationOptions = {
    drawerIcon:(
      <MaterialCommunityIcons name="account" size={25} color="dimgray"/>
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
                Social Media
            </Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={{backgroundColor: '#3d87ff'}}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>
          <View>
            <Text style={styles.bodyHeader}>
              {"\n"}North End Smart District{"\n"}
            </Text>

            <TouchableOpacity
              style = {styles.button}
              underlayColor= "white"
              onPress={() => Linking.openURL('https://www.facebook.com/NorthEndSmartDistrict/')}
            >
            <Text
              style={styles.buttonText}>
              Facebook
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style = {styles.button}
              underlayColor= "white"
              onPress={() => Linking.openURL('https://www.facebook.com/pg/NorthEndSmartDistrict/events/?ref=page_internal')}
            >
            <Text
              style={styles.buttonText}>
              Facebook Page Events
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style = {styles.button}
              underlayColor= "white"
              onPress={() => Linking.openURL('https://www.instagram.com/NorthEndSmartDistrict/')}
            >
            <Text
              style={styles.buttonText}>
              Instagram
            </Text>
            </TouchableOpacity>

            <Text style={styles.bodyHeader}>
              Camp North End{"\n"}
            </Text>

            <TouchableOpacity
              style = {styles.button}
              underlayColor= "white"
              onPress={() => Linking.openURL('https://www.facebook.com/campnorthend/')}
            >
            <Text
              style={styles.buttonText}>
              Facebook
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = {styles.button}
              underlayColor= "white"
              onPress={() => Linking.openURL('https://www.instagram.com/campnorthend/')}
            >
            <Text
              style={styles.buttonText}>
              Instagram
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = {styles.button}
              underlayColor= "white"
              onPress={() => Linking.openURL('https://twitter.com/campnorthend')}
            >
            <Text
              style={styles.buttonText}>
              Twitter
            </Text>
            </TouchableOpacity>
          </View>

        </Content>
      </Container>
    )
  }
}
export default SocialMedia;

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
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  }
});

