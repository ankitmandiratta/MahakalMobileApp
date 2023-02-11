import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React,{useState,useReducer,useContext,useEffect,useMemo} from 'react'
import MobileParticulars from './screens/MobileParticulars'
import dummyData from './constants/dummyData'
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';
import { Login, RegisterUser } from './screens/logIn';
import { LoginContext } from './context/LoginContext';
import DraweNav from './screens/DrawerNav';
import ImageDisplay from './screens/ImageDisplay';
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Stack = createStackNavigator();
const App = () => {

  const initialState={
    isLoading:false,
    userName:'',
    userToken:''
  }

  useEffect(()=>{
    setTimeout(async()=>{
      //setIsLoading(false)
      let userToken = null
      console.log('here sis error')
      try {
      userToken= await AsyncStorage.getItem('userToken')
      } catch (e) {
      console.log(e)
      }      

      dispatch({type:'Login',token:userToken})
    },1000)
  },[])


loginReducer =(prevState,action)=>{

  switch(action.type){

    case 'RETRIEVE_TOKEN':
            return{
              ...prevState,
              userToken:action.token,
              isLoading:false
            }      

    case 'Login':
      return{
        ...prevState,
 //       userName:action.id,
        userToken:action.token,
        isLoading:false,

      }

    case 'Logout':
        return{
          ...prevState,
          userName:null,
          userToken:null,
          isLoading:false
        }

    case 'Register':
          return{
            ...prevState,
            isLoading:false,
            userToken:action.token,
          }
  }
}


const [loginState,dispatch] = useReducer(loginReducer,initialState)

const authContext =useMemo(()=>({
      signIn:async(email)=>{ 
      let userToken=email
         try {
        await AsyncStorage.setItem('userToken', userToken)
      }
       catch (e) {
       alert(e)
        }
      dispatch({type:'Login',id:email,token:userToken})
     },

     signOut:async()=>{
      try {
         await AsyncStorage.removeItem('userToken')
       } 
       catch (e) {
        alert(e)
        console.log(e)
       }
        dispatch({type:'Logout'})
     // setUserToken(null),
     // setIsLoading(false)
   },
   signUp:async(email)=>{
       let userToken=email
         try {
        await AsyncStorage.setItem('userToken', userToken)
      }
       catch (e) {
       alert(e)
        }
      dispatch({type:'Register',id:email,token:userToken})

      }

    }),[])

  const DATA =dummyData.categories
  const PHONES = dummyData.phones

return (
  <Provider store={store}>
<LoginContext.Provider value={authContext}>
{loginState.userToken !=  null ?<>
<NavigationContainer >
   <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="DrawerNav">
    <Stack.Screen name="DrawerNav" component={DraweNav} />
   <Stack.Screen name="Home" component={Home} />
   <Stack.Screen name="MobileDetails"  component={MobileParticulars} />

     </Stack.Navigator>
    </NavigationContainer>

</>:
<>
<NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
   
    <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="RegisterUser" component={RegisterUser} />
     
     </Stack.Navigator>
    </NavigationContainer>
</>}
 </LoginContext.Provider>
 </Provider>
)}


  
export default App
