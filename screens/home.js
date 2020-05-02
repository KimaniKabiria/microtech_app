import React from 'react';
import { WebView } from 'react-native-webview';

export default class Home extends React.Component {
    render() {
      return <WebView source={{ uri: 'http://192.168.254.1' }} style={{ marginTop: 20 }} />;
    }
  }
