import { Text, View,FlatList,Image,ScrollView,TouchableOpacity, StatusBar } from 'react-native'
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
import {logo, one,logoo}  from '../constants/images'
import { LoginContext } from '../context/LoginContext';
import { useContext } from 'react';
//import { storage } from '../firebase/firebase';
import storage from '@react-native-firebase/storage'

//const Stack = createStackNavigator();
const Home = (props) => {
    const DATA =dummyData.categories
    const [phones,setPhones] =useState()
    const navigation = props.navigation
    const [url,setUrl]= useState()
    const [url1,setUrl1] =useState()

    useEffect(()=>{
     
      productExtract();

      },[])

      const productExtract =()=>{
        firestore().collection("mobiles").get().then((querySnapshot) => {
          let pns=[]
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
              console.log(doc.data())
                pns.push(doc.data())
            });
            setPhones(pns)
        });
        }
    //phone Extract ends  



      const imageExtract=(mo, image)=>{
        console.log(mo + image +'here it is')
    
        //   storage().ref('mahakal/productImages/'+{mo}+'/'+{image}).getDownloadURL().then((urli)=>{
        //     setUrl(urli)
        //   console.log(urli)
        // })
      }
    
      const listHeader=()=>{
        return(
          <View>
        <FlatList 
        style={Styles.home_flatList1}
        horizontal
       showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item})=>{      
        return(
          <TouchableOpacity  onPress={()=>props.SET_SELECTED_TAB(item.name)} >
      <Text  style={{...Styles.jai,padding:SIZES.radius,color:(props.selectedTab==item.name)?COLORS.white:COLORS.black,fontSize:SIZES.bigFont,backgroundColor:(props.selectedTab==item.name)?COLORS.black:null,borderRadius:10,marginHorizontal:1,padding:10}}>
          {item.name}
            </Text>
            </TouchableOpacity>
        )
      }}
      />
          </View>
        )}
      //list header ends
  //list header ends
  //display products

const displayMobiles=()=>{
return(
<ScrollView style={{backgroundColor:COLORS.white,marginBottom:20}}>

<FlatList 
data={phones}
horizontal ={false}
numColumns={2}
renderItem={({item,index})=>{
const mid=item.mobileId

return(
<TouchableOpacity onPress={()=>{navigation.navigate('MobileDetails',{mid:mid})}}
style={{marginLeft:(index%2==0)?16:SIZES.base,...Styles.home_to}}>
<View style={{height:230,...Styles.jai}}>
  
  { console.log(item.mobileId)}
  { console.log(item.image1)}

 {  imageExtract(item.mobileId,item.image1) }
{/* <Image source={{uri:item.image1}} resizeMode="contain" style={Styles.home_image1} /> */}

</View>
<View style={{...Styles.jai,marginTop:-25,paddingHorizontal:5,paddingBottom:5}}>
  <Text style={{...Styles.ProductStyleText,fontSize:16,fontWeight:'bold'}}>{item.company} | {item.model}</Text>
  <Text style={Styles.ProductStyleText}>{item.ram} RAM | {item.memory_internal} Memory</Text>
  <Text style={Styles.ProductStyleText}>{item.color} Color</Text>
  <View style={{flexDirection:'row'}}>
  <Text style={{textDecorationLine:'line-through',alignSelf:'center',fontSize:16,...Styles.ProductStyleText}}>{item.amount1} Rs </Text>
{item.sold  ?
  <Text style={{...Styles.ProductStyleText,fontSize:16,fontWeight:'bold',color:COLORS.red}} >{" "}Sold Out</Text>:
<Text style={{...Styles.ProductStyleText,fontSize:16,fontWeight:'bold'}} >{" "}{item.amount2} Rs{item.sold}</Text>
}
</View>
</View>
  </TouchableOpacity>
)}
}
/>
</ScrollView>
)}
//display mobiles ends
//main return
return (
<View style={{flex:1}}>
<StatusBar hidden={true}/>
<Header 
leftComponent={
  <View style={Styles.header_leftComponent_view}>
<Image source={logoo} resizeMode="contain"  style={Styles.header_leftComponent_image}/>
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
  }}

export default connect(mapStateToProps,mapDispatchToProps)(Home)