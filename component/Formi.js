import {  Text, View,TextInput,useColorScheme } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import Styles from '../styles/Styles'
import StylesDark from '../styles/StylesDark'



const Formi = ({label,value,onChangeText,placeholder,secureTextEntry}) => {
  const Sty= useColorScheme ==='dark'?StylesDark:Styles
  return (
    <View>
       <View style={{flexDirection:'row',marginVertical:10}}>
        <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} 
        secureTextEntry={secureTextEntry}
        placeholderTextColor={COLORS.black}
        style={{borderColor:COLORS.gray,borderWidth:1,borderRadius:10,flex:1}}
        />
    </View>
    </View>
  )
}

export default Formi

