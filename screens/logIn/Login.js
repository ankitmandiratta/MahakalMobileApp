import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import Formi from '../../component/Formi'
import { COLORS, SIZES } from '../../constants'
import auth from '@react-native-firebase/auth';
import RegisterUser from './RegisterUser';
import Styles from '../../styles/Styles';

const Login = ({navigation}) => {
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')


 const authLoginUser=()=>{

  if(email.trim().length>0 && password.trim().length >4){
    auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {

    var user = userCredential.user;
  alert('Congrats ,User has been registered')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(error);
    alert(errorMessage)
  });

  }
  else{
      alert('Email and Password are mandatory and Password must be greater than 5')
  }
      }
   //auth user ends


    return (
    <View style={{alignContent:'center',justifyContent:'center',marginHorizontal:15}}>
    <View style={{marginTop:SIZES.height*0.25}}>
    <Text style={{fontSize:SIZES.padding,alignSelf:'center',fontWeight:'bold',color:COLORS.black}}>Login</Text>
    </View>
   
   <Formi  value={email} onChangeText={(value)=>{setEmail(value) }} placeholder="Enter your password"/>
   <Formi  value={password} onChangeText={(value)=>{setPassword(value) }} placeholder="Enter the value of Email"/>
    <Button title="Login" style={{padding:10}} color={COLORS.black}
            onPress={()=>authLoginUser()}  />

            <TouchableOpacity style={Styles.loginTO} onPress={()=>navigation.navigate('RegisterUser')} >
              <Text>Not Register?Register Here</Text></TouchableOpacity>
   </View>

  )
}

export default Login

