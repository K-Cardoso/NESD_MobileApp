import React, { Component} from 'react';
import { Linking , StatusBar, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, Left, Icon, Body, Button, Title, Container, Content} from 'native-base';
import { Ionicons,FontAwesome,Entypo } from '@expo/vector-icons';

class CMSSchoolCalendar extends Component{
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
                CMS
            </Title>
          </Body>
        </Header>
        <Content padder style={styles.padder}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>
          <Text>{"\n"}</Text>
          <View style={{alignItems:'center'}}>
            <Image 
                style={{width:425, height: 350 }} 
                source={require('./image/CMS20182019.png')}
            />
          </View>
          
          <Text style={styles.links}
                onPress={() => Linking.openURL('http://www.cms.k12.nc.us/mediaroom/calendars/Pages/Calendars.aspx')}>
            {"\n"}
            CMS Calendar Page
          </Text>

          <Text style={styles.links}
                onPress={() => Linking.openURL('http://www.cms.k12.nc.us/_layouts/ical/calendarfeed.ashx')}>
            {"\n"}
            CMS iCal Calendar Link
          </Text>


        </Content>
      </Container>
    )
  }
}

export default CMSSchoolCalendar;

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
    color: 'blue',
    fontSize: 18
  },
  padder:{
    backgroundColor: '#3d87ff'
  },
  bodyText:{
    textAlign: 'center',
    
  }
});
