import React, { Component} from 'react';
import { AsyncStorage, StatusBar, Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';
import axios from 'axios'
import { Ionicons,MaterialIcons, Entypo } from '@expo/vector-icons';

class CityServices extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      trashCollection: [],
      inputAddress: '',
      longitude: '',
      latitude: '',
      polling: [],
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

  getTrash() {
    let setLatLngState = this.state.items.map((val,key)=> {
      this.setState({
        longitude: val.lng,
        latitude: val.lat,
        
      })
    })
    const URL = `https://mcmap.org/api/intersect_point/v1/solid_waste/${this.state.longitude},${this.state.latitude}/4326?geom_column=the_geom&columns=jurisdiction,day,week,type`;
    
    try{
      fetch(URL)
        .then(res => res.json())
        .then(json => {
          this.setState({
            trashCollection: json,
          })
        })
        console.log(this.state.trashCollection);
    }
    catch (error){
      console.error(error);
    }
  }

  getPolling() {
    let setLatLngState = this.state.items.map((val,key)=> {
      this.setState({
        longitude: val.lng,
        latitude: val.lat,
        
      })
    })
    const URL = `https://mcmap.org/api/intersect_point/v1/voting_precincts/${this.state.longitude},${this.state.latitude}/4326?geom_column=the_geom&limit=1&columns=voting_precincts.cc, voting_precincts.school, polling_locations.name as label,polling_locations.address,voting_precincts.precno as precinct,st_x(st_transform(polling_locations.the_geom, 4326)) as lng, st_y(st_transform(polling_locations.the_geom, 4326)) as lat, ST_Distance(polling_locations.the_geom,ST_Transform(GeomFromText('POINT(${this.state.longitude} ${this.state.latitude})',4326), 2264)) as distance&join=polling_locations;voting_precincts.precno = polling_locations.precno`;
    
    try{
      fetch(URL)
        .then(res => res.json())
        .then(json => {
          this.setState({
            polling: json,
          })
        })
        console.log(this.state.polling);
    }
    catch (error){
      console.error(error);
    }
  }

  render(){
    let coordinates = this.state.items.map((val, key)=> {
      return <View key={key}>
        <Text> {val.lng} | {val.lat} </Text>
      </View>
    });

    let trash = this.state.trashCollection.map((val,key) =>{
      return <View key = {key}>
        <Text style={{fontSize: 16}}> {val.jurisdiction}          | {val.day} |       {val.week} |   {val.type}</Text>
      </View>
    });

    let poll = this.state.polling.map((val,key) =>{
      return <View key = {key}>
        <Text style={{fontSize: 16}}>
          <Text style={styles.pollingHead}>Location Name: </Text>{val.label} {"\n"}
          <Text style={styles.pollingHead}>Location Address: </Text>{val.address} {"\n"}
          <Text style={styles.pollingHead}>Precinct: </Text>{val.precinct} {"\n"}
          <Text style={styles.pollingHead}>Distance: </Text>{val.distance}ft
        </Text>
      </View>
    });

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
                City Services
            </Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={{backgroundColor: '#3d87ff'}}>

          <View style={{alignItems:'center'}}>
            <Image source={require('./image/logo.png')} />
          </View>
          
          <View>
            <Text style={styles.heading}>
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
              <Text style={styles.heading}>
                Garbage / Recycle / Yard Waste Collection Days
              </Text>
            </View>
            <TouchableOpacity
              style = {styles.button}
              underlayColor= "white"
              onPress={()=>this.getTrash()}
            >
            <Text
              style={styles.buttonText}>
              Garbage / Recycling / Yard Waste
            </Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.miniHead}>
                Jurisdiction    Day    Week   Type
              </Text>
              {trash}
              <Text>
                Orange: This Week {"\n"} 
                Green: Next Week {"\n"}
              </Text>
            </View>

            <View>
              <Text style={styles.heading}>
                Polling Locations
              </Text>
            </View>
            <TouchableOpacity
              style = {styles.button}
              underlayColor= "white"
              onPress={()=>this.getPolling()}
            >
            <Text
              style={styles.buttonText}>
              Get Polling Locations
            </Text>
            </TouchableOpacity>
            {poll}
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
  miniHead: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'open-sans-regular',
  },
  heading: {
    fontSize: 25,
    marginTop: 5,
    color: '#255600',
    alignSelf: 'center',
    fontFamily: 'montserrat-bold'
  },
  pollingHead: {
    fontFamily: 'open-sans-regular',
  }
});
