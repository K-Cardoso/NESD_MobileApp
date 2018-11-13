import React, { Component} from 'react';
import { Linking, Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons,MaterialIcons, Entypo } from '@expo/vector-icons';
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';

class CityServices extends Component{

  static navigationOptions = {
    drawerIcon:(
      <MaterialIcons name="location-city" size={25} color="dimgray"/>
    )
  }

  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Entypo name="menu" size={25} onPress={() =>this.props.navigation.openDrawer()}/>
            </Button>
          </Left>
          <Body>
            <Text>
                City Services
            </Text>
          </Body>
        </Header>
        <Content padder style={{backgroundColor: '#3d87ff'}}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>

        </Content>
      </Container>
    )
  }
}
export default CityServices;

const styles = StyleSheet.create({
  image:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 167,
    height: 44
  },
  links:{
    color: 'blue'
  },
  body:{
    
  }
});
