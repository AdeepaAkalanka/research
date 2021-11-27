import React, { useRef,useState, useEffect } from 'react';


import { app_name, API2, API_VERSION, cipher } from './_Configuration';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import {AppNavigator} from './_Navigation';
//const { Navigator, Screen } = createStackNavigator();
import { StyleSheet,Keyboard, SafeAreaView, TouchableWithoutFeedback, Image, useWindowDimensions, View, DrawerLayoutAndroid, ImageBackground, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { IndexPath, Drawer, DrawerItem, BottomNavigation, BottomNavigationTab, Button, Datepicker, Autocomplete, AutocompleteItem, RadioGroup, Radio, Card, CheckBox, Divider, Layout, TopNavigation, Icon, Input, Text, TopNavigationAction } from '@ui-kitten/components';
import { BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';
// import {storeData, getData} from './_AsyncStorage';



export const  MainScreen = ({navigation,route}) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const Uname ='Randima'
    const [age,setAge] = React.useState(route.params.age);
    const [gender,setGender] = React.useState(route.params.gender);
    const [name,setName] = React.useState(route.params.name);
    const [localtot,setLocaltot] = React.useState();
    const [localnew,setLocalnew] = React.useState();
    const [globaltot,setGlobaltot] = React.useState();
    const [globalnew,setGlobalnew] = React.useState();
    const [date,setDate] = React.useState();

const styles = StyleSheet.create({
    text: {
      color: "#fff",fontSize:15
     
      
    },
    icon:{
        height:20, width:20
    },
    counter:{
        width:windowWidth/3-40,margin:5,
        justifyContent:'center', alignItems:'center',backgroundColor:'orange'
    },counter2:{
        width:windowWidth/3-40,marginVertical:5,
        justifyContent:'center', alignItems:'center',
    },
    textbold:{
        fontWeight:'bold',color:'#fff'
    },
    card:{
        width:windowWidth/2-20,height:120,justifyContent:'center',
        borderRadius:10,
       backgroundColor:'#fff' ,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
    },image:{
        height:60,width:60,
    },text1:{
        color:'#111',fontSize:18,textAlign: 'center',
    },cardview:{
        backgroundColor:'#fff',borderRadius:200,width:60,height:60,justifyContent:'center',marginLeft:windowWidth/8-15
        // shadowColor: "#000",
        //     shadowOffset: {
        //         width: 0,
        //         height: 2,
        //     },
        //     shadowOpacity: 0.32,
        //     shadowRadius: 5.46,
        //     elevation: 9, 
    },shadow:{
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
    },largecard:{
        backgroundColor:'#fff', width:windowWidth-30,borderRadius:10,
    },text2:{
        fontSize:12,color:"#fff",textAlign:'center'
    }
    
  });


  useEffect(() => {
    console.log('news');
    var e= this;
   
    API2.get('api/get-current-statistical')
    .then(function (response) {
    console.log(response.data.data.local_new_cases);
    setLocaltot(response.data.data.local_total_cases);
    setLocalnew(response.data.data.local_new_cases);
    setGlobaltot(response.data.data.global_total_cases);
    setGlobalnew(response.data.data.global_new_cases);
    setDate(response.data.data.update_date_time);
    })
    .catch(function (error) {
        console.log("user screen - home - error", error.message);
    });
});


function convertToInternationalNumberSystem (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

}


    // const getPrice  = () => {
    //     console.log('news');
    //     var e= this;
    //     var xdata = {img:this.state.image1};
    //     API.post('predic/xray',xdata)
    //     .then(function (response) {
          
    //       if(response){
    //         // setPricing(response.data.co);
    //             console.log("user screen - pricing - success", response.data);
    //              e.setState({xrayResponse: response.data});
    //             //   () => {console.log("this will be fired after setstate complete",e.state.pricing);
    //             // });
                
    //         }else{
    //             console.log("user screen - home - failed", response.data);
                
    //         }
    //     })
    //     .catch(function (error) {
    //         console.log("user screen - home - error", error.message);
          
    //     });
    //   }
  return (
    <Layout style={{backgroundColor:'#ededed',height:windowHeight-20,width:windowWidth,}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:70,backgroundColor:'#00bfff',marginBottom:10}}>
            <Text category='h3'style={{marginLeft:10,color:'#fff',fontWeight:'bold'}}>CoviDoc</Text>
        </View>
        <ScrollView>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Card style={styles.shadow,styles.largecard}>
                <Text category='h6' style={{color:'#111',fontWeight:'bold'}}>Coronavirus Cases - Worldometer</Text>
                <View style={{flexDirection:'row',marginVertical:5,}}>
                    <View style={{width:windowWidth/3-30,marginVertical:5, justifyContent:'space-around', alignItems:'center',backgroundColor:'#ff0000'}}>
                        <View>
                            <Text style={styles.text}>Total Cases</Text>
                            <Text style={styles.text2}>Sri Lanka</Text>
                        </View>
                        <Text style={styles.textbold}>{convertToInternationalNumberSystem(localtot)} </Text>
                    </View >
                    <View style={{width:windowWidth/3-30,marginVertical:5,marginLeft:5, justifyContent:'space-around', alignItems:'center',backgroundColor:'#33cc33'}}>
                        <View>
                            <Text style={styles.text}>New Cases</Text>
                            <Text style={styles.text2}>Sri Lanka</Text>
                        </View>
                        <Text style={styles.textbold}>{convertToInternationalNumberSystem(localnew)} </Text>
                    </View>
                    <View style={{width:windowWidth/3-30,marginVertical:5, justifyContent:'center', alignItems:'center'}}>
                        <View style={{ width:windowWidth/3-30,marginBottom:2,marginLeft:10,justifyContent:'center', alignItems:'center',backgroundColor:'#0066ff'}}>
                            <Text style={styles.text}>Total Cases</Text>
                            <Text style={styles.text2}>World</Text>
                            <Text style={styles.textbold}>{convertToInternationalNumberSystem(globaltot)} </Text>
                        </View >
                        <View style={{ width:windowWidth/3-30,marginTop:3,justifyContent:'center', alignItems:'center',marginLeft:10,backgroundColor:'#b300b3'}}>
                            <Text style={styles.text}>New Cases</Text>
                            <Text style={styles.text2}>World</Text>
                            <Text style={styles.textbold}>{convertToInternationalNumberSystem(globalnew)} </Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginVertical:10}}>
                    <View style={{width:windowWidth,justifyContent:'center'}}>
                        <Text style={{fontSize:12,color:'#0ab2f0'}}>Last Updated at {date}</Text>
                    </View > 
                </View>
            </Card>
        </View> 
    
    <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
        <View >
            <Card onPress={()=>{ console.log('press');navigation.navigate("symptom",{age: age,gender:gender});}} style={styles.card}>
            <View  style={styles.cardview}>
                <Image style={styles.image}source={require('./Images/2.png')}></Image>
            </View>
                <Text style={styles.text1}>Symptom Tracker</Text>
            </Card>
        </View>
        <View>
            <Card  onPress={()=>{ console.log('press');navigation.navigate("helth",{age: age,gender:gender});}} style={styles.card}>
                
            <View  style={styles.cardview}>
                <Image style={styles.image}source={require('./Images/1.png')}></Image>
            </View>
            <Text style={styles.text1}>Health History Tracker</Text>
            </Card>
        </View>
    </View>
     <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
          <View>
              <Card  onPress={()=>{ console.log('press');navigation.navigate("breathtime",{age: age,gender:gender});}} style={styles.card}>
              <View  style={styles.cardview}>
                  <Image style={styles.image}source={require('./Images/5.png')}></Image>
              </View>
                  <Text style={styles.text1}>Breathing Analysis</Text>
              </Card>
          </View>
          <View>
              <Card onPress={()=>{ console.log('press');navigation.navigate("ctimage",{uid: 1,});}} style={styles.card}>
                  
              <View  style={styles.cardview}>
                  <Image style={styles.image}source={require('./Images/6.png')}></Image>
              </View>
              <Text style={styles.text1}>CT Image Analysis</Text>
                  
              </Card>
          </View>
     </View>
     <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
          <View>
              <Card onPress={()=>{ console.log('press');navigation.navigate("xray",{uid: 1,});}} style={styles.card}>
                  <View style={styles.cardview}>
                      <Image style={styles.image}source={require('./Images/3.png')}></Image>
                  </View>
                  <View style={{textAlign: 'center'}}>
                  <Text style={styles.text1}>Xray Image Analysis</Text>
                  </View>
              </Card>
          </View>
          <View>
              <Card onPress={()=>{ console.log('press');navigation.navigate("full",{age: age,gender:gender,name:name,navigation:navigation});}}style={styles.card}>
                  <View style={styles.cardview}>
                      <Image style={styles.image}source={require('./Images/4.png')}></Image>
                  </View>
                  <Text style={styles.text1}>Full Checkup</Text>
              </Card>
          </View>
     </View>
     
     </ScrollView>
</Layout>
   
  );
  
}

