import React, { Component} from 'react';
import { Alert, Button, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';


class CityServicesInfo extends Component{
    render(){
            return(
                <View style={styles.container}>
                    <text>
                        Sample text
                    </text>
                </View>
            )
    }
}
export default CityServices;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3d87ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      margin: 20
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#e2edff'
    },
    buttonText: {
      padding: 20,
      color: 'black'
    },
    image:{
      alignItems: 'center',
      width: 167,
      height: 44
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
      instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
      tabIcon: {
        width: 16,
        height: 16,
      },
  });
