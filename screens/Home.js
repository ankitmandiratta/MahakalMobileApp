import { Text, View,FlatList,Image,ScrollView,TouchableOpacity, StatusBar } from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import dummyData from '../constants/dummyData';
import { COLORS, SIZES,FONTS } from '../constants';
import Header from '../component/Header';
import firestore from '@react-native-firebase/firestore';
import Entypo from 'react-native-vector-icons/Entypo'
import Styles from '../styles/Styles';
import { Loader} from '../component';
import LinearGradient from 'react-native-linear-gradient'
import {logo, one,logoo}  from '../constants/images'
import { LoginContext } from '../context/LoginContext';
import storage from '@react-native-firebase/storage'
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator()
const Home = (props) => {
    const DATA =dummyData.categories
    const [phones,setPhones] =useState([])
    const [images,setImages] =useState()
    const [selectedMenuType,setSelectedMenuType] = useState(0)
    const navigation = props.navigation

    const [load,setLoad]=useState(true)

    useEffect(()=>{
       productExtract();

      },[])

      const productExtract =()=>{
        firestore().collection("mobiles").get().then((querySnapshot) => {
          let pns=[]
           querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
               let urr= 'mahakal/productImages/'+doc.data().mobileId + '/'+doc.data().image1  
                storage().ref(urr).getDownloadURL().then((urli)=>{
                  let ima={image:urli}
                   pns.push([doc.data(),ima])
                  if(querySnapshot._docs.length===pns.length)  {
                    setPhones(pns)
                    setLoad(false)}
                })                      
            });
            // setImages(im)
        });
        }
    //phone Extract ends  

//       const imageExtract=(mo, ima)=>{
//         let image=[]
//         let zzs=false;
//         let urr ='mahakal/productImages/'+mo + '/'+ima  
//          storage().ref(urr).getDownloadURL().then((urli)=>{
//           image.push(urli)
//           return urli    
//            }) 
//  }
    
const renderMenuType =()=>{
  return(
    <View>
<FlatList 
horizontal
showsHorizontalScrollIndicator={false}
style={{height:SIZES.height*0.07,marginTop:15}}
data={dummyData.categories}
keyExtractor={item=>`${item.id}`}
renderItem={({item,index})=>{
  return(
    <TouchableOpacity onPress={()=>setSelectedMenuType(index)}>
      <Text style={{color:selectedMenuType==index ?COLORS.black:COLORS.darkGray2,padding:5,fontWeight:'bold',fontSize:20,marginLeft:index==0?2:7}}>{item.name}</Text>
    </TouchableOpacity>
  )
}}
/>
</View>
  )}

  //display mobiles starts
  const displayMobiles=()=>{
return(
<View style={{backgroundColor:COLORS.white,marginBottom:30}}>
<FlatList 
data={phones}
horizontal ={false}
ListHeaderComponent={ renderMenuType()}
numColumns={2}

showsVerticalScrollIndicator={true}
renderItem={({item,index})=>{
const mid=item[0].mobileId
{console.log(index)}
return(
  
<TouchableOpacity onPress={()=>{navigation.navigate('MobileDetails',{mid:mid})}} 
  style={{...Styles.home_to,marginRight:index%2==1?4:8,marginLeft:index%2==0?8:4,marginVertical:SIZES.base}}>
  

<View style={{height:200,width:150,...Styles.jai}}>
 {/* {console.log(item[1].image+ 'trying extracting data')} */}
 {/* <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/mahakalmobileapp.appspot.com/o/mahakal%2FproductImages%2Fpiou3%2F1.jpg?alt=media&token=aa3d1a28-287c-4969-ab20-94d42339124b'}} resizeMode="contain" style={Styles.home_image1} /> */}
 {/* <Image source={{uri:item[1].image}} resizeMode="contain" style={{...Styles.home_image1,bottom:0}} /> */}

 <Image source={one} resizeMode="contain" style={{...Styles.home_image1,height:'100%',width:'100%'}} />
 <Text style={{color:item[0].status =='sold out'?COLORS.red:'transparent',position:'absolute',top:10,right:-5,fontWeight:'bold'}}>Sold Out</Text>
  </View>
 
  <View style={{...Styles.jai,marginTop:-25,paddingHorizontal:5,paddingBottom:5}} >
  <Text style={{...Styles.ProductStyleText,fontSize:16,fontWeight:'bold'}}>{item[0].company} </Text>
  <Text style={{...Styles.ProductStyleText,fontSize:16,fontWeight:'bold'}}> {item[0].model}</Text>
  <Text style={Styles.ProductStyleText}>{item[0].ram} RAM | {item[0].memory_internal} Memory</Text>
  <Text style={Styles.ProductStyleText}>{item[0].color} Color</Text>
  
  <View style={{flexDirection:'row'}}>
  <Text style={{textDecorationLine:'line-through',alignSelf:'center',fontSize:18,...Styles.ProductStyleText}}>{item[0].amount1} Rs </Text>
  <Text style={{...Styles.ProductStyleText,fontSize:16,fontWeight:'bold'}} >{" "}{item[0].amount2} {item[0].sold}</Text>
  </View>

</View>
  </TouchableOpacity>

)}
}

ListFooterComponent={
  <View style={{height:80}}/>
}
/>
</View>

)}


//display mobiles ends

//main return
return (
  load?<Loader />:
<View style={{backgroundColor:COLORS.white,flex:1,height:SIZES.height*.9}}>
<StatusBar hidden={true}/>
<Header 
leftComponent={
  <View style={Styles.header_leftComponent_view}>
<TouchableOpacity onPress={()=>navigation.openDrawer()} >
<Entypo name="menu" size={30} color={COLORS.black}  />
</TouchableOpacity>
    </View>
} />

<View style={{flex:1,marginTop:SIZES.radius}}>
{displayMobiles()}
</View>
  </View>
)}

export default Home

