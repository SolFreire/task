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

export default function Painel(){
    return(
        <View style={style.container}>
                <Text style={style.title}>Painel</Text>
                <Text style={style.text}>Organizando seu trabalho e vida, finalmente.</Text>
                <View style={style.alignbuttons}>
                    <TouchableOpacity style={style.buttons}/>
                    <TouchableOpacity style={style.buttonsoff}/>
                    <TouchableOpacity style={style.buttonsoff}/>
                </View>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFFFFF",
        width:328,
        height:211,
        borderRadius:53,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 233,
        marginBottom:400,
        
    },
    title:{
        fontFamily:"Poppins-Medium",
        fontSize:24,
        marginBottom:23,
        marginTop:23,
        color:"#000",
    },
    text:{
        fontFamily:"Poppins-Medium",
        fontSize: 20,
        marginBottom:32,
        color:"#000",
        

    },
    alignbuttons:{
        justifyContent:'center',
        alignContent:'center',
        marginBottom:20,

    },
    buttons:{
        borderRadius:200,
        width:15,
        height:15,
        color:"#A3FF94",

    },
    buttonsoff:{
        borderRadius:200,
        width:15,
        height:15,
        color:"#D9D9D9"
    },

})