import { Button, StyleSheet, Text, TouchableOpacity, View,Image,useColorScheme } from 'react-native'
import React,{useState,useContext,useEffect} from 'react'
import Formi from '../../component/Formi'
import { COLORS, SIZES,icons } from '../../constants'
import auth from '@react-native-firebase/auth';
import RegisterUser from './RegisterUser';
import Styles from '../../styles/Styles';
import StylesDark from '../../styles/StylesDark';
import { LoginContext } from '../../context/LoginContext';
import {GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin'



const Login = ({navigation}) => {


  const Sty= useColorScheme==='light'?Styles:StylesDark
  const {signIn,signUp} = useContext(LoginContext)

  const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')


   useEffect(()=>{

    GoogleSignin.configure({
    scopes:['email'],
    webClientId:'913206865285-5b34lkid3ncmiineebskbbkcucdiosf3.apps.googleusercontent.com',
    offlineAccess:true
  
  })
  },[])

  const GoogleSignInn =async()=>{
    try {
       await GoogleSignin.hasPlayServices();
       const {user} = await GoogleSignin.signIn();

        console.log(user)
      authGoogleUser(user.email,user.id)

 
    } catch (error) {

      setEmail('')
      setPassword('')
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        alert(error)
      
    }
  }
}


const authGoogleUser=(emaill,passwordd)=>{
  
    auth().signInWithEmailAndPassword(emaill, passwordd)
  .then((userCredential) => {
    var user = userCredential.user;
   signIn(email)      
  })
  .catch((error) => {
    setEmail('')
    setPassword('')
    var errorMessage = error.message;
    alert(errorMessage)

  });

  

}

const authLoginUser=()=>{

  if(email.trim().length>0 && password.trim().length >4){
    auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
   signIn(email)      
  })
  .catch((error) => {
    setEmail('')
    setPassword('')
    var errorMessage = error.message;
    alert(errorMessage)

  });

  }
  else{
    setEmail('')
    setPassword('')
    alert('Email and Password are mandatory and Password must be greater than 5')
  
  
    }
      }
   //auth user ends

   return (
    <View style={{alignContent:'center',justifyContent:'center',marginHorizontal:15,...Sty.www}}>
    <View style={{marginTop:SIZES.height*0.25}}>
    <Text style={{fontSize:SIZES.padding,alignSelf:'center',fontWeight:'bold',color:COLORS.black}}>Login</Text>
    </View>
   
   <Formi  value={email} onChangeText={(value)=>{setEmail(value) }} placeholder="Email Address"/>
   <Formi  value={password} onChangeText={(value)=>{setPassword(value) }} placeholder=" Enter Password " secureTextEntry={true}/>
    <Button title="Login" style={{padding:10}} color={COLORS.black}
            onPress={()=>authLoginUser()}  />

            <TouchableOpacity style={Sty.loginTO} onPress={()=>navigation.navigate('RegisterUser')} >
              <Text>Not Register?Register Here</Text></TouchableOpacity>
   <View>
        <TouchableOpacity onPress={()=>GoogleSignInn()}
        style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:SIZES.padding*2,borderRadius:10,borderWidth:1,borderColor:COLORS.gray,padding:SIZES.font}}
        >
          <Image source={icons.google} style={{height:30,width:30}}/>
          <Text style={{fontSize:SIZES.h3,fontWeight:'bold',color:COLORS.black,marginLeft:SIZES.radius}}>SignIn with Google</Text>
        </TouchableOpacity>
      </View>
     
   </View>
  )}

export default Login

