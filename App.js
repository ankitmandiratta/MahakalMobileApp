import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MobileParticulars from './screens/MobileParticulars'
import dummyData from './constants/dummyData'
import { COLORS, SIZES,FONTS } from './constants';

const App = () => {
const DATA =dummyData.categories
const PHONES = dummyData.phones
return (
<View >
<Text>All three options</Text>
<FlatList 
style={{marginVertical:10,height:SIZES.height*.10}}
horizontal
showsHorizontalScrollIndicator={false}
data={DATA}
renderItem={({item})=>{
  return(
    <View>
      <Text style={{justifyContent:'center',alignItems:'center',padding:SIZES.base,color:COLORS.darkGray,fontSize:SIZES.bigFont}}>
        {item.name}
      </Text>
      </View>
  )
}}
/>
{console.log(PHONES.length)}

<FlatList 

data={PHONES}
horizontal ={false}
numColumns={2}
renderItem={({item,index})=>{

  console.log(item)
  return(

<View style={{backgroundColor:COLORS.lightGray1,flex:1,
              
              marginLeft:(index%2==0)?16:SIZES.base,
              marginRight:SIZES.radius,
              borderRadius:10,
              marginVertical:10
}}>
<View style={{height:230,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
<Image  source={item.front_image} resizeMode={"center"} style={{alignSelf:'flex-start',height:"100%",width:"100%"}} />
</View>
<View style={{justifyContent:'center',alignContent:'center',alignSelf:'center',marginTop:-25,paddingHorizontal:5,paddingBottom:5}}>
  <Text style={{...styles.ProductStyleText,fontSize:16,fontWeight:'bold'}}>{item.company} | {item.model}</Text>
  <Text style={styles.ProductStyleText}>{item.ram} RAM | {item.memory_internal} Memory</Text>
  <Text style={styles.ProductStyleText}>{item.color="White"} Color</Text>
  <View style={{flexDirection:'row'}}>
  <Text style={{textDecorationLine:'line-through',justifyContent:'center',alignSelf:'center',fontSize:16,...styles.ProductStyleText}}>{item.amount1} Rs </Text>
{item.sold  ?
  <Text style={{...styles.ProductStyleText,fontSize:20,fontWeight:'bold',color:COLORS.red}} >{" "}Sold Out</Text>:
<Text style={{...styles.ProductStyleText,fontSize:20,fontWeight:'bold'}} >{" "}{item.amount2} Rs{item.sold}</Text>

}
  </View>
 
</View>


  </View>
)}
}

/>
  

</View>
  )
} 
  
export default App
const styles =StyleSheet.create({
  ProductStyleText:{
    color:COLORS.black,
    fontSize:SIZES.body4    
  }
})
