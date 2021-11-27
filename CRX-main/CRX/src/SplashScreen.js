import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, useWindowDimensions, View, ImageBackground } from 'react-native';
import { Button, Layout, Icon, Text, useTheme } from '@ui-kitten/components';
import { /*BallIndicator, BarIndicator, DotIndicator, */ MaterialIndicator/*, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,*/} from 'react-native-indicators';
//import {storeData, getData} from './_AsyncStorage';
//import { app_name, API, API_VERSION, ThemeContext, cipher } from './_Configuration';
//import CryptoJS from "react-native-crypto-js";
//unused imports removed

export const SplashScreen = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [init, setInit] = React.useState(0);
  

 //navigation.reset({index: 0, routes: [{ name: 'register' }],});
 useEffect(()=>{
        // }
        if(init == 0){
         
            console.log('print --');
                     setInit(2);
            }
           
              setTimeout( ()=>{navigation.reset({index: 0, routes: [{ name: 'results' }], navigation:navigation});},3000);

    }, init);
   

  return (
    <SafeAreaView style={{ flex: 1 }}>
  
      <Layout style={{  alignItems: 'center', backgroundColor: '#afe3e3',height:windowHeight }}>
    <View style={{justifyContent:'center',alignItems:'center',height:windowHeight,width:windowWidth}}>
        <View style={{width:windowWidth*0.66,marginTop:50,alignItems:'center',backgroundColor:'#fff',borderRadius:200}}><Image source={require('./Images/f.png')}></Image></View>
        <View style={{height: 150, marginTop:10}}>
          <Text style={{textAlign:'center',fontSize:45,fontWeight:'bold',color:'#fff',marginVertical:2}}>CoviDoc</Text>
          <MaterialIndicator size={30} color="white"/>
       
        </View>
    </View>
      </Layout>
    
    </SafeAreaView>
  );
};
