import React, { Component} from 'react';
import { Linking, Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
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

          <Text style={styles.links}
                onPress={() => Linking.openURL('https://google.com')}>
            Google
          </Text>

          <Text style={styles.body}>
            North End Smart District
            
            <Text style={styles.links}
                  onPress={() => Linking.openURL('https://www.facebook.com/NorthEndSmartDistrict/')}>
              Facebook
            </Text>
            <Text style={styles.links}
                  onPress={() => Linking.openURL('https://www.instagram.com/NorthEndSmartDistrict/')}>
              Instagram
            </Text>
            
            Camp North End
            
            <Text style={styles.links}
                  onPress={() => Linking.openURL('https://www.facebook.com/campnorthend/')}>
              Facebook
            </Text>
            <Text style={styles.links}
                  onPress={() => Linking.openURL('https://www.instagram.com/campnorthend/')}>
              Instagram
            </Text>
            <Text style={styles.links}
                  onPress={() => Linking.openURL('https://twitter.com/campnorthend')}>
              Twitter
            </Text>
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
