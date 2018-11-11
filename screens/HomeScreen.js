import React, { Component} from 'react';
import { Alert, Button, AppRegistry, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { StackNavigator } from "react-navigation";

class HomeScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require('./image/logo.png')} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity >
            <View style={styles.button}>
              <Text style={styles.buttonText}>City Services</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Community Information</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Social Media</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default HomeScreen;

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
    }
  });
