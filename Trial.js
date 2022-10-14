import React from 'react'
import { StyleSheet, Text, View,Image, Button, Touchable } from 'react-native'
import firebase from 'firebase'
import storage from '@react-native-firebase/storage'

import { FONTS,COLORS,SIZES } from './constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useEffect,useState } from 'react'

const Trial = ({navigation}) => {
const [url,setUrl] = useState()
useEffect(()=>{
  storage().ref('/mahakal/productImages/ZXCV1/logo.png').getDownloadURL().then((urli)=>{
    console.log(urli)
     setUrl(urli)
 
  })
 
 
},[])
     return (
    <View>
        <View>
           <View style={{height:150,width:'100%',backgroundColor:'red'}}>
        <Text style={{...FONTS.h2}}>ABCDE</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SIgnIn')}>
          <Text>Click here</Text>
          </TouchableOpacity>
        <Text style={{...FONTS.h2}}>Link is :$</Text>
        </View>
    {/* <Button onPress={()=>ImageUp()} title="Image Upload" /> */}
    <View >

    <Image source={{uri:url}} style={{width:'100%',height:160}}  resizeMode="contain" alt="Image" />
    </View>
        </View>
        
     </View>
  )}

export default Trial
