import React from 'react';
import { WebView } from 'react-native-webview';
import {Button, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Home extends React.Component {

    reload(){
      this.myWebView.reload()
    }

    render() {
      return (
        <View style={{flex:1}}>
          <View style={styles.header}>
            <View style={styles.headerImg}>              
              <Image
                style={{ width: 150, height: 28 }}
                source = {require('../assets/splash.png')}
              />
            </View>
            <TouchableOpacity onPress={()=>this.reload()} style={styles.headerBtn}>              
              <Ionicons name="ios-refresh" size={18} />
            </TouchableOpacity>
          </View>
          <WebView
            style={{flex: 1}}
            originWhitelist={['*']}
            source={{ uri: "http://192.168.254.1" }}
            style={{ marginTop: 0 }}
            ref={(ref) => this.myWebView = ref}
          />
     </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      height: 80,
      paddingTop: 30,
      paddingLeft: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    headerImg:{
      flex:7,
    },
    headerBtn:{
      flex:1
    }
  })
