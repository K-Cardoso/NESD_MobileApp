import React, { Component} from 'react';
import { Linking, StatusBar, Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
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
        <Header style={styles.Header}>
          <Left>
            <Button transparent>
              <Entypo name="menu" size={25} onPress={() =>this.props.navigation.openDrawer()}/>
            </Button>
          </Left>
          <Body>
            <Text style={{color:'black'}}>
                City Services
            </Text>
          </Body>
        </Header>
        <Content padder style={{backgroundColor: '#3d87ff'}}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>
          <Text style={{alignItems:'center', fontSize: 18, fontWeight: 'bold'}}>
            {"\n"}
            The NESD is a Vehicle To:
          </Text>
          <Text>
          {"\n"}
            -build strong relationships and preserve the community’s identity{"\n"}
            -create partnerships{"\n"}
            -increase equitable community engagement{"\n"}
            -use data analytics, innovation and lessons learned to inform institutional practices{"\n"}
            -replicate in other City projects throughout Charlotte{"\n"}
          </Text>
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
  body:{
    
  }
});
