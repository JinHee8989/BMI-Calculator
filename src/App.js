/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  MainScreen  from './screens/MainScreen'
import  ResultScreen from './screens/ResultScreen'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {

    console.log("테스트===="+this.props);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Main' component={MainScreen} option={{title:'Main Screen'}}/>
                <Stack.Screen name='Result' component={ResultScreen} option={{title:'Result Screen'}} />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
      
}


export default App;
