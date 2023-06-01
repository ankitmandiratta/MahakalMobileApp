import {  Text, View,TextInput,useColorScheme } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import Styles from '../styles/Styles'
import StylesDark from '../styles/StylesDark'



const Formi = ({label,value,onChangeText,placeholder,secureTextEntry,keyboardType,inputStyle,containerStyle}) => {
  const Sty= useColorScheme ==='dark'?StylesDark:Styles
  return (
    <View>
       <View style={{flexDirection:'row',marginVertical:10,...containerStyle}}>
        <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} 
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={COLORS.black}
        style={{borderColor:COLORS.gray,borderWidth:1,borderRadius:10,flex:1,...inputStyle}}
        />
    </View>
    </View>
  )
}

export default Formi

