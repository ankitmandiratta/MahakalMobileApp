import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React,{useState} from 'react'
import MobileParticulars from './screens/MobileParticulars'
import dummyData from './constants/dummyData'
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';
import { Login, RegisterUser } from './screens/logIn';
import { AuthContext } from './component/Context';
import Trial from './Trial';
const Stack = createStackNavigator();
const App = () => {

  const initialLoginState={
    isLoading:false,
    userName:null,
    userToken:null,
    userID:null
  }
const [isSignedIn,setIsSignedIn]=useState(true)
const DATA =dummyData.categories
const PHONES = dummyData.phones
return (
<>

<Provider store={store}>
<NavigationContainer>
  
  
  <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
  {isSignedIn ? (
      <>
    <Stack.Screen name="Trial" component={Trial} />
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="MobileDetails" component={MobileParticulars} />
     </>
  ):(
  <> 

  <Stack.Screen name="RegisterUser" component={RegisterUser} />
  <Stack.Screen name="Login" component={Login} />

  
     </>
  ) 
  }
  </Stack.Navigator>

  </NavigationContainer>
  </Provider>
  </>
  )} 
  
export default App
