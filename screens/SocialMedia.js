import React, { Component} from 'react';
import { Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';

class SocialMedia extends Component{

  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <MaterialCommunityIcons name="account" style={{color: tintColor}}/>
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
                Social Media
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
export default SocialMedia;

const styles = StyleSheet.create({
    image:{
      alignItems: 'center',
      width: 167,
      height: 44
    }
});
