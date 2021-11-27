import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import { SplashScreen } from './SplashScreen';
import { MainScreen } from './MainScreen';
import { SymptomTracker } from './subScreens/SymptomTracker';
import  Xray  from './subScreens/Xray';
import  Mail  from './subScreens/Mail';
import  CTimage  from './subScreens/CTimage';
import  XrayResults  from './subScreens/Results';
import  {HealthTracker}  from './subScreens/HealthTracker';
import  {Breathtime}  from './subScreens/Breathtime';
import  {FullCheckUp}  from './subScreens/FullCheckUp';
import { useEffect } from 'react/cjs/react.production.min';
import { TextSave } from './subScreens/TextSave';
const HomeNavigator = () => (
  <Navigator headerMode='none'>
  
    <Screen name='splash' component={SplashScreen}/>
    <Screen name='main' component={MainScreen}/>
    <Screen name='symptom' component={SymptomTracker}/>
    <Screen name='full' component={FullCheckUp}/>
    <Screen name='breathtime' component={Breathtime}/>
    <Screen name='helth' component={HealthTracker}/>
    <Screen name='textsave' component={TextSave}/>
    <Screen name='xray' component={Xray}/>
    <Screen name='mail' component={Mail}/>
    <Screen name='ctimage' component={CTimage}/>
    <Screen name='results' component={XrayResults}/>

  </Navigator>
);

// useEffect(()=>{console.log('navigation');});

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
