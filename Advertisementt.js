import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {BannerAd,BannerAdSize,TestIds} from 'react-native-google-mobile-ads'
const Advertisementt = ({containerStyle}) => {

const productionMode="ca-app-pub-6000168815258678/9506615813"

const adUnitId = __DEV__?TestIds.BANNER:productionMode


    return (

    <View style={{backgroundColor:'white',...containerStyle}}>
    <BannerAd
    unitId={adUnitId}
    size={BannerAdSize.FULL_BANNER}
    requestOptions={{
    requestNonPersonalizedAdsOnly:false
    }}
    />

    {/* <BannerAd unitId={adUnitId} size={BannerAdSize.FULL_BANNER} /> */}
    </View>

  )} //main return

export default Advertisementt

