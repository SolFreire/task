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
import Googlelogo from '../images/Google';
import {SvgXml} from 'react-native-svg'

export default function LoginWithGoogle(){
    return(
    <TouchableOpacity style={style.container}>
        <SvgXml xml={Googlelogo} style={style.icon}/>
        <Text style={style.text}>Continuar com Google</Text>
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
        marginTop: 93,
        
    },
    text:{
        fontFamily:'Poppins-Medium',
        fontSize:16,
        color:"#000",
        marginBottom:12,
        marginTop:13,
        marginRight:62,
    },
    icon:{
        marginTop:14,
        marginBottom:13,
        marginLeft:34,
        
    },
})