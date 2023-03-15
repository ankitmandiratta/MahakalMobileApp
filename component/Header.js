import { StyleSheet, Text, View,Image, Touchable } from 'react-native'
import React from 'react'
import Styles from '../styles/Styles'
import { COLORS,SIZES,FONTS } from '../constants' 
import call from 'react-native-phone-call'
import Icon from 'react-native-vector-icons/Ionicons';
import { logoo } from '../constants/images'
import {a} from '../constants/images'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Header = ({leftComponent}) => {

  
  const triggerCall=()=>{
    const args ={
      number:'+91 8233296607',
      prompt:false,
      skipCanOpen:true
      }

    call(args).catch(console.error)

  }
 

  return (
    <View>
<View style={[Styles.header_View,Styles.jai]}>
{leftComponent}
<View style={{flex:1,...Styles.jai}}>
  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
  <Image source={logoo} resizeMode="contain"  style={Styles.header_leftComponent_image}/>
  <Text style={Styles.header_text}> Mahakal Mobile</Text>
  </View>

<Text style={Styles.header_text}> Nasirabad Road,Ajmer</Text>
</View>
{/* Right Component */}

<View>
  <TouchableOpacity onPress={()=>triggerCall()}>
<Icon name="md-call" size={25} color={COLORS.black}    /> 
</TouchableOpacity>
</View>

</View>

<View style={{backgroundColor:COLORS.transparent,height:1,marginTop:10}}/>
</View>
  )}

export default Header

