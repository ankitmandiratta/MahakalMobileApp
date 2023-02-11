import { Image,SafeAreaView,Text, View,FlatList } from 'react-native'
import React, { useEffect,useState } from 'react'
import storage from '@react-native-firebase/storage'
import { COLORS,SIZES } from '../constants'
import { one,logo,logoo } from '../constants/images'
const ImageDisplay =  () => {
    

  const [data,setData]= useState([one,logo,logoo])
  const [selectedIndex,setSelectedIndex]= useState(0)
  
     
    return (
<SafeAreaView>
  <View style={{backgroundColor:COLORS.red,height:'100%',width:'100%'}}>

<View style={{backgroundColor:COLORS.white,height:200}}>
<FlatList style={{flex:1,backgroundColor:COLORS.white}} 
pagingEnabled
data={data}
horizontal
onScroll={e=>{setSelectedIndex((e.nativeEvent.contentOffset.x/SIZES.width).toFixed(0))}}
showsHorizontalScrollIndicator={false}
renderItem={({item,index})=>{
  return(
  <View>
  <Image source={item} style={{width:SIZES.width,height:230,resizeMode:'contain'}} />

<View style={{width:SIZES.width,height:40,position:'absolute',bottom:0,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
{data.map((item,index)=>{
  return(
      <View style={{backgroundColor:selectedIndex==index?COLORS.red:COLORS.gray,height:5}} />
   
  )
})}
  </View>


</View>
    )}
}
/>
</View>
<Text>Nike Air Shoes</Text>


  </View>

</SafeAreaView>
// Link
// https://www.youtube.com/watch?v=1BEciokiuaI

   
  )}

  export default ImageDisplay