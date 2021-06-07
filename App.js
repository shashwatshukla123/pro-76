import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';

const Stack = createStackNavigator();


export default class App extends React.Component{
  render(){
    return(
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Text>Space Crafts Screen</Text>
      </View>
    )
  }
}

      function App(){
      return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"screensOptions={{
        headerShown:false
      }}>

      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="SpaceCrafts" component={SpaceCraftsscreen}/>
      <Stack.Screen name="DailyPic" component={DailyPicscreen}/>
      <Stack.Screen name="StarMap" component={StarMapscreen}/>

      </Stack.Navigator>
    </NavigationContainer>
    
      )
  }
    
