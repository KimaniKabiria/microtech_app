import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.introText}>We are:</Text>
      <Image
        style={{ width: 300, height: 56 }}
        source = {require('../assets/splash.png')}
      />
      <Text style={{padding: 10}}>You can contact us through the following:</Text>
      <View style={styles.contact}>
        <FontAwesome name="phone-square" size={24} style={styles.contactIcon} />
        <Text style={styles.contactText}>0738 252 333</Text>
      </View><View style={styles.contact}>
        <FontAwesome name="phone-square" size={24} style={styles.contactIcon} />
        <Text style={styles.contactText}>0715 800 843</Text>
      </View>
      <View style={styles.contact}>
        <Ionicons name="md-mail" size={24} style={styles.contactIcon} />
        <Text style={styles.contactText}>microtechcreations@gmail.com</Text>
      </View>
      <View style={styles.copy}>
        <FontAwesome name="copyright" size={14} />
        <Text style={{marginLeft: 10}}>Microtech</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introText:{
    fontWeight: 'bold',
    fontSize: 32,
    padding: 10,
    marginTop: 100,
  },
  contact:{
    flexDirection: 'row',
  },
  contactIcon:{
    padding: 5,
  },
  contactText:{
    padding: 5,
    fontWeight: '300',
    fontSize: 24,
  },
  copy:{
    flexDirection: 'row',
    paddingTop: 200,
  },
});