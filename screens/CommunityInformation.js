import React, { Component} from 'react';
import { Linking , StatusBar, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, Left, Icon, Body, Button, Title, Container, Content} from 'native-base';
import { Ionicons,Entypo } from '@expo/vector-icons';

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
              <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
            </Button>
          </Left>
          <Body>
            <Title>
                Community Information
            </Title>
          </Body>
        </Header>
        <Content padder style={{backgroundColor: '#3d87ff'}}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>
          <Text style={styles.bodyHeader}>
            {"\n"}
            “We have the opportunity to do better than we’ve done. Let’s try to get it right this time.”
          </Text>
          <Text style={styles.bodyText}>
            {"\n"}
            —Darryl Gaston, President of the Druid Hills Neighborhood Association
          </Text>

          <Text style={styles.bodyHeader}>
            {"\n"}North End Smart District{"\n"}
          </Text>
          <Text style={styles.links}
                onPress={() => Linking.openURL('https://www.facebook.com/pg/NorthEndSmartDistrict/events/?ref=page_internal')}>
            Facebook Page Events{"\n"}
          </Text>

          <Text style={styles.bodyHeader}>
            Camp North End{"\n"}
          </Text>
          <Text style={styles.links}
                onPress={() => Linking.openURL('https://www.facebook.com/pg/campnorthend/events/?ref=page_internal')}>
            Facebook Page Events{"\n"}
          </Text>

        </Content>
      </Container>
    )
  }
}
export default CommunityInformation;

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header:{
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    }),
  },
  links:{
    color: 'blue'
  },
  padder:{
    backgroundColor: '#3d87ff',
  },
  bodyText:{
    fontSize: 16,
    fontFamily: 'open-sans-regular',
    textAlign: 'center',
  },
  bodyHeader:{
    fontSize: 18,
    fontFamily: 'montserrat-bold',
    textAlign: 'center',
  },
});
