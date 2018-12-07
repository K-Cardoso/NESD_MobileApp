import React, { Component} from 'react';
import { Linking , StatusBar, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, Left, Icon, Body, Button, Title, Container, Content} from 'native-base';
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
              <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
            </Button>
          </Left>
          <Body>
            <Title>
                Home
            </Title>
          </Body>
        </Header>
        <Content padder style={styles.padder}>

          <View>
            <Text style={styles.bodyHeader}>
              Welcome to the North End Smart District Mobile App!
              {"\n"}
            </Text>

            <TouchableOpacity style={styles.imageView} 
                onPress={() => Linking.openURL('http://northendsmartdistrict.com/')}>
              <Image style={styles.imageStyle} source={require('./image/logo.png')} />
            </TouchableOpacity>

            <Text style={styles.bodyText}>
              {"\n"}
              The North End Smart District mobile application is a cross-platform mobile 
              app showcasing community events, information, and municipal services all 
              collectively presented in a clear and easy to use app.
            </Text>
          </View>

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
  imageView:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle:{
    width: 240,
    height: 80,
    resizeMode: 'contain',
  }
});
