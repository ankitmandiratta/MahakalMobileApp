import { StyleSheet, Text, TouchableOpacity, View ,Button,TextInput,Image} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import auth from '@react-native-firebase/auth';
import { LoginContext } from '../../context/LoginContext';
import {GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin'
import Advertisementt from '../../Advertisementt';
import { SIZES,COLORS,FONTS, icons } from '../../constants';
import { Formi } from '../../component';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {logooo} from '../../constants/images'



const LoginMobile = ({navigation}) => {

  const [mobile,setMobile] = useState('')
  const [confirm, setConfirm] = useState(null);
  const {signIn} = useContext(LoginContext)
  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press

  const sendOTP=()=>{
    if(mobile.trim().length ==10){

      signInWithPhoneNumber('+91'+mobile)

    }
    else{
      alert('Enter the correct Mobile no')
    }
  }
  async function signInWithPhoneNumber(mobile1) {
    const confirmation = await auth().signInWithPhoneNumber(mobile1);
    setConfirm(confirmation);
       }

  async function confirmCode() {
    try {
      const val = await confirm.confirm(code);
     signIn(val.user.phoneNumber) 
    } catch (error) {
      alert('Invalid code.');
    }
  }



  //entry page of sign in
  if (!confirm) {
        return (
   
   //uncomment after otp screen
      <View style={{alignContent:'center',justifyContent:'center',marginHorizontal:15}}>
      <View style={{marginTop:SIZES.height*0.25}}>
      <Text style={{fontSize:SIZES.padding,alignSelf:'center',fontWeight:'bold',color:COLORS.black}}>Login</Text>
      </View>
      <Formi containerStyle={{marginTop:30,marginHorizontal:10}} inputStyle={{height:50,color:'black'}}
      keyboardType={'numeric'}
      value={mobile} onChangeText={(value)=>{setMobile(value) }} placeholder="  Enter 10 Digit Mobile Number " />
    <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
    <TouchableOpacity onPress={()=>sendOTP()}
    style={{backgroundColor:'blue',width:200,borderRadius:5,padding:10,height:50,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'white',fontSize:16}}>Send OTP </Text>
    </TouchableOpacity>
    </View>
    <Advertisementt containerStyle={{marginTop:SIZES.padding*2}}/>
      </View>
    
    );
  }

  return (
    <View style={{flex:1,backgroundColor:'white'}}>

    <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginTop:SIZES.height*.10,heigth:100}}>
      <Image source={logooo}  style={{width:80,height:80,alignSelf:'center'}}/>
      </View>
   <View style={{justifyContent:'center',alignItems:'center',marginTop:SIZES.padding}}>
    <Text style={{color:'black',fontWeight:'bold',fontSize:18,marginTop:SIZES.padding}}>Enter OTP </Text>
      </View>
<View style={{height:200,width:'80%',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
<OTPInputView 
pinCount={6}
keyboardType={'numeric'}
style={{width:'100%',alignSelf:'center',marginLeft:'18%'}}
autoFocusOnLoad   
codeInputFieldStyle={{borderColor:'black',borderRadius:5,color:COLORS.black,fontWeight:'600'}}
placeholderCharacter=''
placeholderTextColor={COLORS.black}
onCodeChanged={(cod)=>setCode(cod)}
/>
<View style={{justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity onPress={()=>confirmCode()}
style={{backgroundColor:'blue',padding:10,width:150,justifyContent:'center',alignItems:'center',borderRadius:10,marginLeft:50,alignSelf:'center'}}
>
  <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>Submit OTP</Text>
</TouchableOpacity>
</View>
</View>
<Advertisementt containerStyle={{marginTop:120,backgroundColor:'white'}}/>
</View>

  );
 
}

export default LoginMobile

