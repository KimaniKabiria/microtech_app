import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.boldText}>We are MicroTech Digital Solutions</Text>
        <Text style={styles.text}>
        Call: +254 715 800 843
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    marginTop:100,
    marginHorizontal: 20,
  },
  text: {
    marginTop:20,
    fontSize: 24,
    textAlign: 'center',
  },
  boldText:{
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
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
      fontSize: 20,
      textAlign: 'center',
  },
});