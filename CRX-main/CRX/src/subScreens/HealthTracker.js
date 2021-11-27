import React, { useRef,useState, useEffect } from 'react';



import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, SelectGroup, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { app_name, API, API1, API_VERSION, cipher } from '../_Configuration';

import { StyleSheet,Keyboard, SafeAreaView, TouchableWithoutFeedback, Image, useWindowDimensions, View, DrawerLayoutAndroid, ImageBackground, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { IndexPath, Drawer, DrawerItem, BottomNavigation, BottomNavigationTab, Button, Datepicker, Autocomplete, AutocompleteItem, RadioGroup, Radio, Card, CheckBox, Divider, Layout, TopNavigation, Icon, Input, Text, TopNavigationAction } from '@ui-kitten/components';
import { BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';
// import {storeData, getData} from './_AsyncStorage';
import SelectMultiple from '@horizonlime/react-native-select-multiple'


export const  HealthTracker = ({navigation,route}) => {
   const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
   console.log(route.params)
    const [age,setAge] = React.useState(route.params.age);
    const [gender,setGender] = React.useState(route.params.gender);
    const [hone,sethOne] = React.useState(0);
    const [htwo,sethTwo] = React.useState(0);
    const [hthree,sethThree] = React.useState(0);
    const [hfour,sethFour] = React.useState(0);
    const [hfive,sethFive] = React.useState(0);
    const [hsix,sethSix] = React.useState(0);
    const [hseven,sethSeven] = React.useState(0);
    const [height,sethEight] = React.useState(0);
    const [hnine,sethNine] = React.useState(0);
    const [hten,sethTen] = React.useState(0);
    const [heleven,sethEleven] = React.useState(0);
    const [htwelve,sethTwelve] = React.useState(0);
    const [hcaught,sethCaught] = React.useState(0);
    const [hrespose,sethRespose] = React.useState(2);
    let pneu = (hcaught==0)?'':'Penumonia ';
    let diabe = (hone==0)?'': '/Diabetes ';
    let copd = (htwo==0)?'': '/COPD ';
    let asthma = (hthree==0)?'': '/Asthma ';
    let hyper = (hfour==0)?'': '/Hypertension';
    let cradio = (hfive==0)?'': '/Cardiovascular ';
    let obesity = (hsix==0)?'': '/Obesity ';
    let Renal_c = (hseven==0)?'': '/Renal chronic ';
    let Tabacco = (height==0)?'': '/Tabacco ';
    let covid_m = (hnine==0)?'': '/Exposured to Covid patient ';
    let get_medic = (hten==0)?'': '/Get medicines ';
    let other_d = (heleven==0)?'': '/Suffring other Details ';
    let symptom_p = (htwelve==0)?'': '/Patient symptoms Progress ';
    
      
    console.log('heath issues : '+pneu+diabe+copd+asthma+hyper+cradio+obesity+Renal_c+Tabacco+covid_m+get_medic+other_d+symptom_p);
 
   

    const getResults=()=> {
        console.log('claed API');
        var e= this;
        var xdata = {
            sex:gender,
            age:age,
            patient_type:hten,
            pneumonia:hcaught,
            diabetes:hone,
            copd:htwo,
            asthma:hthree,
            hypertension:hfour,
            other_disease:heleven,
            obesity:hsix,
            cardiovascular:hfive,
            renal_chronic:hseven,
            tobacco:height,
            contact_other_covid:hnine
        };
        API1.post('api/heathhistory',xdata)
        .then(function (response) {
          
          if(response){
            // setPricing(response.data.co);
                console.log("Health traker response", response.data);
                if( response.data==1){
                    sethRespose(1);
                }else{
                   sethRespose(0);
                }
            }else{
                console.log("Health screen failed", response.data); 
            }
        })
        .catch(function (error) {
            console.log("Health screen error", error.message);
          
        });
    }
    
    const selectGroup =()=>{
        if (hcaught==1){
            sethCaught(0);
        }else{
            sethCaught(1);
        }
    }
    
   
    
  return (
      <Layout style={{backgroundColor:'#fff',height:windowHeight,width:windowWidth}}>
        <View style={{height:70,justifyContent:'center',alignItems:'center',backgroundColor:'#00bfff'}}>
            <Text category='h3' style={{color:'#fff',fontWeight:'bold'}}>Health Tracker</Text>
        </View>
        <View style={{alignItems:'center',marginTop:10}}>
                <Card style={{backgroundColor:'#d6ffff',width:windowWidth-10}}>
                    <Text category='h6' style={{fontWeight:'bold'}}>Choose your Health History Related Issues:</Text>
                    <ScrollView>
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 5, flexWrap: 'wrap', alignItems: 'flex-start'}}>
                            <TouchableOpacity 
                                onPress={()=>selectGroup()}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5,paddingHorizontal:10, margin: 1, backgroundColor: (hcaught==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Pneumonia</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(hone==0){sethOne(1);}else{sethOne(0);}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40, margin: 1,paddingHorizontal:20, backgroundColor: (hone==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Diabetes</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(height==0){sethEight(1)}else{sethEight(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5,paddingHorizontal:10, margin: 1, backgroundColor: (height==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Tobacco</Text>
                                </View>
                            </TouchableOpacity>                
                            <TouchableOpacity 
                                onPress={()=>{if(hfour==0){sethFour(1)}else{sethFour(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5,paddingHorizontal:10, margin: 1, backgroundColor: (hfour==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Hypertension</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(hthree==0){sethThree(1)}else{sethThree(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:2,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,paddingHorizontal:10,padding:5,margin: 1, backgroundColor: (hthree==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Asthma</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(htwo==0){sethTwo(1)}else{sethTwo(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,paddingHorizontal:20,padding:5, margin: 1, backgroundColor: (htwo==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>COPD</Text>
                                </View>
                            </TouchableOpacity>                      
                            <TouchableOpacity
                                onPress={()=>{if(hsix==0){sethSix(1)}else{sethSix(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,paddingHorizontal:5,padding:5, margin: 1, backgroundColor: (hsix==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Obesity</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(hseven==0){sethSeven(1)}else{sethSeven(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5,paddingHorizontal:5, margin: 1, backgroundColor: (hseven==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Renal Chronic</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(hfive==0){sethFive(1)}else{sethFive(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (hfive==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Cardiovascular</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    
                        <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(hnine==0){sethNine(1)}else{sethNine(0)}}}>
                            <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                                <Text>Exposure to COVID-19 patients :</Text>
                                <Icon style={styles.icon} fill='#8F9BB3'    name={(hnine==1)?'checkmark-square-2-outline':'square-outline'}/>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(hten==0){sethTen(1)}else{sethTen(0)}}}>
                            <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                                <Text>Are you on medication for any sickness :</Text>
                                <Icon style={styles.icon} fill='#8F9BB3'    name={(hten==1)?'checkmark-square-2-outline':'square-outline'}/>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(heleven==0){sethEleven(1)}else{sethEleven(0)}}}>
                            <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                                <Text>Are you suffering from any other disease :</Text>
                                <Icon style={styles.icon} fill='#8F9BB3'    name={(heleven==1)?'checkmark-square-2-outline':'square-outline'}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </Card>	
            </View>
 {(hrespose==1)?
 <View style={{alignItems:'center'}}><Card style={{width:windowWidth-20,marginVertical:15,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,width:windowWidth-20, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#6fc75b',justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#54ff7f'}}>
               <Text style={{fontSize:17,textAlign:'center'}}>According to this test you may be in a </Text>
            <Text style={{color:'green',textAlign:'center'}}>LOW RISK LEVEL</Text> 
      </Card>
      <Text  style={{textAlign:'center',margin:10}}>Please take the other tests provided by the CoviDoc and verify your results.Stay safe</Text></View>
      :(hrespose==0)?<View style={{alignItems:'center'}}>
          <Card style={{marginVertical:15,shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,width:windowWidth-20, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#ffd6d9'}}>
            <Text style={{fontSize:17,textAlign:'center'}}>According to this test you may be in a </Text>
            <Text style={{color:'red',textAlign:'center'}}>HIGH RISK LEVEL</Text> 

        </Card>
      <Text  style={{textAlign:'center',margin:10}}>Please take the other tests provided by the CoviDoc and verify your results.Stay safe</Text>
      </View>
      :(hrespose==2)?<View style={{alignItems:'center'}}>
      <TouchableOpacity 
          onPress={()=>{getResults();sethRespose(3);}}>
          <View style={{height:50,width:200,marginVertical:20,justifyContent:'center',alignItems:'center',backgroundColor:'#0073e6',borderRadius:30}}>
              <Text category='h5' style={{color:'#fff',textAlign:'center'}}>Check</Text>
        </View>
      </TouchableOpacity>
  </View>:(hrespose==3)?<View style={{marginVertical:50}}><MaterialIndicator size={25}/></View>:null}
      <View style={{alignItems:'center'}}>
      <TouchableOpacity onPress={()=>{sethRespose(2);}}>
      <View  style={{height:50,width:200,backgroundColor:'#b3cccc',justifyContent:'center',alignItems:'center',borderRadius:30}}><Text category='h5' style={{color:'#fff',textAlign:'center'}}>Clear</Text></View>
      </TouchableOpacity>
    </View>
                

      </Layout>

  );
}

const styles = StyleSheet.create({
    text: {
      color: "white",
      fontWeight:'bold'
      
    },
    icon:{
        height:20, width:20
    },resultcard:{
        
    }
  });