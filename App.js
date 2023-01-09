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

import { LoginContext } from './context/LoginContext';
import ImageDisplay from './screens/ImageDisplay';

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
  <LoginContext.Provider>
<NavigationContainer >
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      {isSignedIn ? (
      <>
    <Stack.Screen name="ImageDisplay" component={ImageDisplay} />
     <Stack.Screen name="Home" component={Home}  />
     <Stack.Screen name="MobileDetails" component={MobileParticulars} />

     </>
    ):(
    <> 
  
     <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="RegisterUser" component={RegisterUser} />
     </>
    )}
  </Stack.Navigator>
  </NavigationContainer>
  </LoginContext.Provider>
  </Provider>
  </>
  )} 
  
export default App
