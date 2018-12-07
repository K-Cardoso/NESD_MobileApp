import React, { Component} from 'react';
import { Linking , StatusBar, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, Left, Icon, Body, Button, Title, Container, Content} from 'native-base';
import { Ionicons,FontAwesome,Entypo } from '@expo/vector-icons';

import { getLocation } from '../src/services/fetchLocation';

export default class TrashRecycle extends Component{
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
              <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
            </Button>
          </Left>
          <Body>
            <Title>
                Trash & Recycling
            </Title>
          </Body>
        </Header>
        <Content padder style={styles.padder}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>

          <Text style={styles.bodyText}>
            {"\n"}
            {this.props.latitude}  {this.props.longitude}
            {"\n"}
          </Text>

          <Text style={styles.links}
                onPress={() => Linking.openURL('https://mcmap.org/geoportal/')}>
            Mecklenburg County GeoPortal Site
          </Text>

        </Content>
      </Container>
    )
  }
}

function getTrashDay() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Test Data
// 3613 DRIFTWOOD DR, CHARLOTTE NC 28205 (Random address)
// -80.7635,35.2085

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
