
import React, { useState, useEffect } from 'react';
import { Image, View, ImageBackground, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import {   Button, Card, Layout,  Text} from '@ui-kitten/components';
import {  API, } from '../_Configuration';
import {  MaterialIndicator, } from 'react-native-indicators';

import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import { readDir } from 'react-native-fs';


export default class Xray extends React.Component {
    state = {
      image:'',image1:"",xrayResponse:'4', imagetest:'',
        
    };
    windowWidth = Dimensions.get("window").width;
    windowHeight = Dimensions.get("window").height;
    
   
    getResult() {
      console.log('api call');
      var e= this;
      var xdata = {img:this.state.image1};
      API.post('predic/xray',xdata)
      .then(function (response) {
        
        if(response){
          
              console.log("xray check screen- API call - success", response.data);
               e.setState({xrayResponse: response.data});
              
              
          }else{
              console.log("xray check screen- API call - failed", response.data);
              
          }
      })
      .catch(function (error) {
          console.log("xray check screen- API call - error", error.message);
        
      });
    }
   
  render()  {
    return (
        <ImageBackground style={{backgroundColor:'#fff',height:this.windowHeight,width:this.windowWidth}}>  
          
          <ScrollView >
              <Layout style={{justifyContent:'space-between'}}>
                <View style={{height:70,justifyContent:'center',alignItems:'center',backgroundColor:'#00bfff'}}>
                    <Text category='h3' style={{color:'#fff',fontWeight:'bold'}}>Upload your X-Ray Image</Text>
                </View>
                
                  <View  style={{alignItems:'center',}}>
                    
                    <Card style={(!this.state.image)?{width:this.windowWidth,alignItems: 'center',}:{width:this.windowWidth,justifyContent: 'center',alignItems: 'center',}}>
                    
                      <View style={{borderWidth:2,borderColor:"blue",alignItems:'center',borderStyle:'dashed',paddingHorizontal:30,paddingVertical:25}}>
                      {(!this.state.image)?<View style={{borderWidth:1,padding:10,paddingVertical:20,borderColor:'#fff',width:this.windowWidth-100}}>
                        <Text category='h6' style={{textAlign:'center',fontWeight:'bold'}}>Just Upload A Photo Of Your Chest X-Ray And Make Sure The Photo Is Clear</Text>
                      </View>:null}
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
                                  // console.log('data:' + response.assets[0].type + ';base64,' + response.assets[0].base64);
                                }else{
                                this.setState({xrayResponse:2,image:'data:' + response.assets[0].type + ';base64,' + response.assets[0].base64,image1:response.assets[0].base64 });                  
                                  console.log(response);
                                }
                                // console.log(response);
                              }
                            },
                          );
                        }}>
                          <Image style={(this.state.image)? {width:this.windowWidth, height: this.windowHeight*0.35,borderRadius: 10,marginLeft:0,marginRight:0}:{width:this.windowWidth/3,height:this.windowHeight/8}} source={(this.state.image) ? { uri: this.state.image }:require('./up.jpg')}/>
                     
                      {(!this.state.image)? <Text style={{fontSize:20}}>Browse Image</Text>:null}
                      {(!this.state.image)?<Button onPress={()=>{
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
                                this.setState({xrayResponse:2,image:'data:' + response.assets[0].type + ';base64,' + response.assets[0].base64,image1:response.assets[0].base64 });                  
                                  console.log(response);
                                }
                                // console.log(response);
                              }
                            },
                          );
                        }}style={{margin:5,}} size='tiny'>Upload</Button>:null}
                      </TouchableOpacity>
                      </View>
                      
                  
                      </Card>
                     
                    </View>
        {(this.state.xrayResponse== "COVID19")?
        <View style={{alignItems:'center'}}>
        <Card style={{width:this.windowWidth-20,marginVertical:15,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,width:this.windowWidth-20, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#ffa3a8',justifyContent: 'center', alignItems: 'center',marginTop:20,}}>
            <Text style={{fontSize:17,textAlign:'center'}}>According to this test you may be in a </Text>
            <Text style={{color:'red',textAlign:'center'}}>Covid-Pneumonia Condition</Text> 
        </Card>
        <Text  style={{textAlign:'center',margin:10}}>Please take the other tests provided by the CoviDoc and verify your results.Stay safe</Text>
    </View>
      :(this.state.xrayResponse== "PNEUMONIA")?
      <View style={{alignItems:'center'}}>
                <Card style={{width:this.windowWidth-20,marginVertical:15,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,width:this.windowWidth-20, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#f29da2',justifyContent: 'center', alignItems: 'center',marginTop:20}}>
                    <Text style={{fontSize:17,textAlign:'center'}}>According to this test you may be in a </Text>
                    <Text style={{color:'#99121a',textAlign:'center'}}>Pneumonia Condition</Text> 
                </Card>
                <Text  style={{textAlign:'center',margin:10}}>Please take the other tests provided by the CoviDoc and verify your results.Stay safe</Text>
            </View>
      :(this.state.xrayResponse== "NORMAL")?
      <View style={{alignItems:'center'}}>
                <Card style={{width:this.windowWidth-20,marginVertical:15,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,width:this.windowWidth-20, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#89eb73',justifyContent: 'center', alignItems: 'center',marginTop:20,}}>
                    <Text style={{fontSize:17,textAlign:'center'}}>According to this test you may be in a </Text>
                    <Text style={{color:'green',textAlign:'center'}}>Normal Condition</Text> 
                </Card>
                <Text  style={{textAlign:'center',margin:10}}>Please take the other tests provided by the CoviDoc and verify your results.Stay safe</Text>
            </View>
      
      :(this.state.xrayResponse==2)?
        <View style={{alignItems:'center'}}>
          <TouchableOpacity 
              onPress={()=>{this.getResult();this.setState({xrayResponse: 3});}}>
                <View style={{height:50,width:200,marginVertical:20,justifyContent:'center',alignItems:'center',backgroundColor:'#0073e6',borderRadius:30}}>
                    <Text category='h5' style={{color:'#fff',textAlign:'center'}}>Check</Text>
              </View>
          </TouchableOpacity>
        </View>
      :(this.state.xrayResponse==3)?<View style={{marginVertical:20}}><MaterialIndicator size={25}/></View>:null}
                    {/* {(this.state.xrayResponse)?<View>
                    </View>:<View style={{height:20,justifyContent:'center',alignItems:'center'}}></View>} */}
                     {(this.state.image)? <View style={{alignItems:'center'}}>
                      
                     <TouchableOpacity onPress={()=>{
                                          this.setState({image:'',xrayResponse:'4'});
                                          }}>
                        <View  style={{height:50,width:200,backgroundColor:'#b3cccc',justifyContent:'center',alignItems:'center',borderRadius:30}}><Text category='h5' style={{color:'#fff',textAlign:'center'}}>Clear Image</Text></View>
                      </TouchableOpacity></View>:<View style={{height:100,justifyContent:'center',alignItems:'center'}}><Text></Text></View>
                      }
                     
                     </Layout>
              </ScrollView>
     </ImageBackground>
    );
  }

}

