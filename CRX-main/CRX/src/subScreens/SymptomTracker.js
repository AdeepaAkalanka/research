import React, { useRef,useState, useEffect } from 'react';



import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, SelectGroup, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { app_name, API, API1, API_VERSION, cipher } from '../_Configuration';

import { StyleSheet,Keyboard, SafeAreaView, TouchableWithoutFeedback, Image, useWindowDimensions, View, DrawerLayoutAndroid, ImageBackground, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { IndexPath, Drawer, DrawerItem, BottomNavigation, BottomNavigationTab, Button, Datepicker, Autocomplete, AutocompleteItem, RadioGroup, Radio, Card, CheckBox, Divider, Layout, TopNavigation, Icon, Input, Text, TopNavigationAction } from '@ui-kitten/components';
import { BallIndicator, BarIndicator, DotIndicator,TextLoader, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';
// import {storeData, getData} from './_AsyncStorage';
import SelectMultiple from '@horizonlime/react-native-select-multiple'
// import { LinesLoader,CirclesLoader,TextLoader,MaterialIndicator} from 'react-native-indicators';

export const  SymptomTracker = ({navigation,route}) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
   
    const [age,setAge] = React.useState(route.params.age);
    const [gender,setGender] = React.useState(route.params.gender);

    const [one,setOne] = React.useState(0);
    const [two,setTwo] = React.useState(0);
    const [three,setThree] = React.useState(0);
    const [four,setFour] = React.useState(0);
    const [five,setFive] = React.useState(0);
    const [six,setSix] = React.useState(0);
    const [seven,setSeven] = React.useState(0);
    const [eight,setEight] = React.useState(0);
    const [nine,setNine] = React.useState(0);
    const [ten,setTen] = React.useState(0);
    const [eleven,setEleven] = React.useState(0);
    const [caught,setCaught] = React.useState(0);
    const [twelve,setTwelve] = React.useState(0);
    const [respose,setRespose] = React.useState(4);
    const [stresults,setStresults] = React.useState("");

   
    let dry_c = (caught==0)?'':'Dry Caough ';
    let Sore_t = (one==0)?'': '/Sore Thoat ';
    let runn_n = (two==0)?'': '/Running Nose ';
    let fever = (three==0)?'': '/Fever ';
    let breath_p = (four==0)?'': '/Breathing Issues ';
    let fatigue = (five==0)?'': '/Fatigue ';
    let headache = (six==0)?'': '/Headache ';
    let drowsines = (seven==0)?'': '/droesiness ';
    let chest_p = (eight==0)?'': '/Chest pain ';
    let stroke = (nine==0)?'': '/Stroke ';
    let appetide = (ten==0)?'': '/chnage in appetied ';
    let loss_s = (eleven==0)?'': '/Loss smell ';
    let symptom_p = (twelve==0)?'': '/Patient symptoms Progress ';
    
      
    console.log('Patient Symptoms '+dry_c+ Sore_t +runn_n+fever+breath_p+fatigue+headache+drowsines+chest_p+stroke+appetide+loss_s+symptom_p);
 
   


    const selectGroup =()=>{
        if (caught==1){
        setCaught(0);
        }else{
            setCaught(1);
        }
    }
    const getRiskl=()=> {
        console.log('symptoms api call');
        var e= this;
        var xdata = {
            age :age,
            gender :gender,
            body_temperature :"120",
            Dry_Cough :caught,
            sour_throat :one,
            weakness :five,
            breathing_problem :four,
            drowsiness :seven,
            pain_in_chest:eight,
            stroke_or_reduced_immunity:nine,
            symptoms_progressed:twelve,
            change_appetide:ten,
            Loss_smell :eleven
        };
        API1.post('api/RiskLevel',xdata)
        .then(function (response) {
        
        if(response){
                console.log("symptoms screen- risk level prediction - success", response.data);
                if( response.data==0){
                console.log(response.data);
                setRespose(1);
                }else if( response.data==1){
                    console.log(response.data);
                    setRespose(2);
                }else{
                setRespose(3);
                console.log(response.data);
                } 
            }else{
                console.log("symptom screen - risk level prediction - failed", response.data);   
            }
        })
        .catch(function (error) {
            console.log("symptom screen - risk level prediction - error", error.message);
        });
    }

    const getResults=()=> {
        console.log('get symptom results');
        var e= this;
        var xdata = {
            breathing_problem:four,
            Fever:three,
            dry_cough:caught,
            sore_throat:one,
            running_nose:two,
            headache:six,
            fatigue:five
        };
        API1.post('api/covid',xdata)
        .then(function (response) {
        
        if(response){
                console.log("symptom screen - covid prediction - success", response.data);
                if( response.data==1){
                   
                    getRiskl();
                }else{
                setRespose(0);
                }
            }else{
                console.log("symptom screen - covid prediction - failed", response.data);
            }
        })
        .catch(function (error) {
            console.log("symptom screen - covid prediction - error", error.message);
        });
    }
    
  return (
    <Layout style={{backgroundColor:'#f2e5fe',height:windowHeight,width:windowWidth,backgroundColor:'white'}}>
        <View style={{height:70,justifyContent:'center',alignItems:'center',backgroundColor:'#00bfff'}}>
            <Text category='h3' style={{color:'#fff',fontWeight:'bold'}}>Symptom Tracker</Text>
        </View>
        <View style={{alignItems:'center',marginTop:10}}>
            <Card style={{backgroundColor:'#d6ffff',width:windowWidth-10}}>
                <Text>Choose your symptoms:</Text>
                <ScrollView>
                    <View style={{flex: 1, flexDirection: 'row', marginTop: 5, flexWrap: 'wrap', alignItems: 'flex-start'}}>
                        <TouchableOpacity 
                            onPress={()=>selectGroup()}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                        <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (caught==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Dry Cough</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>{if(one==0){setOne(1);}else{setOne(0);}}}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (one==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Sore throat</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>{if(two==0){setTwo(1)}else{setTwo(0)}}}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (two==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Running Nose</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>{if(three==0){setThree(1)}else{setThree(0)}}}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (three==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Fever</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>{if(four==0){setFour(1)}else{setFour(0)}}}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (four==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                    <Text style={{marginVertical: 2,textAlign:'center', marginHorizontal: 2, color: 'black'}}>Breathing Problem</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>{if(five==0){setFive(1)}else{setFive(0)}}}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (five==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Fatigue</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{if(six==0){setSix(1)}else{setSix(0)}}}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (six==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Headache</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{if(seven==0){setSeven(1)}else{setSeven(0)}}}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (seven==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Drowsiness</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{if(eight==0){setEight(1)}else{setEight(0)}}}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (eight==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Chest Pain</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{if(nine==0){setNine(1)}else{setNine(0)}}}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (nine==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Stroke </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{if(ten==0){setTen(1)}else{setTen(0)}}}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (ten==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Change in appetide</Text>
                            </View>
                        </TouchableOpacity>	
                        <TouchableOpacity
                            onPress={()=>{if(eleven==0){setEleven(1)}else{setEleven(0)}}}
                                style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1,backgroundColor: (eleven==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                            
                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Loss Smell</Text>
                            </View>
                        </TouchableOpacity>					
                    </View>      
                </ScrollView>
                <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(twelve==0){setTwelve(1)}else{setTwelve(0)}}}>
                    <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                        <Text>Symtoms are increasing by the time :</Text>
                        <Icon style={styles.icon} fill='#8F9BB3'    name={(twelve==1)?'checkmark-square-2-outline':'square-outline'}/>
                    </View>
                </TouchableWithoutFeedback>
            </Card>
        </View>    
                
                		
            {(respose==0)?
             <View style={{alignItems:'center'}}>
             <Card style={{width:windowWidth-20,marginVertical:15,shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 4,
             },
             shadowOpacity: 0.32,
             shadowRadius: 5.46,
             elevation: 9,width:windowWidth-20, justifyContent: 'center', alignItems: 'center',marginTop:20,justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#54ff7f'}}>
                 <Text style={{fontSize:17,textAlign:'center'}}>According to this test you may be in a </Text>
                 <Text style={{color:'green',textAlign:'center'}}>NEGATIVE </Text> 
             </Card>
             <Text  style={{textAlign:'center',margin:10}}>Please take the other tests provided by the CoviDoc and verify your results.Stay safe</Text>
         </View>
                
            // You may in the negative for COVID-19 according to this test
                   
            :(respose==1)?
            <View style={{alignItems:'center'}}>
                <Card style={{width:windowWidth-20,marginVertical:15,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,width:windowWidth-20, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#ffd6d9',justifyContent: 'center', alignItems: 'center',marginTop:20,}}>
                    <Text style={{fontSize:17,textAlign:'center'}}>According to this test you may be in a </Text>
                    <Text style={{color:'red',textAlign:'center'}}>LOW RISK LEVEL</Text> 
                </Card>
                <Text  style={{textAlign:'center',margin:10}}>Please take the other tests provided by the CoviDoc and verify your results.Stay safe</Text>
            </View>
            :(respose==2)?
            <View style={{alignItems:'center'}}>
                <Card style={{width:windowWidth-20,marginVertical:15,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,width:windowWidth-20, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#ffd6d9',justifyContent: 'center', alignItems: 'center',marginTop:20,}}>
                    <Text style={{fontSize:17,textAlign:'center'}}>According to this test you may be in a </Text>
                    <Text style={{color:'red',textAlign:'center',fontWeight:'bold'}}>MEDIUM RISK LEVEL</Text> 
                </Card>
                <Text  style={{textAlign:'center',margin:10}}>Please take the other tests provided by the CoviDoc and verify your results.Stay safe</Text>
            </View>
            :(respose==3)?
            <View style={{alignItems:'center'}}>
                <Card style={{width:windowWidth-20,marginVertical:15,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,width:windowWidth-20, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#ffd6d9',justifyContent: 'center', alignItems: 'center',marginTop:20,}}>
                    <Text style={{fontSize:17,textAlign:'center'}}>According to this test you may be in a </Text>
                    <Text style={{color:'red',textAlign:'center'}}>High RISK LEVEL</Text> 
                </Card>
                <Text  style={{textAlign:'center',margin:10}}>Please take the other tests provided by the CoviDoc and verify your results.Stay safe</Text>
            </View>
            :(respose==4)?
            <View style={{alignItems:'center'}}>
                <TouchableOpacity 
                    onPress={()=>{getResults();setRespose(5)}}>
                    <View style={{height:50,width:200,marginVertical:20,justifyContent:'center',alignItems:'center',backgroundColor:'#0073e6',borderRadius:30}}><Text category='h5' style={{color:'#fff',textAlign:'center'}}>Check</Text></View>
                </TouchableOpacity>
            </View>
            :(respose==5)?<View style={{margin:20}}><MaterialIndicator size={25}/></View>:null}
        <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{setRespose(4);}}>
                <View  style={{height:50,width:200,backgroundColor:'#979998',justifyContent:'center',alignItems:'center',borderRadius:30}}>
                    <Text category='h5' style={{color:'#fff',textAlign:'center'}}>Clear</Text>
                </View>
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
    }
  });