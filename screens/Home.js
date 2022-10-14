import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MobileParticulars from './MobileParticulars'
import dummyData from '../constants/dummyData';
import { COLORS, SIZES,FONTS } from '../constants';
import { connect} from 'react-redux';
import Header from '../component/Header';
import { Alert } from 'react-native';
import { SET_SELECTED_TAB } from '../store/tabActions';
import selectedTab from '../store/tabActions';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome'
import Styles from '../styles/Styles';
import storage from '@react-native-firebase/storage'
import {logo}  from '../constants/images'
//const Stack = createStackNavigator();
const Home = (props) => {
    const DATA =dummyData.categories
    const [phones,setPhones] =useState()
    const navigation = props.navigation
    const [url,setUrl]= useState()


    useEffect(()=>{
     
      phoneExtract();
      imageExtract();
      },[])

      const imageExtract=()=>{
        storage().ref('/mahakal/productImages/ZXCV1/logo.png').getDownloadURL().then((urli)=>{
        
           setUrl(urli)
       
        })
      }
    
      const phoneExtract =()=>{
      firestore().collection("mobiles").get().then((querySnapshot) => {
        let pns=[]
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
               pns.push(doc.data())
          });
          setPhones(pns)
      });
      }
  //phone Extract ends  
    const listHeader=()=>{
  return(
    <View>
<FlatList 

style={{marginVertical:10,height:SIZES.height*.06,marginHorizontal:10}}
horizontal
showsHorizontalScrollIndicator={false}
data={DATA}
renderItem={({item})=>{
  return(
    <TouchableOpacity  onPress={()=>props.SET_SELECTED_TAB(item.name) } >
      <Text 
      style={{...Styles.jai,padding:SIZES.base,color:(props.selectedTab==item.name)?COLORS.white:COLORS.gray,fontSize:SIZES.bigFont,backgroundColor:(props.selectedTab==item.name)?COLORS.black:null,borderRadius:10,padding:10}}>
        {item.name}
      </Text>
      </TouchableOpacity>
  )
}}
/>
    </View>
  )}
//list header ends

//display products

const displayMobiles=()=>{
return(
<View>
<FlatList 

data={phones}
horizontal ={false}
numColumns={2}
renderItem={({item,index})=>{

const mid=item.mobileId
  return(

  
<TouchableOpacity onPress={()=>{navigation.navigate('MobileDetails',{mid:mid})}}
style={{backgroundColor:COLORS.lightGray1,flex:1,marginLeft:(index%2==0)?16:SIZES.base,
              marginRight:SIZES.radius,borderRadius:10,marginVertical:10}}>
<View style={{height:230,...Styles.jai}}>
<Image  source={{uri:url}} resizeMode="contain" style={{alignSelf:'center',height:"100%",width:"90%"}} />

</View>
<View style={{...Styles.jai,marginTop:-25,paddingHorizontal:5,paddingBottom:5}}>
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
  </TouchableOpacity>
)}
}
/>

</View>  
)}

//main return
return (
<View >

<Header 
leftComponent={
  <View style={{height:60,width:40,justifyContent:'center'}}>
<Image source={logo} resizeMode="contain"  style={{height:'100%',width:'100%'}}/>
    </View>
} />
{listHeader()}
{displayMobiles()}

  </View>
)}
const mapStateToProps =(state)=>{
return {
  selectedTab : state.selectedTab
}
}
const mapDispatchToProps=(dispatch)=>{
  return{
    SET_SELECTED_TAB:(selectTab)=>dispatch(selectedTab(selectTab))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

const styles =StyleSheet.create({
    ProductStyleText:{
      color:COLORS.black,
      fontSize:SIZES.body4    
    }
  })
  
