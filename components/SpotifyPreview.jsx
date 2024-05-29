import React, { Component, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function SpotifyPreview ({ spotifyTrack }) {

    const myHtml = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${spotifyTrack.id}" width="90%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    const webViewRef = useRef(null);

    return (
        <View style={{}}>
            <View style={{width: "100%", height: 352, marginLeft: "31%", backgroundColor: 'transparent'}}>
                <WebView
                    source={{ html: myHtml}}
                    showsVerticalScrollIndicator = {false}
                    showsHorizontalScrollIndicator = {false}
                    style = {{height: "100%", backgroundColor: 'transparent'}}
                />
            </View>
        </View>
    );
  };