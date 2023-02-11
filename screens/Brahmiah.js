import { Text, View,FlatList,Image,ScrollView,TouchableOpacity, StatusBar } from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
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
import { Loader} from '../component';

import {logo, one,logoo}  from '../constants/images'
import { LoginContext } from '../context/LoginContext';
//import { storage } from '../firebase/firebase';
import storage from '@react-native-firebase/storage'

//const Stack = createStackNavigator();
const Home = (props) => {
    const DATA =dummyData.categories
    const [phones,setPhones] =useState()
    const navigation = props.navigation
    const [url,setUrl]= useState()
    const [url1,setUrl1] =useState()

    const {signOut} = useContext(LoginContext)
    const [load,setLoad]=useState(true)

    useEffect(()=>{
       productExtract();

      },[])

      const productExtract =()=>{
        firestore().collection("mobiles").get().then((querySnapshot) => {
          let pns=[]
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                pns.push(doc.data())
                if(querySnapshot._docs.length===pns.length)  {
                  setLoad(false)}
              
          
            });
            setPhones(pns)
        });
        }
    //phone Extract ends  

      const imageExtract=(mo, ima)=>{
        var urr =    'mahakal/productImages/'+mo + '/'+ima  
          cde=  storage().ref(urr).getDownloadURL().then((urli)=>{
           return urli        
           }) 
           console.log(cde.toString() +'cde' ) 
           return cde
     }
    
      const listHeader=()=>{
        return(
          <View >
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



  //display mobiles starts
  const displayMobiles=()=>{
return(
<View style={{backgroundColor:COLORS.white,marginBottom:30}}>
<FlatList 
data={phones}
horizontal ={false}
numColumns={2}
renderItem={({item,index})=>{
const mid=item.mobileId
return(
  <View>
<TouchableOpacity onPress={()=>{navigation.navigate('MobileDetails',{mid:mid})}}
style={{marginLeft:(index%2==0)?16:SIZES.base,marginRight:(index%2==0)?SIZES.base:16,...Styles.home_to}}>
<View style={{height:230,...Styles.jai}}>
{/* {console.log(imageExtract(item.mobileId,item.image1)+ 'trying extracting data')} */}
 {/* <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/mahakalmobileapp.appspot.com/o/mahakal%2FproductImages%2Fpiou3%2F1.jpg?alt=media&token=aa3d1a28-287c-4969-ab20-94d42339124b'}} resizeMode="contain" style={Styles.home_image1} /> */}
{imageExtract()}
    <Image source={one} resizeMode="contain" style={{...Styles.home_image1,bottom:0}} />
    </View>
<View style={{...Styles.jai,marginTop:-25,paddingHorizontal:5,paddingBottom:5}}>
  <Text style={{...Styles.ProductStyleText,fontSize:16,fontWeight:'bold'}}>{item.company} | {item.model}</Text>
  <Text style={Styles.ProductStyleText}>{item.ram} RAM | {item.memory_internal} Memory</Text>
  <Text style={Styles.ProductStyleText}>{item.color} Color</Text>
  <View style={{flexDirection:'row'}}>
  <Text style={{textDecorationLine:'line-through',alignSelf:'center',fontSize:18,...Styles.ProductStyleText}}>{item.amount1} Rs </Text>
{item.sold  ?
  <Text style={{...Styles.ProductStyleText,fontSize:16,fontWeight:'bold',color:COLORS.red}} >{" "}Sold Out</Text>:
<Text style={{...Styles.ProductStyleText,fontSize:16,fontWeight:'bold'}} >{" "}{item.amount2} Rs{item.sold}</Text>
}
</View>
</View>
  </TouchableOpacity>
  </View>
)}
}
/>


</View>
)}
//display mobiles ends

//main return
return (
  load?<Loader />:
<View style={{flex:1,backgroundColor:COLORS.white}}>
<StatusBar hidden={true}/>
<Header 
leftComponent={
  <View style={Styles.header_leftComponent_view}>
<TouchableOpacity onPress={()=>{signOut()}} >
<Image source={logoo} resizeMode="contain"  style={Styles.header_leftComponent_image}/>
</TouchableOpacity>
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