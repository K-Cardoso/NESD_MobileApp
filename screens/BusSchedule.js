import React, { Component} from 'react';
import { Linking , StatusBar, Alert, AppRegistry, Image, Platform, StyleSheet, Text, View } from 'react-native';
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';
import { Ionicons,FontAwesome, Entypo } from '@expo/vector-icons';

class BusSchedule extends Component{
  static navigationOptions = {
      drawerIcon: ({tintColor}) => (
          <FontAwesome name="long-arrow-right" size={25} color="dimgray"/>
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
          <Text style={{color:'white'}}>
                Bus Schedule
            </Text>
          </Body>
        </Header>
        <Content padder style={styles.padder}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>

          <Text style={styles.bodyText}>
            {"\n"}
            filler text
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

export default BusSchedule;

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
