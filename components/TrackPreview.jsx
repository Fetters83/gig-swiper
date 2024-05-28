import React, { Component, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function SpotifyWebView () {

    const myHtml = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3w0w2T288dec0mgeZZqoNN?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    const webViewRef = useRef(null);

    return (
        <View style={{height: 100}}>
            <WebView
                ref={webViewRef}
                source={{ uri: 'https://open.spotify.com/embed/track/3w0w2T288dec0mgeZZqoNN' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                style={{ flex: 1, width: 245, maxHeight: 100, zIndex: 99}}
            />
            <View id='embed-iframe'></View>
        </View>
    );
  };