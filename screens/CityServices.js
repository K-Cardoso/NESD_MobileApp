import React, { Component} from 'react';
import { StatusBar, Alert, AppRegistry, Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import { Ionicons,MaterialIcons, Entypo } from '@expo/vector-icons';
import { Header, Left, Right, Icon, Body, Button, Title, Container, Content} from 'native-base';

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
    var address = "";
    var{ items } = this.state;

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
            <Text style={styles.title}>Please Enter Your Address</Text>
            <Text>By entering your address, we will be able to retrieve trash pickup and Polling locations{"\n"}
               
            </Text>
              {items.map(item => (
                <Text key={item.id}>
                  {item.lat} | {item.lng}
                </Text>
              ))}
            <TextInput
              style={styles.searchInput}
              onChangeText={inputAddress => this.setState({inputAddress})}
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
