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
import Applelogo from '../images/Apple';
import {SvgXml} from 'react-native-svg'

//TO-DO:importar os svgs
export default function LoginWithApple(){
    return(
    <TouchableOpacity style={style.container}>
        <Text style={style.text}>Continuar com Apple</Text>
        <SvgXml xml={Applelogo} style={style.icon}/>
    </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        width:319,
        height:49,
        backgroundColor:"#FFFFFF",
        justifyContent:'center',
        alignItems:'center',
        borderColor:"#757575",
        marginTop:12,
    },
    text:{
        fontFamily:'Poppins-Medium',
        fontSize:16,
        color:"#000",
    },
    icon:{
        
    },
})