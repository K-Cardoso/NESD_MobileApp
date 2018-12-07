import React, { Component} from 'react';
import { Linking , StatusBar, Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
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
          <Body style={{flex: 1}}>
            <Title style={styles.HeaderText}>
                Home
            </Title>
          </Body>
        </Header>
        <Content padder style={styles.padder}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>

            <View style={styles.bodyText}>
              <Text>
                {"\n"}
                The North End Smart District (NESD) has been defined by 15 studies between 1993 
                and 2016 that identified the area as a future hotspot for development, attracting 
                new economic activities, particularly centered on technology and innovation sectors.
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

export default HomeScreen;

const styles = StyleSheet.create({
  Container:{
    flex: 1
  },
  Header:{
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  },
  HeaderText:{
    ...Platform.select({
      android: {
        color:'white'
      },
      ios: {
        color:'black'
      }
    })
  },
  links:{
    color: 'blue'
  },
  padder:{
    backgroundColor: '#3d87ff',
  },
  bodyText:{
    textAlign: 'center',
  },
  head1:{
    fontSize: 18,
    fontWeight: 'bold'
  }
});
