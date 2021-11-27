// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import { Button, Text, Card } from '@ui-kitten/components';
import React, {useState} from 'react';
import { app_name, API, API1, API_VERSION, cipher } from '../_Configuration';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  
  Image,useWindowDimensions,
  View,
  TouchableOpacity,
  YellowBox,
} from 'react-native';
//Impoerting material indicators
// import { BallIndicator, BarIndicator, DotIndicator,TextLoader, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';

// importing library to use Stopwatch and Timer
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

export const Breathtime = ({navigation,route}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [age,setAge] = React.useState(route.params.age);
  const [gender,setGender] = React.useState(route.params.gender);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(1000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [times, setTimes] = useState();
  const [timeinsec, setTimeinsec] = useState();
  const [respose, setRespose] = useState(2); //0= low risk 1- high risk, 2-not response
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
        // setPricing(response.data.co);
            console.log("user screen - pricing - success", response.data);
            if( response.data==1){
             setRespose(1);
            }else{
                setRespose(0);
            }
            //   () => {console.log("this will be fired after setstate complete",e.state.pricing);
            // });
            
        }else{
            console.log("user screen - home - failed", response.data);
            
        }
    })
    .catch(function (error) {
        console.log("user screen - home - error", error.message);
      
    });
  }
 function second(time){
   var hours,minutes,seconds;
  [hours, minutes, seconds] = time.split(':');
 var  totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);

  setTimeinsec(totalSeconds);
}


  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',width:windowWidth,justifyContent:'center',alignItems:'center',height:70,backgroundColor:'#00bfff',marginBottom:10}}>
            <Text category='h4'style={{marginLeft:10,color:'#fff',fontWeight:'bold'}}>Breath-holding Time Analysis </Text>
        </View>
     
      <View style={styles.container}>
        
            
            <View style={styles.sectionStyle}>
            <Card style={{backgroundColor:'#afe3e3',width:windowWidth-20,shadowColor: "#00004d",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,}}>
                  <View style={{width:windowWidth-50,alignItems:'center',}}>
                  <Image style={{height:125,width:250,borderRadius:70,margin:20,textAlign:'center'}} source={require('../Images/breath.jpg')}/>

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
                  </View>
                  <View style={{alignItems:'center'}}>
                    <View style={{flexDirection:'row',paddingVertical:20,alignItems:'center'}}>
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
                            <Text  style={{fontWeight:'bold',color:'#0073e6'}}>RESET</Text>
                          </View>
                        </TouchableOpacity>
                    </View>
                    </View>
                  <View>
                  <Text style={{fontWeight:'bold',color:'#000099'}}>Instructions </Text>
              <Text style={{color:'#000099'}}>* Take a deep breath.</Text>
              <Text style={{color:'#000099'}}>* Then click on start button and hold your breath.</Text>
                  </View>
            </Card>
            {/* <View style={{margin:5}}><MaterialIndicator size={25}/></View> */}
          <View style={{paddingVertical:5}}>
                  {(respose==0)?
                  <View style={{alignItems:'center'}}>
                  <Card style={{width:windowWidth-20,marginVertical:15,shadowColor: "#000",
                  shadowOffset: {
                      width: 0,
                      height: 4,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 5.46,
                  elevation: 9,width:windowWidth-20, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#54ff7f',justifyContent: 'center', alignItems: 'center',marginTop:20,}}>
                      <Text style={{fontSize:17,textAlign:'center'}}>According to this test you may be in a </Text>
                      <Text style={{color:'green',textAlign:'center'}}>Low Risk Level</Text> 
                  </Card>
                  <Text  style={{textAlign:'center',margin:10}}>Please take the other tests provided by the CoviDoc and verify your results.Stay safe</Text>
              </View>
                  
                :(respose==1)?<View style={{alignItems:'center'}}>
                <Card style={{width:windowWidth-20,marginVertical:15,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,width:windowWidth-20, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#ffd6d9',justifyContent: 'center', alignItems: 'center',marginTop:20}}>
                    <Text style={{fontSize:17,textAlign:'center'}}>According to this test you may be in a </Text>
                    <Text style={{color:'red',textAlign:'center'}}>High Risk Level</Text> 
                </Card>
                <Text  style={{textAlign:'center',margin:10}}>Please take the other tests provided by the CoviDoc and verify your results.Stay safe</Text>
            </View>
                :(respose==2)?<View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{getResults();}}>
              
                <View style={{height:50,width:200,marginVertical:20,justifyContent:'center',alignItems:'center',backgroundColor:'#0073e6',borderRadius:30}}><Text category='h5' style={{color:'#fff',textAlign:'center'}}>CHECK</Text></View>
            </TouchableOpacity>
        </View>:null}
                
            </View>
          </View>
      </View>
      
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 0,
    
  },
  sectionStyle: {
    flex: 1,
    marginTop: 0,
    alignItems: 'center',
    paddingVertical:20
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,height:50,textAlign:'center',justifyContent:'center',alignItems:'center',
    width:150,margin:5,borderRadius:30,borderWidth:2,
    borderColor:'#0073e6',backgroundColor:'#fff'
    
  },shadow:{
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
},
});

const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 0,
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