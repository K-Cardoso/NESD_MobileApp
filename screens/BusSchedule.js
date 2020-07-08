import React, { Component} from 'react';
import { StatusBar, Platform, StyleSheet, View, WebView  } from 'react-native';
import { Header, Left, Right, Body, Button, Title, Container } from 'native-base';
import { FontAwesome, Entypo } from '@expo/vector-icons';

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
            <Title>
                Bus Schedule
            </Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.padder}>
          <WebView useWebKit={true} source={{uri: 'https://charlottenc.gov/cats/bus/routes/Pages/default.aspx'}} />
        </View>
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
    backgroundColor: '#3d87ff',
    flex: 1
  },
  bodyText:{
    textAlign: 'center',
    
  }
});
