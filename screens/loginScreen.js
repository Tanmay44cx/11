import React from "react";
import {  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as firebase from "firebase";
import db from "../config.js";

export default class LoginScreen extends React.Component {
    constructor(){
        super()
        this.state={
            emailId:'',
            Password:''
        }

    }



    login=async(email,password)=>{
      if(email && password){
       try{
         const response = await firebase.auth().signInWithEmailAndPassword(email,password)
       if(response){
         console.log("1")
         this.props.navigation.navigate("Transaction")
       }
        }

      catch(error){
        console.log("2")
    switch(error.code){
      case 'auth/user-not-found':
        console.log("3")
      Alert.alert("User Dosent Exists")
      break;
      case 'auth/invalid-email':
        console.log("4")
      Alert.alert("Incorrect Email Password")
      break;
    }
      }
      }else{
        console.log("5")
        Alert.alert("Enter Email/Password")
      }
    }



    render(){ 
    return (
   <KeyboardAvoidingView>

         <View>
        <Image source={require("../assets/booklogo.jpg")}
        style={{width:200,height:200}}/>

        <Text
        style={{textAlign:"center",fontSize:30}}
        >
            WILLY
        </Text>
           </View>
           <View>
            <TextInput
            style={styles.loginBox}
            placeholder="abd@xyz.com"
            keyboardType="email-address"
            onChangeText={(text)=>{
                this.setState({emailId:text})
            }}
            
            />

<TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={(text)=>{
            this.setState({Password:text})
            }}
            
            />




           </View>
       <View>

     <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,borderRadius:5,paddingTop:5}}
              onPress={()=>{
              this.login(this.state.emailId,this.state.Password)


              }}    
 

     
     >
     
     <Text style={{textAlign:"center"}}
     
     >


     Login


     </Text>
     
     
     </TouchableOpacity>


        </View>
   </KeyboardAvoidingView>
    );}
  }

const styles = StyleSheet.create({
  loginBox:
  {
    width: 300,
  height: 40,
  borderWidth: 1.5,
  fontSize: 20,
  margin:10,
  paddingLeft:10
  }
})
