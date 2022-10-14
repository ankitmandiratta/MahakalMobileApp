import { StyleSheet, Text, View,Image, Touchable } from 'react-native'
import React from 'react'
import Styles from '../styles/Styles'
import { COLORS,SIZES,FONTS } from '../constants' 
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import {a} from '../constants/images'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Header = ({leftComponent}) => {
  return (
    <View>
<View style={[Styles.header_View,Styles.jai]}>
{leftComponent}
<View style={{flex:1,...Styles.jai}}>
<Text style={Styles.header_text}> Mahakal Mobile</Text>
<Text style={Styles.header_text}> Nasirabad Road,Ajmer</Text>
</View>
{/* Right Component */}

<View>
  <TouchableOpacity onPress={()=>alert('make a call')}>
<Icon name="md-call" size={25} color={COLORS.black}    /> 
</TouchableOpacity>
</View>

</View>
</View>
  )}

export default Header

