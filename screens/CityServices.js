import React, { Component} from 'react';
import { AsyncStorage, StatusBar, Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import { Ionicons,MaterialIcons, Entypo } from '@expo/vector-icons';
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';
import TrashRecycle from './TrashRecycle'
import PollingLocation from './PollingLocation'

class CityServices extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputAddress: '',
      longitude: '',
      latitude: '',
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
            latitude: json.lat,
            longitude: json.lng,
          })
        })
    }
    catch (error){
      console.error(error);
    }
  }

  getTrash(){
    
    var lng = this.state.longitude;
    var lat = this.state.latitude;
    console.log(lng, lat);
    const URL = `https://mcmap.org/api/intersect_point/v1/solid_waste/${lng},${lat}/4326?geom_column=the_geom&columns=jurisdiction,day,week,type`;
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
      return (<View key={key}>
        <Text>{val.lng} | {val.lat} {propLat = val.lat} {propLng = val.lng} </Text>
      </View>)
      
    });

    let trash = this.state.items.map((val,key) =>{
      return(<View key = {key}>
        <Text>
          {val.day} | {val.week}
        </Text>
      </View>)
    })

    return(
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent>
              <Entypo name="menu" size={25} onPress={() =>this.props.navigation.openDrawer()}/>
            </Button>
          </Left>
          <Body>
            <Text style={{color:'black'}}>
                City Services
            </Text>
          </Body>
        </Header>
        <Content padder style={{backgroundColor: '#3d87ff'}}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>
          
          <View>
            <Text style={styles.title}>
              Please Enter Your Address
            </Text>
            <Text>
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
              {trash}
            </View>
            <TouchableOpacity
              style = {styles.button}
              underlayColor= "white"
              onPress={()=>this.getTrash()}
            >
            <Text
              style={styles.buttonText}>
              SEARCH
            </Text>
            </TouchableOpacity>
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
  HeaderText:{
    ...Platform.select({
      android: {
        color:'white'
      },
      ios: {
        color:'black'
      }
    })
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
  title: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10
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
