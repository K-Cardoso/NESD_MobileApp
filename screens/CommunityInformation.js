import React, { Component} from 'react';
import { Linking, StatusBar, Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';

class CommunityInformation extends Component{

  static navigationOptions = {
    drawerIcon:(
      <Ionicons name="ios-people" size={25} color="dimgray"/>
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
                Community Information
            </Text>
          </Body>
        </Header>
        <Content padder style={{backgroundColor: '#3d87ff'}}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>
          <Text style={{fontSize: 36}}>
            {"\n"}
            “We have the opportunity to do better than we’ve done. Let’s try to get it right this time.”
          </Text>
          <Text style={{fontSize: 16}}>
            {"\n"}
            —Darryl Gaston, President of the Druid Hills Neighborhood Association
          </Text>

        </Content>
      </Container>
    )
  }
}
export default CommunityInformation;

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
