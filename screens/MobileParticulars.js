import { Text, View,Image,ScrollView, TouchableOpacity,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import dummyData from '../constants/dummyData'
import { COLORS,SIZES,FONTS } from '../constants'
import firestore from '@react-native-firebase/firestore';
import {connect} from 'react-redux'
import Styles from '../styles/Styles'
import Header from '../component/Header'
import {logo}  from '../constants/images'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import storage from '@react-native-firebase/storage'
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
 const [amount1,setAmount1]=useState() 
 const [amount2,setAmount2]=useState()
 const [frontImage,setFrontImage]= useState()
const [backImage,setBackImage]= useState('')
const [rightSideImage,setRightSideImage]= useState('')
const [leftSideImage,setLeftSideImage]= useState('')
const DATA =[{id:"SIM",title:sim},
            {id:"Network",title:network},
            {id:"Screen Size",title:screenSize},
            {id:"Platform",title:platform},
            {id:"Front Camera",title:frontCamera},
            {id:"Main Camera",title:mainCamera},
            {id:"RAM",title:ram+" " + "GB"},
            {id:"Memory",title:memoryInternal},
            {id:"Battery",title:battery},
            {id:"MobileId",title:mobileId}        
        
        ]


useEffect(()=>{

    firestore().collection('mobiles').doc(mid).get().then((doc)=>{
        console.log(doc)    
        setAmount1(doc._data.amount1);
        setAmount2(doc._data.amount2);
        setBattery(doc._data.battery)
        setCompany(doc._data.company)
        setPhoneColor(doc._data.color)
        setMemoryInternal(doc._data.memoryInternal) 
        setModel(doc._data.model)
        setRam(doc._data.ram)
        setScreenSize(doc._data.screenSize)
        setFrontCamera('')
        setMainCamera()
        setMemoryInternal()
        setMobileId(doc._data.mobileId)  
    })

    console.log('/mahakal/productImages/'+ mobileId+'/'+1)
     storage().ref('/mahakal/productImages/'+mobileId+'/'+'logo.png').getDownloadURL().then((urli)=>{
        console.log(urli)
        setFrontImage(urli)
      })

},[])


    return (
            <View>
            <Header           
            leftComponent={
            <View>
            <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons name="arrow-back-circle" color={COLORS.black} size={30} />
            </TouchableOpacity>
            </View>
            }    />
        <ScrollView>
        <View style={{marginTop:30,width:SIZES.width,height:SIZES.height*.30,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Image source={{uri:frontImage}} style={{marginBottom:10,height:"100%",width:'100%'}} resizeMode="contain"   />
    
         </View>
        
            {/* <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
            <Text style={{color:COLORS.red}}>Mahakal Mobile App</Text>
            </View>
         */}

        {/* breakthrough line */}
    <View style={Styles.horizonatalLine} />

        <View style={{marginLeft:25,marginTop:10}}>
        <Text style={Styles.mobileParticular_text}>{company}{" "}{model}{" "}{ }</Text>
         <Text style={Styles.mobileParticular_text}>{'('}{phoneColor}{" , "}{ram}{" "}{" , "}{memoryInternal}{ }{')'}</Text>
        </View>
        {/* breakthrough line */}
        <View style={Styles.horizonatalLine} />
        <View style={{paddingLeft:30,marginTop:20,marginLeft:SIZES.base}}>
            <FlatList
            data={DATA}
            horizontal={false}
            renderItem={({item})=>{
                return( 
                <View style={{flexDirection:'row'}}>
                <Text style={{color:COLORS.red,...FONTS.h3,color:COLORS.black,fontWeight:'500',fontSize:18}}>{item.id}: </Text>
                <Text style={{color:COLORS.red,...FONTS.h3,color:COLORS.black,fontWeight:'500',fontSize:18}}>{item.title}</Text>
              </View>
                )
            }}
            />
       

        </View>
        </ScrollView>

<View style={{bottom:0,backgroundColor:COLORS.transparent,position:'relative',marginTop:30}}>
<View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'baseline',backgroundColor:COLORS.lightGray1,marginHorizontal:10,borderRadius:SIZES.radius,padding:10}}>

<TouchableOpacity style={{flexDirection:'row'}}>
<Text style={{color:COLORS.blue,fontWeight:'bold'}}>Rs :- </Text>
<Text style={{fontStyle:'italic',textDecorationLine:'line-through',fontWeight:'bold'}}> {amount1 }</Text>
<Text style={{fontStyle:'italic',fontSize:20,color:COLORS.blue,fontWeight:'bold'}}>{amount2}</Text>
</TouchableOpacity>

<TouchableOpacity style={{flexDirection:'row',padding:8}} onPress={()=>alert('open whatsapp with message')}>
    <FontAwesome name="whatsapp" size={25} style={{marginRight:5}}  /> 

    <Text style={{fontStyle:'italic',fontSize:20,fontWeight:'bold'}}>Contact Now</Text>
    </TouchableOpacity>
</View>
</View>

    </View>
  )
}
const mapStateToProps = state =>{
    return{
        selectedTab:state.selectedTab
    }
}
export default connect (mapStateToProps)(MobileParticulars)

