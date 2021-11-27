import React, { useRef,useState, useEffect } from 'react';



import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


import { TextInput,StyleSheet,Keyboard, SafeAreaView, TouchableWithoutFeedback, Image, useWindowDimensions, View, DrawerLayoutAndroid, ImageBackground, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { IndexPath, Drawer, DrawerItem, BottomNavigation, BottomNavigationTab, Button, Datepicker, Autocomplete, AutocompleteItem, RadioGroup, Radio, Card, CheckBox, Divider, Layout, TopNavigation, Icon, Input, Text, TopNavigationAction } from '@ui-kitten/components';
import { BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';
// import {storeData, getData} from './_AsyncStorage';
import SelectMultiple from '@horizonlime/react-native-select-multiple'


export const  TextSave = () => {
    
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const [value, setValue] = React.useState('');
    const [title, setTitle] = React.useState('');
    const useInputState = (initialValue = '') => {
        const [value, setValue] = React.useState(initialValue);
        return { value, onChangeText: setValue };
      };
    const multilineInputState = useInputState();
    var RNFS = require('react-native-fs');

    var RNFS = require('react-native-fs');

    var path = RNFS.DocumentDirectoryPath  +'/'+ title +'.txt';
    
    // write the file
    RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        console.log(err.message);
      });
      function ganeratefile (string){
        RNFS.writeFile(path, string, 'utf8')
        .then((success) => {
          console.log('FILE WRITTEN!');
        })
        .catch((err) => {
          console.log(err.message);
        });
      }
// start - file upload part 
      // require the module
var RNFS = require('react-native-fs');

var uploadUrl = 'http://requestb.in/XXXXXXX';  // For testing purposes, go to http://requestb.in/ and create your own link
// create an array of objects of the files you want to upload
var files = [
  {
    name: 'test1',
    filename: 'test1.w4a',
    filepath: RNFS.DocumentDirectoryPath + '/test1.w4a',
    filetype: 'audio/x-m4a'
  }, {
    name: 'test2',
    filename: 'test2.w4a',
    filepath: RNFS.DocumentDirectoryPath + '/test2.w4a',
    filetype: 'audio/x-m4a'
  }
];

var uploadBegin = (response) => {
  var jobId = response.jobId;
  console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
};

var uploadProgress = (response) => {
  var percentage = Math.floor((response.totalBytesSent/response.totalBytesExpectedToSend) * 100);
  console.log('UPLOAD IS ' + percentage + '% DONE!');
};

// upload files
RNFS.uploadFiles({
  toUrl: uploadUrl,
  files: files,
  method: 'POST',
  headers: {
    'Accept': 'application/json',
  },
  fields: {
    'hello': 'world',
  },
  begin: uploadBegin,
  progress: uploadProgress
}).promise.then((response) => {
    if (response.statusCode == 200) {
      console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
    } else {
      console.log('SERVER ERROR');
    }
  })
  .catch((err) => {
    if(err.description === "cancelled") {
      // cancelled by user
    }
    console.log(err);
  });
  // end -file upload part

  return (
      <Layout style={{backgroundColor:'#f9f0ff',height:windowHeight,width:windowWidth}}>
       <View>
            <TouchableOpacity  style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Write Your Note</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <Button style={{width:windowWidth/2-7.5,
                            margin:5,
                            marginLeft:5,
                            backgroundColor: "#47bf5b",
                            borderRadius: 5,
                            paddingVertical: 1,
                            paddingHorizontal: 1}} 
                            onPress={()=>{setValue(value +'.txt');  ganeratefile(title + value +'.txt');}} >SAVE</Button>

                <Button style={{width:windowWidth/2-7.5,
                                    marginLeft:0,
                                    marginVertical:5,
                                    backgroundColor: "#60ccc1",
                                    borderRadius: 5,
                                    paddingVertical: 1,
                                    paddingHorizontal: 1}}>UPLOAD</Button>
           </View>
       </View>
       
         <Text>File Path: {path}</Text>
         <Input
         category="h1"
            style={{borderRadius: 10}}
            placeholder='Place your Title'
            value={title}
            onChangeText={nextValue => setTitle(nextValue)}
            
         />
       
        <Input
        style={{ marginVertical: 2,borderRadius: 10,}}
            multiline={true}
            textStyle={{ minHeight: windowHeight-220 }}
            placeholder='enter your notes'
           
        />
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
    },appButtonContainer: {
        elevation: 8,
        backgroundColor: "#581582",
        borderRadius: 0,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
  });