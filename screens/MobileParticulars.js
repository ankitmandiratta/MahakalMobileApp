import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import dummyData from '../constants/dummyData'
import { COLORS,SIZES } from '../constants'
import { FONTS } from '../constants/theme'

const MobileParticulars = () => {

const  [id,setId]=useState('')
 const [company,setCompany]= useState('Samsung')
 const [model,setModal ]=useState("Galaxy M32")
 const [phoneColor,setPhoneColor] = useState("white")
 const [sim,setSim]= useState([1, 2, 3])
 const [network,setNetwork] =useState("4G")
 const [screenSize,setScreenSize]= useState("78*78")
 const [platform,setPlatform] = useState("Android 11")
 const [frontCamera,setFrontCamera]=useState(1)
 const [mainCamera,setMainCamera]=useState(32)
 const [ram,setRam]=useState(16)
 const [memoryInternal,setMemoryInternal]=useState(32)
 const [memoryExternal,setMemoryExternal]=useState(null)
 const [battery,setBattery]=useState(4000)
 const [amount1,setAmount1]=useState(8000) 
 const [amount2,setAmount2]=useState(6290)
// const [frontImage,setFrontImage]= require("../assets/dummyData/samsung1.png")
// const [backImage,setBackImage]= require("../assets/dummyData/samsung2.png")
// const [rightSideImage,setRightSideImage]= require("../assets/dummyData/samsung3.png")
// const [leftSideImage,setLeftSideImage]= require("../assets/dummyData/samsung4.png")

    return (
    <View>

        <View style={{marginTop:SIZES.height*0.05,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Text>Mobile</Text>
        </View>
<ScrollView  >
        <View style={{flex:1,marginTop:30,width:SIZES.width,height:SIZES.height*.30,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Image source={dummyData.Phone1.front_image} style={{marginBottom:10}} resizeMode='center'  />
        {/* <Text style={{color:COLORS.red}}> {company} {model} {ram} {memoryInternal}</Text> */}
        </View>
        
            {/* <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
            <Text style={{color:COLORS.red}}>Mahakal Mobile App</Text>
            </View>
         */}

        <View style={{marginLeft:25}}>
        <Text style={{...FONTS.h3,color:COLORS.black,fontWeight:'bold',fontSize:20}}>{company}{","}{model}{","}{phoneColor}{","}{ram}{","}{memoryInternal}{ }</Text>
        </View>
        {/* breakthrough line */}
        <View style={{backgroundColor:COLORS.darkGray,height:1,marginTop:30,marginHorizontal:20}} />
        <View style={{paddingLeft:30,marginTop:20,marginLeft:SIZES.base}}>
        <Text style={{...FONTS.h3,color:COLORS.black,fontWeight:'bold',fontSize:20}}>SIM:{sim}</Text>
        <Text style={{...FONTS.h3,color:COLORS.black,fontWeight:'500',fontSize:18}}>Network:{network}</Text>
        <Text style={{...FONTS.h3,color:COLORS.black,fontWeight:'500',fontSize:18}}>Screen Size:{screenSize}</Text>
        <Text style={{...FONTS.h3,color:COLORS.black,fontWeight:'500',fontSize:18}}>platform:{platform}</Text>
        <Text style={{...FONTS.h3,color:COLORS.black,fontWeight:'500',fontSize:18}}>Front Camera:{frontCamera}</Text>
        <Text style={{...FONTS.h3,color:COLORS.black,fontWeight:'500',fontSize:18}}>Main Camera:{mainCamera}</Text>
        <Text style={{...FONTS.h3,color:COLORS.black,fontWeight:'500',fontSize:18}}>Memory:{memoryInternal}</Text>
        <Text style={{...FONTS.h3,color:COLORS.black,fontWeight:'500',fontSize:18}}>Battery{battery}</Text> 
<View style={{flexDirection:'row',alignItems:'baseline',backgroundColor:COLORS.yellow,borderRadius:SIZES.radius,width:SIZES.width*.40,padding:10}}>
    <Text>Rs :- </Text>
<TouchableOpacity><Text style={{fontStyle:'italic',textDecorationLine:'line-through'}}> {amount1 }</Text></TouchableOpacity>
<Text>  </Text>
<TouchableOpacity><Text style={{fontStyle:'italic',fontSize:20}}>{amount2}</Text></TouchableOpacity>
</View>
        </View>
        </ScrollView>
    </View>
  )
}

export default MobileParticulars

