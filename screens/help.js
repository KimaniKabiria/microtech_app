import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.titleText}>Help Center</Text>
    </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.boldText}>Welcome to Microtech App Help Desk.</Text>
        <Text style={styles.text}>
        Thank you for purchasing this product. This section is here to help you connect
         and send text to your display.
        </Text>
        <Text style={styles.text}>
        Let’s start. Follow these steps:
        </Text>
        <Text>1. Connect to the wifi network with the name of the display. Input the provided 
            password to connect to the display.
        </Text>
        <Text>2. After connecting and opening this app. Use the provided buttons
            to control the display.
        </Text>
        <Text>3. The display will update with the new changes.</Text>
        <Text>Easy right? Its fast and simple.        </Text>
        <Text style={styles.text}>
        If the above method does not work, do the following:
        </Text>
        <Text>1.	Connect to the wifi network with the name of the display. Input the 
            provided password to connect to the display.</Text>
        <Text>2.	Open your phone browser </Text>
        <Text>3.	Key in “192.168.254.1” where you usually input web addresses 
        like www.google.com
        </Text>
        <Text>4.	A page will open. It looks like the app.</Text>
        <Text>5. Use the buttons in this page to control your
            display.
        </Text><Text style={styles.text}>
        If all the above steps do not work, please contact us.
        Our contacts are at the about us page.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginTop:20,
    marginHorizontal: 20,
  },
  text: {
    marginTop:20,
    fontSize: 14,
  },
  boldText:{
    fontWeight: 'bold',
    fontSize: 16,
  },
  header:{
      height: 50,
      paddingTop: 15,
      backgroundColor: 'skyblue',
      alignContent: 'center'
  },
  titleText: {
      color: 'white',
      fontWeight: 'bold',
      marginLeft: 20,
      fontSize: 20
  },
});