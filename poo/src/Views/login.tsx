
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
import longlogo from '../images/longlogo';
import {SvgXml} from 'react-native-svg'
import Painel from '../components/painel';
import LoginWithApple from '../components/applebutton';
import LoginWithGoogle from '../components/googlebutton';
import EmailEnter from '../components/normallogin';
import SingUp from '../components/registerbutton';

export default function SingIn(){
    return(
        <View style={style.container}>
            <SvgXml xml={longlogo} style={style.icon}/>
            <Painel/>
            <LoginWithGoogle/>
            <LoginWithApple/>
            <View style={style.other}>
                <SingUp/>
                <Text style={style.text}>ou</Text>
                <EmailEnter/>
            </View>
            <Text style={style.termos}>Ao continuar com os serviços acima, você concorda com os [Termos de Serviço] 
            Suntask (https://link.com) e com a Política de Privacidade
            </Text>

        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:"#F6F6FB",
    },
    icon:{
        alignItems:'center', 
        marginTop: 47,
        marginBottom:126,
    },
    other:{
        
    },
    text:{
        fontFamily:'Poppins-Medium',
        fontSize:14,
        color:"#000",
    },     
    termos:{
        fontFamily:'Poppins-Medium',
        fontSize:12,
        color:"#757575"
    }

})