import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const ProDesc = ({title,value,titleStyle,valueStyle,}) => {
  return (
    <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:20,...titleStyle,color:COLORS.black}}>{title}</Text>
      <Text style={{fontSize:20,...titleStyle}}>: </Text>
      <Text style={{fontSize:20,color:COLORS.blue,...valueStyle}}>{value}</Text>
    </View>
  )
}

export default ProDesc

const styles = StyleSheet.create({})