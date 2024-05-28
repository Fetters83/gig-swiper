import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';




const SpotifyWebView = () => {

    const myHtml = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3w0w2T288dec0mgeZZqoNN?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'

    return (
        <View>
            <WebView 
              source={{ html: myHtml }} 
              style={{ flex: 1, width: 300, height: 100, zIndex: 99}}
              />
              <Text>Spotify preview</Text>
        </View>
    );
  };
  
  export default SpotifyWebView;
  
  
