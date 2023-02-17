import React,{useContext,useState} from "react";
import { View,Text, Touchable, TouchableOpacity,Image } from "react-native";
import {createDrawerNavigator,DrawerContentScrollView} from '@react-navigation/drawer'
import { COLORS,SIZES,FONTS } from "../constants";
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/AntDesign'
import {icons} from '../constants' 
import { LoginContext } from "../context/LoginContext";
import Home from "./Home";

import { logo, logoo } from "../constants/images";


const Drawer = createDrawerNavigator()

const CustomDrawerItem =({label,icon})=>{
    const {signOut} = useContext(LoginContext)
    return(
    <TouchableOpacity style={{flexDirection:'row',height:40,alignItems:'center'}} onPress={()=>{signOut()}}>
    <Image source={icon} style={{width:20,height:20,tintColor:COLORS.white}}/>
    <Text style={{color:COLORS.white,marginLeft:20,...FONTS.h3}}>{label}</Text>
    </TouchableOpacity>
)}

const CustomDrawerContent=({navigation})=>{
    return(
        <View>
            {/* close */}
            <TouchableOpacity onPress={()=>navigation.closeDrawer()} style={{marginTop:5}}>
                <Image source={icons.close} style={{height:30,width:30,tintColor:COLORS.white}}/>
            </TouchableOpacity>
            {/* image and name */}
            <View style={{flexDirection:'row',alignItems:'center',marginVertical:20,marginHorizontal:10}}>
            <Image source={logoo} style={{height:30,width:30}}/>
            <Text style={{color:COLORS.white,marginLeft:20,fontFamily:'bold'}}>MAHAKAL MOBILES</Text>
            </View>

        <View  style={{height:1,backgroundColor:COLORS.white,marginVertical:15,marginHorizontal:5}}/>
        <View style={{marginTop:20,marginLeft:10,}}>
        <CustomDrawerItem label="Log Out" icon={icons.logout}/>
        </View>
        </View>
    )
}

const DraweNav =(props)=>{


   const [progress,setProgress] = useState(new Animated.Value(0))  

   const scale = Animated.interpolateNode(progress,{
                inputRange:[0,1],
                outputRange:[1,0.8]
})

const borderRadius = Animated.interpolateNode(progress,{
    inputRange:[0,1],
    outputRange:[0,26]
})

const animatedStyle = {borderRadius,transform:[{scale}]}




//   const animatedStyle={borderRadius,transform:[{scale}]}



return(
<Drawer.Navigator 
screenOptions={{
headerShown:false,
drawerStyle:{backgroundColor:COLORS.black}
}}
drawerContent={props=>{
  
  setTimeout(()=>{
    setProgress(props.setProgress)
  },0)

    
    
    return(
        <CustomDrawerContent  navigation={props.navigation}/>
    )}
}
initialRouteName="Home">
<Drawer.Screen name="Home">{props=><Home {...props}
drawerAnimationStyle={animatedStyle}
/>}
</Drawer.Screen> 
</Drawer.Navigator>
)}


export default DraweNav