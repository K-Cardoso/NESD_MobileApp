import React, { Component} from 'react';
import { AsyncStorage, StatusBar, Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import { Header, Left, Icon, Body, Button, Title, Container, Content} from 'native-base';
import { Ionicons,MaterialIcons, Entypo } from '@expo/vector-icons';
import TrashRecycle from './TrashRecycle'
import PollingLocation from './PollingLocation'

class CityServices extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputAddress: '',
    }
  }
  static navigationOptions = {
    drawerIcon:(
      <MaterialIcons name="location-city" size={25} color="dimgray"/>
    )
  }

  updateAddress(){
    var address = this.state.inputAddress;
    const URL = `https://mcmap.org/api/search/v1/${address}?tables=address`;
    try{
      fetch(URL)
        .then(res => res.json())
        .then(json => {
          this.setState({
            items: json,

          })
        })
    }
    catch (error){
      console.error(error);
    }
  }

  render(){
    var propLat = '';
    var propLng = '';

    let coordinates = this.state.items.map((val, key)=> {
      return <View key={key}>
        <Text>{val.lng} | {val.lat} {propLat = val.lat} {propLng = val.lng}</Text>
      </View>
    });

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
                City Services
            </Title>
          </Body>
        </Header>
        <Content padder style={{backgroundColor: '#3d87ff'}}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>
          
          <View>
            <Text style={styles.bodyHeader}>
              Please Enter Your Address
            </Text>
            <Text style={styles.bodyText}>
              By entering your address, we will be able to retrieve trash pickup and Polling locations{"\n"}
            </Text>
            {coordinates}
              
              
            <TextInput
              style={styles.searchInput}
              value = {this.state.inputAddress}
              onChangeText = {inputAddress => this.setState({inputAddress: inputAddress})}
            />
            <TouchableOpacity
              style = {styles.button}
              underlayColor= "white"
              onPress={()=>this.updateAddress()}
            >
            <Text
              style={styles.buttonText}>
              SEARCH
            </Text>
            </TouchableOpacity>

            <View>
              <Text>
                Trash Days
              </Text>
            </View>
        </View>
        </Content>
      </Container>
    )
    
  }
}
export default CityServices;

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
    }),
  },
  links:{
    color: 'blue'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  bodyHeader: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'montserrat-bold',
  },
  bodyText:{
    fontSize: 16,
    fontFamily: 'open-sans-regular',
    textAlign: 'center',
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
});
