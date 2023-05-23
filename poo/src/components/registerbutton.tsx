import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

export default function SingUp(){
    return(
        <TouchableOpacity>
            <Text style={style.text}>Cadastre-se</Text>
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    text:{
        fontFamily:'Poppins-Medium',
        fontSize:14,
        color:"#000",
        textDecorationLine:'underline',
    }
})