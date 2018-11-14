import React, { Component} from 'react';
import { Linking, StatusBar, Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';

class SocialMedia extends Component{

  static navigationOptions = {
    drawerIcon:(
      <MaterialCommunityIcons name="account" size={25} color="dimgray"/>
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
            <Text>
                Social Media
            </Text>
          </Body>
        </Header>
        <Content padder style={{backgroundColor: '#3d87ff'}}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>

          <Text style={styles.body}>
            <Text style={styles.title}>
              {"\n"}North End Smart District{"\n"}
            </Text>
            <Text style={styles.links}
                  onPress={() => Linking.openURL('https://www.facebook.com/NorthEndSmartDistrict/')}>
              Facebook{"\n"}
            </Text>
            <Text style={styles.links}
                  onPress={() => Linking.openURL('https://www.instagram.com/NorthEndSmartDistrict/')}>
              Instagram{"\n"}
            </Text>

            <Text style={styles.title}>
              Camp North End{"\n"}
            </Text>

            <Text style={styles.links}
                  onPress={() => Linking.openURL('https://www.facebook.com/campnorthend/')}>
              Facebook{"\n"}
            </Text>
            <Text style={styles.links}
                  onPress={() => Linking.openURL('https://www.instagram.com/campnorthend/')}>
              Instagram{"\n"}
            </Text>
            <Text style={styles.links}
                  onPress={() => Linking.openURL('https://twitter.com/campnorthend')}>
              Twitter{"\n"}
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
  title:{
    fontSize: 18
  }
});
