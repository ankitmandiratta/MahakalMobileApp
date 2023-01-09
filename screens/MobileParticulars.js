import { StyleSheet,Text, StatusBar,View,Image,ScrollView, ActivityIndicator,TouchableOpacity,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import dummyData from '../constants/dummyData'
import { COLORS,SIZES,FONTS } from '../constants'
import firestore from '@react-native-firebase/firestore';
import {connect} from 'react-redux'
import Styles from '../styles/Styles'
import {logo,one,logoo}  from '../constants/images'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import storage from '@react-native-firebase/storage'
import AnimatedLoader from "react-native-animated-loader";
import call from 'react-native-phone-call'
import { ProDesc,Loader,Header } from '../component';

const MobileParticulars = ({route,navigation}) => {

 const {mid} =route.params
 const [data,setData]=useState()
 const  [mobileId,setMobileId]=useState('')
 const [company,setCompany]= useState('')
 const [model,setModel ]=useState("")
 const [phoneColor,setPhoneColor] = useState("")
 const [sim,setSim]= useState()
 const [network,setNetwork] =useState()
 const [screenSize,setScreenSize]= useState()
 const [platform,setPlatform] = useState()
 const [frontCamera,setFrontCamera]=useState()
 const [mainCamera,setMainCamera]=useState()
 const [ram,setRam]=useState()
 const [memoryInternal,setMemoryInternal]=useState()
 const [memoryExternal,setMemoryExternal]=useState(null)
 const [battery,setBattery]=useState()
 const [amount1,setAmount1]=useState('') 
 const [amount2,setAmount2]=useState()
 const [image1,setImage1]= useState()
 const [image2,setImage2]= useState()
 const [image3,setImage3]= useState()
 const [image4,setImage4]= useState() 
const [remark1,setRemark1] = useState('')
const [remark2,setRemark2] = useState('')
const [remark3,setRemark3] = useState('')
const [remark4,setRemark4] = useState('')
const [remark5,setRemark5] = useState('')

useEffect(()=>{

    setTimeout(()=>{
        <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color={COLORS.black} />
        </View>
    },1000)

        amount1 == '' ? dataExtract():noDataReturn()

        },[amount1])

const [images,setImages ]=useState([{image1,image2,image3,image4}])
const [selectedIndex,setSelectedIndex] = useState(0)

const dataExtract =()=>{

    console.log(mid + 'Id its ')
    firestore().collection('mobiles').doc(mid).get().then((doc)=>{
        console.log(doc.data().amount1)
         setAmount1(doc.data().amount1);
         setAmount2(doc.data().amount2);
         setBattery(doc.data().battery)
         setCompany(doc.data().company)
         setPhoneColor(doc.data().color)
         setMemoryInternal(doc.data().memoryInternal) 
         setModel(doc.data().model)
         setRam(doc.data().ram)
         setScreenSize(doc.data().screenSize)
         setImage1(doc.data().image1)
         setImage2(doc.data().image2)
         setImage3(doc.data().image3)
         setImage4(doc.data().image4)

         setFrontCamera(doc.data().frontCamera)
         setMainCamera(doc.data().mainCamera)
         setMobileId(doc.data().mobileId)  
         setRemark1(doc.data().remark1)
         setRemark2(doc.data().remark2)
         setRemark3(doc.data().remark3)
         setRemark4(doc.data().remark4)
         setRemark5(doc.data().remark5)

     })

}

const dataReturn=()=>{
    return(
        <View>
        <ScrollView>
        <View style={{marginTop:30,width:SIZES.width,height:SIZES.height*.30,justifyContent:'center',alignContent:'center',alignItems:'center',flexDirection:'row'}}>
    
        <FlatList 
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={e=>{setSelectedIndex(((e.nativeEvent.contentOffset.x)/SIZES.width).toFixed(0))}}
        data={images}
        renderItem={({item,index})=>{
            return(
            
            <View>
             <Image source={item} style={{width:SIZES.width,height:200}}  resizeMode="contain"  />           
            
             <View style={{width:SIZES.width,height:40,position:'absolute',bottom:0,ustifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                {images.map((item,index)=>{
                return(
             <View style={{backgroundColor:selectedIndex==index?COLORS.red:COLORS.black,height:15}}>
               </View>
                    )
                })}
          </View>
            </View>
    )}
    }
    />
         </View>
          {/* breakthrough line */}
        <View style={Styles.horizonatalLine} />
        <View style={{marginLeft:25,marginTop:10}}>
        <Text style={Styles.mobileParticular_text}>{company}{" "}{model}{" "}{ }</Text>
         <Text style={Styles.mobileParticular_text}>{'('}{phoneColor}{", "}{ram}{", "}{memoryInternal}{')'}</Text>
        </View>
        {/* breakthrough line */}
        <View style={{...Styles.horizonatalLine}} />
        <View style={{paddingLeft:20,marginTop:20,marginLeft:SIZES.base,marginRight:2}}>
        {mobileId != '' &&  <ProDesc title="Mobile ID" value={    mobileId } /> }
        {model != '' &&  <ProDesc title="Model" value={company + model } /> }
        { phoneColor!= '' &&  <ProDesc title="Mobile Color" value={phoneColor } /> }
        {ram != undefined && ram != '' &&  <ProDesc title="RAM" value={ram } /> }
        {screenSize != undefined && screenSize != '' &&  <ProDesc title="Screen Size" value={screenSize } /> }
        {frontCamera != undefined && frontCamera != ''  &&  <ProDesc title="Front Camera" value={frontCamera } /> }
        {mainCamera != undefined && mainCamera != '' &&  <ProDesc title="Main Camera" value={mainCamera } /> }
        {memoryInternal != undefined && memoryInternal != '' && <ProDesc title="Memory " value={memoryInternal  } /> }
        {battery != undefined && battery != '' && <ProDesc title="Battery" value={battery } />}
        {remark1 != undefined &&  remark1 != '' && <ProDesc title="Remark " value={remark1 +', '+ remark2 +', '+ remark3 +', '+ remark4  }  valueStyle={{color:COLORS.red}} /> }

        </View>
        </ScrollView>

        <View style={{bottom:0,backgroundColor:COLORS.transparent,position:'relative',marginTop:30}}>
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'baseline',backgroundColor:COLORS.lightGray1,marginHorizontal:10,borderRadius:SIZES.radius,padding:10}}>

        <TouchableOpacity style={{flexDirection:'row'}}>
        <Text style={{color:COLORS.blue,fontWeight:'bold'}}>Rs : </Text>
       <Text style={{fontStyle:'italic',textDecorationLine:'line-through',fontWeight:'bold'}}> {amount1 }</Text>
         <Text style={{fontStyle:'italic',fontSize:22,color:COLORS.red,marginLeft:SIZES.radius,top:-5,right:5,fontWeight:'bold'}}>{amount2 + '/-' } </Text>    
        </TouchableOpacity>

    <TouchableOpacity style={{flexDirection:'row',padding:8}} >
    <Text style={{fontStyle:'italic',fontSize:20,fontWeight:'bold'}}></Text>
    </TouchableOpacity>
    </View>    
    </View>

    </View>
        )}

    const noDataReturn=()=>{
        
        return (

            <Loader />    
            )}
   return (

        <ScrollView style={{backgroundColor:COLORS.white}}>
        <StatusBar hidden={true} />
            <Header           
            leftComponent={
            <View>
            <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons name="arrow-back-circle" color={COLORS.black} size={30} />
            </TouchableOpacity>
            </View>
            }   
             />

        {  amount1 != '' ? dataReturn():noDataReturn()}
        </ScrollView>
  
  )}
const mapStateToProps = state =>{
    return{
        selectedTab:state.selectedTab
    }
}
export default connect (mapStateToProps)(MobileParticulars)

