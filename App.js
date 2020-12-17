import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TransactionScreen from './screens/bookTransactionScreen'
import SearchScreen from './screens/searchScreen'
import LoginScreen from './screens/loginScreen'



export default class App extends React.Component {
  render(){ 
  return (
   <AppContainer/>    
  );}
}

var TabNavigator = createBottomTabNavigator({
  Transaction : {screen:TransactionScreen},
  Search:{screen:SearchScreen}
},
{
defaultNavigationOptions:({navigation})=>({
tabBarIcon:({})=>{
  const routeName=navigation.state.routeName
  if(routeName==='Transaction'){
    return(
      <Image
      source={require("./assets/book.png")}
      style={{
        width:40,
        height:40
      }}
      />
    )
  }else if(routeName==='Search'){
    return(
      <Image
      source={require("./assets/searchingbook.png")}
      style={{
        width:40,
        height:40
      }}
      />
    )
  }
}
})}

)
const switchNavigator = createSwitchNavigator({
LoginScreen:{screen:LoginScreen},
TabNavigator:{screen:TabNavigator},

})
const AppContainer = createAppContainer(switchNavigator)