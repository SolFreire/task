
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SingIn from './src/Views/login';

export default function App(){
  return(
    <View>
      <SingIn/>
    </View>
    
  )
}