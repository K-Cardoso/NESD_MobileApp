import React, { Component} from 'react';
import { Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons,MaterialIcons, Entypo } from '@expo/vector-icons';
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';

class CityServices extends Component{

  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <MaterialIcons name="location-city" style={{color: tintColor}}/>
    )
  }

  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Entypo name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
            </Button>
          </Left>
          <Body>
            <Text>
                City Services
            </Text>
          </Body>
        </Header>
        <Content padder style={{backgroundColor: '#3d87ff'}}>

          <View style={styles.image}>
            <Image source={require('./image/logo.png')} />
          </View>

          <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://google.com')}>
            Google
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
      width: 167,
      height: 44
    },
});
