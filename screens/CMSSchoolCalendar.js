import React, { Component} from 'react';
import { Linking , StatusBar, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';
import { Ionicons,FontAwesome,Entypo } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class CMSSchoolCalendar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    }
  }
  static navigationOptions = {
      drawerIcon: ({tintColor}) => (
          <FontAwesome name="long-arrow-right" size={25} color="dimgray"/>
      )
  }
  render(){
    var date = '';

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
                CMS School Calendar
            </Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={styles.padder}>
          <Calendar
            markedDates={{
              '2018-12-19': {startingDay: true, color: 'green'},
              '2019-01-02': {selected: true, endingDay: true, color: 'green'},
              '2019-07-04': {marked: true, selectedColor: 'green'},
              '2019-10-09': {marked: true, selectedColor: 'green'},
              '2019-10-28': {marked: true, selectedColor: 'green'},
              '2019-10-25': {marked: true, selectedColor: 'green'},
              '2019-12-23': {startingDay: true, color: 'green'},
              '2020-01-03': {selected: true, endingDay: true, color: 'green'},
            }}
            theme={{
              calendarBackground: '#3d87ff',
              textMonthFontWeight: 'bold',
              textDayFontSize: 18,
              textMonthFontSize: 17,
              textDayHeaderFontSize: 18
            }}
            onDayPress={(day) => 
              this.setState({
                date: day
              })
            }
          />
          <View style={styles.calendarTextView}>
            <Text style={styles.calendarText}>
              {this.state.date.month} / {this.state.date.day} / {this.state.date.year}
            </Text>
          </View>
        </Content>
      </Container>
    )
  }
}

export default CMSSchoolCalendar;

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
  },
  calendarText:{
    fontFamily: 'montserrat-bold',
    fontSize: 30,
  },
  calendarTextView:{
    alignItems: 'center',
    height: 800,
    marginTop: 50
  }
});
