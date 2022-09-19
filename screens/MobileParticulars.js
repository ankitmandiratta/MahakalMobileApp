import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import dummyData from '../constants/dummyData'
import { COLORS,SIZES } from '../constants'

const MobileParticulars = () => {
  return (
    <View>
        <View style={{marginTop:SIZES.height*0.05,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
<Text>Mobile</Text>
        </View>
        <View style={{width:SIZES.width,height:SIZES.height*0.50,justifyContent:'center',alignContent:'center',alignItems:'center',marginTop:30}}>
        <Image source={dummyData.Phone1.front_image} style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}  />
        </View>
    </View>
  )
}

export default MobileParticulars

const styles = StyleSheet.create({})