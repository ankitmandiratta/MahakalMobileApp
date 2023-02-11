import {  Text, View,TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'


const Formi = ({label,value,onChangeText,placeholder}) => {
  return (
    <View>
       <View style={{flexDirection:'row',marginVertical:10}}>
        <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder}
        style={{borderColor:COLORS.gray,borderWidth:1,borderRadius:10,flex:1}}
        />
    </View>
    </View>
  )
}

export default Formi

