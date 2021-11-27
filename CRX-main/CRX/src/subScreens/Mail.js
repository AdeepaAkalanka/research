
import React, { useState, useEffect } from 'react';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import Mailer from 'react-native-mail';
import { Image, View,Linking, ImageBackground, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import {   Button, Card, Layout,  Text} from '@ui-kitten/components';

import {storeData, getData} from '../_AsyncStorage';
import { app_name, API, API_VERSION, cipher } from '../_Configuration';

import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import { readDir } from 'react-native-fs';


export default class Mail extends React.Component {
    state = {
      image:'',image1:"",xrayResponse:'', imagetest:'', imagepath:'',type:'',news:'news done',news1:(1),
      text:'',news4:(1),news2:(1),news3:(1),
        
    };
    windowWidth = Dimensions.get("window").width;
    windowHeight = Dimensions.get("window").height;
    componentDidMount = () => {
      let news111 = (this.state.news1==1)?'positive':'Negative';
      let news11 = (this.state.news2==1)?' positive':' Negative';
      let news21 = (this.state.news3==0)?' positive':' Negative';
      console.log('worls is'+ news111 +news11+ news21);
      this.setState( {text:'worls is'+ news111 +news11+ news21} );
     
    }
    hand = () => {
      let news = (this.state.news1==1)?'positive':'Negative';
      console.log('worls is'+ news);
    }
   
    handleEmail = (news) => {
     
      Mailer.mail({
          subject: 'Screenshot',
          recipients: ['example@gmail.com'],
          ccRecipients: ['example1@gmail.com'],
          //bccRecipients: ['supportBCC@example.com'],
          body: 'worls <br> is'+this.state.text+ ' news is :'+ this.state.news+ '\n' + '<br> news is5 :'+ this.state.news,
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
  


  render()  {
    return (
        <ImageBackground style={{backgroundColor:'#f2e5fe',height:this.windowHeight,width:this.windowWidth}}>  
          
            <Layout >
              <ScrollView>
             
              {/* <Button onPress={() => Linking.openURL('mailto:support@example.com') }
      title="support@example.com" >open</Button> */}
                 <View >
        <Button
        
          onPress={()=>{this.handleEmail('news done')}}
          title="Email Me"
          color="#841584"
          accessabilityLabel="Purple Email Me Button"
        >Send Mail</Button> 
      </View>

      {/* <Button onPress={()=>{
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
                                this.setState({image:'data:' + response.assets[0].type + ';base64,' + response.assets[0].base64,image1:response.assets[0].base64 ,type:response.assets[0].type,imagepath:response.assets[0].uri});                  
                               this.handleEmail(response.assets[0].uri, response.assets[0].type);
                                }
                                // console.log(response);
                              }
                            },
                          );
                        }}style={{margin:2}} size='tiny'>Upload</Button> */}
              </ScrollView>    
          </Layout>
     </ImageBackground>
    );
  }

}
