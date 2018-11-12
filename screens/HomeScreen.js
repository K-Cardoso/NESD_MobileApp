import React, { Component} from 'react';
import { Linking , Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { StackNavigator } from "react-navigation";
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';
import { Ionicons,FontAwesome,Entypo } from '@expo/vector-icons';

class HomeScreen extends Component{

  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Entypo name="home" style={{color: tintColor}}/>
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
                Home
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

export default HomeScreen;

const styles = StyleSheet.create({
    image:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 167,
      height: 44
    },
  });
