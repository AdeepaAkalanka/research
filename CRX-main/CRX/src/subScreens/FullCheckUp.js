import React, { useRef,useState, useEffect } from 'react';
import { app_name, API, API1, API_VERSION, cipher } from '../_Configuration';

import Mailer from 'react-native-mail';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, SelectGroup, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as ImagePicker from 'react-native-image-picker';

import { StyleSheet,TouchableWithoutFeedback,Keyboard,  TouchableHighlight, Image, useWindowDimensions, View, DrawerLayoutAndroid, ImageBackground, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Modal, Drawer, DrawerItem, BottomNavigation, BottomNavigationTab, Button, Datepicker, Autocomplete, AutocompleteItem, RadioGroup, Radio, Card, CheckBox, Divider, Layout, TopNavigation, Icon, Input, Text, TopNavigationAction } from '@ui-kitten/components';
import { BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';
// import {storeData, getData} from './_AsyncStorage';
import SelectMultiple from '@horizonlime/react-native-select-multiple'
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';
import {Progress} from '../CustomComponents/progress';
export const  FullCheckUp = ({navigation,route}) => {
  
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const [age,setAge] = React.useState(route.params.age);
    const [gender,setGender] = React.useState(route.params.gender);
    const [passion,setPassion] = React.useState([    ]);
   //symptoms collect
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
    let sym = '<b>Patient Symptoms :<b> '+dry_c+ Sore_t +runn_n+fever+breath_p+fatigue+headache+drowsines+chest_p+stroke+appetide+loss_s+symptom_p;
 
//health issues collect
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


let health = ' '+pneu+diabe+copd+asthma+hyper+cradio+obesity+Renal_c+Tabacco+covid_m+get_medic+other_d+symptom_p; 
let timesle = timeinsec; 
    const [step,setStep] = React.useState(1); // have four steps 
    const [visible, setVisible] = React.useState(false); // model for send mail. 
    const [image,setImage] = React.useState();//data image
    const [image1,setImage1] = React.useState();//base 64 image 
    const [selecttest,setSelecttest] = React.useState(0);// 0 - set Xray 1- ctimage
  
    const [isTimerStart, setIsTimerStart] = useState(false);
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(1000);
    const [resetTimer, setResetTimer] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    const [times, setTimes] = useState();
    const [timeinsec, setTimeinsec] = useState();
    const [respose, setRespose] = useState(2); //0= low risk 1- high risk, 2-not response
    const [xrayResults, setXrayResults] = useState();
    const [symptomResults, setSymptomResults] = useState();
    const [HealthResults, setHealthResults] = useState();
    const [ctResults, setCtResults] = useState();
    const [breathResults, setBreathResults] = useState();
    const [finalResults, setFinalResults] = useState(5); // 0-negative 2-covid 3-covid pneumonia 4-pneumonia
    const [equation,setEquation] = useState(0);
//ct image prediction
    const getCT = ()=> {
        if(selecttest==1){
            console.log('full check - CT image');
            var e= this;
            var xdata = {img:image1};
            API.post('predic/ct',xdata)
            .then(function (response) {
            
            if(response){
                    console.log("full check - CT- success", response.data);
                    setCtResults( response.data);
                    if(response.data=='Non Covid-19'){
                        setCtResults(0);
                    }else{
                        setCtResults(1);
                    }
                }else{
                    console.log("full check - CT - failed", response.data);
                }
            })
            .catch(function (error) {
                console.log("full check - CT - error", error.message);
            
            });
        }else{
            console.log('full check - xray');
            var e= this;
            var xdata = {img:image1};
            API.post('predic/xray',xdata)
            .then(function (response) {
               
            if(response){
                    console.log("full check - xray- success", response.data);
                    setXrayResults( response.data);
                    if (response.data == 'NORMAL'){
                        setXrayResults(0);
                    }else if (response.data== 'COVID19'){
                        setXrayResults(1);
                    }else if (response.data== 'PNEUMONIA'){
                        setXrayResults(2);
                    }else{

                    }
                }else{
                    console.log("full check - xray - failed", response.data);
                }
            })
            .catch(function (error) {
                console.log("full check - xray - error", error.message);
            
            });
        }
        
    }
    //covid risk level prediction function
    const getRiskl=()=> {
        console.log('risk level API called');
        var e= this;
        var xdata = {
            age :"28",
            gender :"1",
            body_temperature :"102",
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
                console.log("full check - risk level - success", response.data);
                if( response.data==0){
                console.log(response.data);
                setSymptomResults(1);
                setEquation(equation+1);
                }else if( response.data==1){
                    console.log(response.data);
                    setSymptomResults(2);
                    setEquation(equation+2);
                }else {
                    setRespose(3);
                    console.log(response.data);
                    setEquation(equation+3);
                } 
            }else{
                console.log("full check - risklevel- failed", response.data);   
            }
        })
        .catch(function (error) {
            console.log("full check - risklevel- error", error.message);
        });
    }
    //covid-19 dignosis function
    const getCovidres=()=> {
        console.log('news');
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
                console.log("full check - symptom prediction - success", response.data);
                if( response.data==1){
                    setSymptomResults(1);
                    getRiskl();
                }else{
                    setSymptomResults(0);
                }
            }else{
                console.log("full check - symptom prediction- failed", response.data);
            }
        })
        .catch(function (error) {
            console.log("full check - symptom prediction - error", error.message);
        });
    }
    //breath test function
    const getResults=()=> {
      console.log('news');
      var e= this;
      var xdata = {
        Age:age,
        Gender:gender,
        Time:timeinsec
      };
      API1.post('api/breath',xdata)
      .then(function (response) {
        
        if(response){
              console.log("Breath success", response.data);
              if( response.data==1){
                setBreathResults(1);
                finalresult();
                setEquation(equation+2.5);
              }else{
                setBreathResults(0);
                finalresult();
                setEquation(equation+1);
              }
          }else{
              console.log("user screen - home - failed", response.data);
              
          }
      })
      .catch(function (error) {
          console.log("user screen - home - error", error.message);
        
      });
    }
    //health history check function
    const getHealthresults=()=> {
        console.log('called API');
        var e= this;
        var xdata = {
            sex:0,
            age:0,
            patient_type:0,
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
                console.log("Health traker response", response.data);
                if( response.data==1){
                    setHealthResults(0);
                    setEquation(equation+1);
                    console.log('ht 1',equation)
                }else{
                    setHealthResults(1);
                    setEquation(equation+2.5);
                    console.log('ht 0',equation)
                }
            }else{
                console.log("Health screen failed", response.data);
            }
        })
        .catch(function (error) {
            console.log("Health screen error", error.message);
        });
    }
    //time in second
   function second(time){
        var hours,minutes,seconds;
        [hours, minutes, seconds] = time.split(':');
        var  totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
        setTimeinsec(totalSeconds);
    }
    //email send function
    const handleEmail = (news) => {
     
        Mailer.mail({
            subject: 'CoviDoc Patients ',
            recipients: ['example@gmail.com'],
            ccRecipients: ['it18125962@my.sliit.lk'],
            //bccRecipients: ['supportBCC@example.com'],
            body: 'This document provides portions of the medical tests done by the “CoviDoc” mobile app. Please note that this contains all of the tests results you took through “CoviDoc” required for a better analysis by the physician. These results are solely for validation purposes and to help physicians understand the risk levels. <br> Patient’s current symptoms are listed below:'+sym +'<br>Patient’s past health records are listed below :<br> '+health +'<br>Patient’s breathing time is seconds',
            isHTML: true,
            attachment: {
                path: '',  // The absolute path of the file from which to read data.
                type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
                //name: 'error.png',   // Optional: Custom filename for attachment
            }
        }, (error, event) => {
            console.log('errror', error)
        });
    };

    const finalresult=()=>{
        console.log('final');
        if (xrayResults==0||ctResults==0){//xray - results covid -19 negative
            if(symptomResults==0){//symptoms results - covid -19 negative
                setFinalResults(0);//final results negative
                console.log('final 0');
            }else {
                setFinalResults(2);//covid -19 positive
                console.log('final 2');
            }
        }else if (xrayResults== 1|| ctResults==1){//xray or ct results - covid pneumonia 
            setFinalResults(3);//results - covis pnumonia
            console.log('final 3');
        }else{
            setFinalResults(4);// pneumonia patient
            console.log('final 4');
        }
    }

    const selectGroup =()=>{
        if (caught==1){
        setCaught(0);
        }else{
            setCaught(1);
        }
    }
    const selectTest =()=>{
        if (selecttest==1){
            setSelecttest(0);
        }else{
            setSelecttest(1);
        }
    }
    //level up
   const nextstep = () => {
    console.log('Next step button pressed');
        if (step==1){
            setStep(2);
            getCT();
        }else if (step==2){
            setStep(3);
            getCovidres();
        }else if (step==3){
            setStep(4);
            
            getHealthresults();
            console.log('step three');
        }else{
            setStep(5);
            getResults();
        }
    }
    //level down
    const backstep = () => {
        console.log('pressed');
            if (step==5){
                setStep(4);
            }else if (step==4){
                setStep(3);
            }else if (step==3){
                setStep(2);
            }else{
                setStep(1);
            }
        }

  return (
      
     <Layout style={{backgroundColor:'#fff',height:windowHeight,width:windowWidth,justifyContent:'space-between'}}>
        <View style={{height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#7bc4e0'}}>
            <Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>Full CheckUp</Text>
        </View>
            
            {(step==1)? <View style={{height:windowHeight-135,justifyContent:'center',alignItems:'center'}}>     
                <View style={{height:50,flexDirection:'row',backgroundColor:(selecttest==0)?'white':null,}}>
                    <TouchableOpacity onPress={()=>{setSelecttest(0)}}style={(selecttest==0)?{justifyContent:'center',alignItems:'center',width:windowWidth/2,backgroundColor:'white',borderWidth:3,borderBottomColor:'white',borderColor:"blue"}:{justifyContent:'center',alignItems:'center',width:windowWidth/2,borderWidth:3,backgroundColor:'white',borderBottomColor:'blue',borderColor:'white'}}>
                        <View >
                            <Text>X-Ray</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setSelecttest(1)}}style={(selecttest==0)?{justifyContent:'center',alignItems:'center',width:windowWidth/2,backgroundColor:'white',borderWidth:3,borderBottomColor:'blue',borderColor:'white'}:{justifyContent:'center',alignItems:'center',width:windowWidth/2,borderWidth:3,backgroundColor:'white',borderBottomColor:'white',borderColor:"blue"}}>
                        <View >
                            <Text>CT Image</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{height:windowHeight-185,width:windowWidth,justifyContent: 'center',alignItems: 'center',paddingVertical:20,backgroundColor:'white',borderWidth:3,borderTopColor:'white',borderColor:"blue"}}>
                {(selecttest==0)?<View style={{borderWidth:1,padding:10,paddingVertical:20,borderColor:'#fff',width:windowWidth-100}}>
                        <Text category='h6' style={{textAlign:'center',fontWeight:'bold'}}>Just Upload A Photo Of Your Chest X-Ray And Make Sure The Photo Is Clear</Text>
                      </View>:<View style={{borderWidth:1,padding:10,paddingVertical:20,borderColor:'#fff',width:windowWidth-100}}>
                        <Text category='h6' style={{textAlign:'center',fontWeight:'bold'}}>Just Upload A Photo Of Your Chest CT Image And Make Sure The Photo Is Clear</Text>
                      </View>}
                    <View style={{borderWidth:0,borderColor:"blue",borderStyle:'dashed',paddingHorizontal:100,paddingVertical:30}}>
                      <TouchableOpacity  onPress={()=>{
                          ImagePicker.launchImageLibrary(
                            
                            {
                              mediaType: 'photo',
                              includeBase64: true,
                              maxHeight: 1024,
                              maxWidth: 1024,
                            },
                            (response) => {
                              if(response){
                                if(!!response.didCancel){
                                  console.log("response");
                                  // this.setState({image:'data:' + response.assets[0].type + ';base64,' + response.assets[0].base64,image1:"'''"  + response.assets[0].base64 +"'''"});                  
                                //   console.log('data:' + response.assets[0].type + ';base64,' + response.assets[0].base64);
                                }else{
                                setImage('data:'+ response.assets[0].type + ';base64,' + response.assets[0].base64 );  
                                setImage1(response.assets[0].base64)                
                                  console.log(response);
                                }
                                // console.log(response);
                              }
                            },
                          );
                        }}>
                          <Image style={(image)? {width:windowWidth, height:windowHeight*0.35,borderRadius: 10,marginLeft:0,marginRight:0}:{width:windowWidth/3,height:windowHeight/8}} source={(image) ? { uri:image }:require('./up.jpg')}/>
                     
                      {(image=='')? <Text style={{fontSize:20}}>Browse Image</Text>:null}
                      {(!image)?<Button onPress={()=>{
                          ImagePicker.launchImageLibrary(
                            
                            {
                              mediaType: 'photo',
                              includeBase64: true,
                              maxHeight: 1024,
                              maxWidth: 1024,
                            },
                            (response) => {
                              if(response){
                                if(!!response.didCancel){
                                  console.log("response");
                                  // this.setState({image:'data:' + response.assets[0].type + ';base64,' + response.assets[0].base64,image1:"'''"  + response.assets[0].base64 +"'''"});                  
                                  // console.log('data:' + response.assets[0].type + ';base64,' + response.assets[0].base64);
                                }else{
                                    setImage('data:'+ response.assets[0].type + ';base64,' + response.assets[0].base64 );  
                                    setImage1(response.assets[0].base64)                
                                      console.log(response);
                                }
                                // console.log(response);
                              }
                            },
                          );
                        }}style={{margin:2}} size='tiny'>Upload</Button>:null}
                      </TouchableOpacity>
                      </View>

                      {(image)?<View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{setImage('');setImage1('');}}>
              
                <View style={{height:40,width:150,marginVertical:20,justifyContent:'center',alignItems:'center',backgroundColor:'#979998',borderRadius:30}}><Text category='h6' style={{color:'#fff',textAlign:'center'}}>Clear image</Text></View>
            </TouchableOpacity>
        </View>:null}
                    </View>
                </View>:null}
                

            {(step==2)? <View style={{height:windowHeight-135}}>
                <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                    <Text>Choose your symptoms:</Text>
                    {/* <Icon style={styles.icon} fill='#8F9BB3'    name={(hidesectionOne==1)?'plus-square-outline':'minus-square-outline'}/> */}
                </View>
                {/* <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(hidesectionOne==0){setHidesectionOne(1)}else{setHidesectionOne(0)}}}></TouchableWithoutFeedback> */}
                <View style={{alignItems:'center'}}>
                <Card style={{backgroundColor:'#d6ffff',width:windowWidth-10}}>
                   
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
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Breathing Problem</Text>
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
                                onPress={()=>{if(ten==0){setEleven(1)}else{setEleven(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (eleven==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Loss Smell</Text>
                                </View>
                            </TouchableOpacity>					
                        </View>
                    </ScrollView>
                    <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(twelve==0){setTwelve(1)}else{setTwelve(0)}}}>
                        <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                            <Text>Is you Symptoms Progressed:</Text>
                            <Icon style={styles.icon} fill='#8F9BB3'    name={(twelve==1)?'checkmark-square-2-outline':'square-outline'}/>
                        </View>
                    </TouchableWithoutFeedback>
                </Card>
                </View>
                
            </View>:null} 
              

            {(step==3)?<View style={{height:windowHeight-135}}>   
               
                <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                <Text>Choose your Health History:</Text>
               
                </View>
               <View style={{alignItems:'center'}}>
                <Card style={{backgroundColor:'#d6ffff',width:windowWidth-10}}>
                    <ScrollView>
                        
                  
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 5, flexWrap: 'wrap', alignItems: 'flex-start'}}>
                            <TouchableOpacity 
                                onPress={()=>{if(hcaught==0){sethCaught(1);}else{sethCaught(0);}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (hcaught==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Pneumonia</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(hone==0){sethOne(1);}else{sethOne(0);}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (hone==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Diabetes</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={()=>{if(hthree==0){sethThree(1)}else{sethThree(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (hthree==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Asthma</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(hfour==0){sethFour(1)}else{sethFour(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (hfour==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Hypertension</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(hfive==0){sethFive(1)}else{sethFive(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (hfive==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Cardiovascular</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(hsix==0){sethSix(1)}else{sethSix(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (hsix==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Obesity</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(hseven==0){sethSeven(1)}else{sethSeven(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (hseven==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Renal Chronic</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(height==0){sethEight(1)}else{sethEight(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (height==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Tobacco</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(htwo==0){sethTwo(1)}else{sethTwo(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:20,height:40,padding:5, paddingHorizontal:5, margin: 1, backgroundColor: (htwo==0)?'#fff':'#668cff',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>COPD</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(hnine==0){sethNine(1)}else{sethNine(0)}}}>
                    <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                        <Text>do you know met Covid-19 patient:</Text>
                        <Icon style={styles.icon} fill='#8F9BB3'    name={(hnine==1)?'checkmark-square-2-outline':'square-outline'}/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(hten==0){sethTen(1)}else{sethTen(0)}}}>
                    <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                        <Text>Did you get medicine :</Text>
                        <Icon style={styles.icon} fill='#8F9BB3'    name={(hten==1)?'checkmark-square-2-outline':'square-outline'}/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(heleven==0){sethEleven(1)}else{sethEleven(0)}}}>
                    <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                        <Text>Did you fall other disease :</Text>
                        <Icon style={styles.icon} fill='#8F9BB3'    name={(heleven==1)?'checkmark-square-2-outline':'square-outline'}/>
                    </View>
                </TouchableWithoutFeedback>
                </Card>
                </View> 
            </View>:null} 
            {(step==4)?<View style={{height:windowHeight-135}}>   
            
                <Text style={styles.title}>
                Breath-holding Time Analysis 
                </Text>
                <View style={{alignItems:'center'}}>
                    <Image style={{height:125,width:250,borderRadius:70,margin:20,textAlign:'center'}} source={require('../Images/breath.jpg')}/>
                </View>
                <View style={styles.sectionStyle}>
                <Stopwatch
                    laps
                    
                    start={isStopwatchStart}
                    // To start
                    reset={resetStopwatch}
                    // To reset
                    options={options}
                    // Options for the styling
                    getTime={(time) => {
                    //   console.log(time);
                    setTimes(time);
                    }}
                />
                <View style={{flexDirection:'row',paddingVertical:20}}>
                    <TouchableOpacity
                    onPress={() => {
                        setIsStopwatchStart(!isStopwatchStart);
                        setResetStopwatch(false);
                        second(times);
                        setRespose(2);
                    }}><View style={styles.buttonText}>
                    <Text style={{fontWeight:'bold',color:'#0073e6'}}>
                        {!isStopwatchStart ? 'START' : 'STOP'}
                    </Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        setIsStopwatchStart(false);
                        setResetStopwatch(true);
                        setTimeinsec(0);
                        setRespose(2);
                    }}><View style={styles.buttonText}>
                    <Text style={{fontWeight:'bold',color:'#0073e6'}}>RESET</Text></View>
                    </TouchableOpacity>
                </View>
                <View style={{paddingVertical:20}}>
                <Card>
                    <Text style={{fontWeight:'bold'}}>Instructions </Text>
                    <Text>* Take a deep breath.</Text>
                    <Text>* Then click on start button and hold your breath.</Text>
                    </Card>
                    
                </View>
            </View>
      
            </View>:null} 
            {(step==5)?
            <View style={{height:windowHeight-135,justifyContent:'space-around'}}> 
                <Card style={{ marginTop:5,paddingVertical:20, marginHorizontal:15,backgroundColor:'#d8edea',borderRadius:20,shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    elevation: 9,}}>
                    <View style={{flexDirection:'row',justifyContent:'center',height:50,alignItems:'center'}}>
                    <   Text style={{fontSize:20,fontWeight:'bold'}}>Final Check Results</Text>
                    </View>
            
                    {(finalResults==0)?
                    <View style={{alignItems:'center'}}>
                        <Card style={{height:150,marginVertical:15,shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.32,
                                shadowRadius: 5.46,
                                elevation: 9,marginHorizontal:5, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#89eb73'}}>
                            <Text category='h6'style={{textAlign:'center'}}>According to the tests you have done, CoviDoc predicts you are not infected by Covid-19 or Pneumonia</Text>
                            
                        </Card>
                        <Text category='h6' style={{textAlign:'center',fontWeight:'bold',marginVertical:10}}>Please contact your doctor soon. Stay Safe!</Text>
                        {(HealthResults==1)?<Text style={{textAlign:'center',paddingVertical:10}}>According to the test your health history is relatively in a bad condition and you have to be careful about your health.</Text>:null}
                    </View>
                        :(finalResults==2)?
                        <View style={{alignItems:'center'}}>
                        <Card style={{height:150,marginVertical:15,shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.32,
                                shadowRadius: 5.46,
                                elevation: 9,marginHorizontal:5, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#ffd1d4'}}>
                            <Text category='h6'style={{textAlign:'center'}}>According to the tests you have done, CoviDoc predicts you are infected by </Text>
                            <Text category='h5'style={{color:'#ad7649',textAlign:'center',fontWeight:'bold'}}>Covid-19</Text>
                        </Card>
                        <Text category='h6' style={{textAlign:'center',fontWeight:'bold',marginVertical:10}}>Please contact your doctor soon. Stay Safe!</Text>
                    </View>
                    :(finalResults==3)?
                    <View style={{alignItems:'center'}}>
                    <Card style={{height:150,marginVertical:15,shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,
                            elevation: 9,marginHorizontal:5, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#ffa3a8'}}>
                        <Text category='h6'style={{textAlign:'center'}}>According to the tests you have done, CoviDoc predicts you are infected by </Text>
                        <Text category='h5'style={{color:'red',textAlign:'center',fontWeight:'bold'}}>Covid-Pneumonia</Text>
                    </Card>
                    <Text category='h6' style={{textAlign:'center',fontWeight:'bold',marginVertical:10}}>Please contact your doctor soon. Stay Safe!</Text>
                </View>
                        :(finalResults==4)?
                        <View style={{alignItems:'center'}}>
                        <Card style={{height:150,marginVertical:15,shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.32,
                                shadowRadius: 5.46,
                                elevation: 9,marginHorizontal:5, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#f29da2'}}>
                            <Text category='h6'style={{textAlign:'center'}}>According to the tests you have done, CoviDoc predicts you are infected by </Text>
                            <Text category='h5'style={{color:'#99121a',textAlign:'center',fontWeight:'bold'}}>Pneumonia</Text>
                        </Card>
                        <Text category='h6' style={{textAlign:'center',fontWeight:'bold',marginVertical:10}}>Please contact your doctor soon. Stay Safe!</Text>
                    </View>
                        
                        :(finalResults==5)?
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity  onPress={()=>{finalresult();}}>
                                    <View  style={{height:50,width:250,backgroundColor:'#0073e6',justifyContent:'center',alignItems:'center',borderRadius:30}}>
                                        <Text category='h5' style={{color:'#fff',textAlign:'center'}}>Check Final Results</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>:null}                
                </Card>
                {(finalResults==2)?<View style={{marginHorizontal:20,}}>
                    <Text category='h6'style={{fontWeight:'bold'}}>Risk level for Covid-19</Text>
                    <View style={{width:windowWidth-40,}}>
                        <Progress
                                percent={(equation - 3 )/5*100}
                                //   status={'line'}
                                type={'line'}
                                style={{marginVertical: 7.5}}
                                gradientColor={{0: '#f7df00', .33: '#f78400', .66: '#f73600', 1: '#f73600'}}
                                />
                    </View>
                </View>
            :null}
                {/* <Text>{equation}</Text> */}
            </View>:null} 

            {(step==5)?<View style={{flexDirection:'row',width:windowWidth,justifyContent:'space-around',backgroundColor:'#fff'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("main");}}>
                    <View  style={{height:60,width:60,borderRadius:30,flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:30,backgroundColor:'#7bc4e0'}}>
                        <Icon style={{width:50,height:50}} fill='#fff'    name='arrow-circle-left'/>    
                        {/* <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>Home</Text> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{setVisible(true)}}>
                    <View  style={{height:60,padding:10,borderRadius:100,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#7bc4e0'}}>
                        <Image source={require('../Images/doctor.png')}
                        style={{width: 60, height: 60, borderRadius:30, }}/>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Contact Doctor</Text>
                        {/* <Icon style={{width:30,height:30,marginLeft:10}} fill='#fff'    name='email-outline'/> */}
                    </View>
                </TouchableOpacity>
                
            </View>:<View style={{flexDirection:'row',width:windowWidth,justifyContent:'space-around',backgroundColor:'#7bc4e0'}}>
                {(step==1)?<TouchableOpacity onPress={()=>{navigation.navigate("main");}}>
                    <View  style={{height:60,flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:30,backgroundColor:'#7bc4e0'}}>
                        <Icon style={{width:30,height:30}} fill='#fff'    name='arrow-circle-left'/>    
                        <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>Cancel</Text>
                    </View>
                </TouchableOpacity>:<TouchableOpacity onPress={()=>{backstep();}}>
                    <View  style={{height:60,flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:30,backgroundColor:'#7bc4e0'}}>
                        <Icon style={{width:30,height:30}} fill='#fff'    name='arrow-circle-left'/>    
                        <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>Back</Text>
                    </View>
                </TouchableOpacity>}
                <TouchableOpacity onPress={()=>{nextstep();}}>
                    <View  style={{height:60,flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:30,backgroundColor:'#7bc4e0'}}>
                        <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>Next</Text>
                        <Icon style={{width:30,height:30}} fill='#fff'    name='arrow-circle-right'/>
                    </View>
                </TouchableOpacity>
                
            </View>}
            <Modal  visible={visible}>
                <View style={{backgroundColor:'rgba(52, 52, 52, 0.8)',height:windowHeight,width:windowWidth,justifyContent:'center',alignItems:'center'}}>
                    <Card disabled={true} style={{height:windowHeight/3,borderColor:'blue',borderWidth:1,width:windowWidth-20}}>
                    <Text style={{fontSize:20,textAlign:'center'}}>Please attach your Xray/CT Image to the email send before.</Text>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Image style={(image)? {width:50,height:100,borderRadius: 10,marginLeft:0,margin:10}:{width:windowWidth/3,height:windowHeight/8}} source={(image) ? { uri:image }:null}/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}} >
                    <TouchableOpacity 
                        onPress={() => handleEmail('new')}>
                        <View style={{height:50,width:150,marginVertical:0,justifyContent:'center',alignItems:'center',backgroundColor:'#0073e6',borderRadius:30}}>
                            <Text category='h5' style={{color:'#fff',textAlign:'center'}}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                        
                        <TouchableOpacity appearance='outline'onPress={() =>setVisible(false)}>
                        <View  style={{height:50,width:150,backgroundColor:'#979998',justifyContent:'center',alignItems:'center',borderRadius:30}}><Text category='h5' style={{color:'#fff',textAlign:'center'}}>Clear</Text></View>
                        </TouchableOpacity>
                    </View>
                    </Card>
                </View>
                </Modal>
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
    },
 
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
      
    },
    sectionStyle: {
      flex: 1,
      marginTop: 32,
      alignItems: 'center',
      paddingVertical:20
    },
    buttonText: {
        fontSize: 20,
        marginTop: 10,height:50,textAlign:'center',justifyContent:'center',alignItems:'center',
        width:150,margin:5,borderRadius:30,borderWidth:2,
        borderColor:'#0073e6',backgroundColor:'#fff'
        
      },
  });
  
  const options = {
    container: {
      backgroundColor: '#FF0000',
      padding: 5,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      color: '#FFF',
      marginLeft: 7,
    },
  };