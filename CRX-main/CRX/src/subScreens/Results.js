import React, { useState, useEffect } from 'react';


import { Image, View, StyleSheet, ImageBackground, Dimensions, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {   Button, Card, Input, Layout,  Text,RadioGroup, Radio,} from '@ui-kitten/components';

import {storeData, getData} from '../_AsyncStorage';
import { app_name, API, API_VERSION, cipher } from '../_Configuration';

import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import { readDir } from 'react-native-fs';




export default class XrayResults extends React.Component {
    state = {
        gender:0 , operation : 0, age:(0) ,name:''
          
      };
      windowWidth = Dimensions.get("window").width;
      windowHeight = Dimensions.get("window").height;
      style = StyleSheet.create({
        shadow:{
            shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,
        }
    });
    componentDidMount = () => {
        console.log(this.props.navigation);
     
    
   }
   number =(age1)=>{
    if (!/^[0-9]+$/.test(age1)) {
        console.log('Enter Only Number');
        this.setState({age:(0)});
        Alert.alert('Age must be a Number');
        
        
      } else {
          console.log('Success');
      }
   }
    render()  {
      return (
  <View style={{justifyContent:'flex-start',paddingTop:30,alignItems:'center',backgroundColor:'#ededed',height:this.windowHeight}}>
      <Text category='h1' style={{textAlign: 'center',fontWeight:'bold',color:'#0000cc',marginVertical:20}}>About You</Text>
        <Card style={{ marginTop:5,height:500,paddingVertical:20, marginHorizontal:20,backgroundColor:'#afe3e3',borderRadius:40,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,}}>
        <View style={{marginVertical:5,alignItems:'center'}}><Text style={{marginVertical:5,fontSize:18}}>Enter your Name..</Text>
                < Input  value={this.state.name} onChangeText={(value)=>{this.setState({name:(value)})}}></Input>
            </View>
                <Text style={{textAlign:'center',fontSize:18}}>Choose your gender..</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={(this.state.gender == 0) ? {height: 100, width:  this.windowWidth/2 -45, borderWidth: 1, borderColor: '#A30FC1'}:{height: 100, width:  this.windowWidth/2 -45}}>
                        <TouchableOpacity onPress={() => {this.setState({gender:0})}}>
                        <Image source={require('../Images/man1.png')}
                        style={{width: this.windowWidth/2 -55, height: 85, resizeMode: 'contain', margin:5 }}/>
                        </TouchableOpacity>
                    </View>
                    <View style={(this.state.gender == 1) ? {height: 100, width:  this.windowWidth/2 -45, borderWidth: 1, borderColor: '#A30FC1'}:{height: 100, width:  this.windowWidth/2 -45}}>
                        <TouchableOpacity onPress={() => {this.setState({gender:1})}}>
                        <Image source={require('../Images/women1.png')}
                        style={{width: this.windowWidth/2 -55, height: 85, resizeMode: 'contain', margin:5 }}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <RadioGroup
                    selectedIndex={this.state.gender}
                    onChange={index => this.setState({gender:index})}
                    style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 110}}>
                    <Radio>Male</Radio>
                    <Radio>Female</Radio>
                </RadioGroup>
            <View style={{marginVertical:10}}><Text style={{marginVertical:20,textAlign:'center',fontSize:18}}>Choose your Age..</Text>
                < Input  value={this.state.age} onChangeText={(value)=>{this.number(value);this.setState({age:(value)})}}></Input>
            </View>
            
        <View style={{alignItems:'center'}}>
            <TouchableOpacity 
                onPress={()=>{ this.props.navigation.navigate("main",{age: this.state.age,gender: this.state.gender, name: this.state.name  , navigation:this.props.navigation});         
                }}>
                <View style={{height:50,width:200,marginVertical:20,justifyContent:'center',alignItems:'center',backgroundColor:'#0073e6',borderRadius:30}}><Text category='h5' style={{color:'#fff',textAlign:'center'}}>Next</Text></View>
            </TouchableOpacity>
        </View>
  
</Card>
  </View>
  
      );
  
  }}