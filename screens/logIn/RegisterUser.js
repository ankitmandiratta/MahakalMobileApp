import { StyleSheet, Text, View,Button,TouchableOpacity,Image  } from 'react-native'
import React,{useState,useContext,useEffect} from 'react'
import { SIZES,COLORS,icons } from '../../constants'
import Formi from '../../component/Formi'
import auth from '@react-native-firebase/auth';
import Styles from '../../styles/Styles'
import { LoginContext } from '../../context/LoginContext';
import {GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin'




const RegisterUser = ({navigation}) => {

  useEffect(()=>{

    GoogleSignin.configure({
    scopes:['email'],
    webClientId:'913206865285-5b34lkid3ncmiineebskbbkcucdiosf3.apps.googleusercontent.com',
    offlineAccess:true
  
  })
  },[])



 
  const {signUp} = useContext(LoginContext)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

//added google

const [loggedIn, setloggedIn] = useState(false);
const [userInfo, setuserInfo] = useState([]);


const GoogleSignUpp =async()=>{
  try {
     await GoogleSignin.hasPlayServices();
     const {user} = await GoogleSignin.signIn();

  authCreateGoogleUser(user.email,user.id)

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
      console.log('some error'+ error.message)
    
  }
}
}


const authCreateGoogleUser=(emaill,passwordd)=>{
  auth()
  .createUserWithEmailAndPassword(emaill, passwordd)
  .then(() => {
    alert('User account created.Now you can login');
    setEmail('');
    setPassword('');
    signUp(email)
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

    const authCreateUser=()=>{

        if(email.trim().length>0 && password.trim().length >4){
            auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            alert('User account created.Now you can login');
            setEmail('');
            setPassword('');
            signUp(email)

          
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
       
       <Formi  value={email} onChangeText={(value)=>{setEmail(value) }} placeholder="Enter your  Email Address"/>
       <Formi  value={password} onChangeText={(value)=>{setPassword(value) }} placeholder="Enter Password" secureTextEntry={true}/>
        <Button title="Register" style={{padding:10}} color={COLORS.black} 
                onPress={()=>authCreateUser()}  />
        <TouchableOpacity style={Styles.loginTO} onPress={()=>navigation.navigate('Login')} >
              <Text>Already Register? LOGIN</Text></TouchableOpacity>
      
      
      <View>
        <TouchableOpacity onPress={()=>GoogleSignUpp()}
        style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:SIZES.padding*2,borderRadius:10,borderWidth:1,borderColor:COLORS.gray,padding:SIZES.font}}
        >
          <Image source={icons.google} style={{height:30,width:30}}/>
          <Text style={{fontSize:SIZES.h3,fontWeight:'bold',color:COLORS.black,marginLeft:SIZES.radius}}>SignUp with Google</Text>
        </TouchableOpacity>
      </View>
      
{/* <GoogleSigninButton
style={{width:SIZES.width,marginHorizontal:SIZES.padding}}
onPress={()=>SignInWithGoogle()}

/> */}
       </View>
    
  )}

export default RegisterUser
