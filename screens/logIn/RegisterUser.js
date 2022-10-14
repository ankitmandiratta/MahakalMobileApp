import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SIZES,COLORS } from '../../constants'
import Formi from '../../component/Formi'
import auth from '@react-native-firebase/auth';
import Styles from '../../styles/Styles'
const RegisterUser = ({navigation}) => {
  
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const authCreateUser=()=>{

        if(email.trim().length>0 && password.trim().length >4){
            auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            setEmail('');
            setPassword('');
            alert('User account created & signed in!');
          
        })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              alert('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              alert('That email address is invalid!');
            }
        
            console.error(error);
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
        <Text style={{fontSize:SIZES.padding,alignSelf:'center',fontWeight:'bold',color:COLORS.black}}>Register</Text>
        </View>
       
       <Formi  value={email} onChangeText={(value)=>{setEmail(value) }} placeholder="Enter the value of Email"/>
       <Formi  value={password} onChangeText={(value)=>{setPassword(value) }} placeholder="Enter the value of Email"/>
        <Button title="Register" style={{padding:10}} color={COLORS.black} 
                onPress={()=>authCreateUser()}  />
        <TouchableOpacity style={Styles.loginTO} onPress={()=>navigation.navigate('Login')} >
              <Text>Already Register? LOGIN</Text></TouchableOpacity>
       </View>
    
  )}

export default RegisterUser
