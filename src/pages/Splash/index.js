import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {ILLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    },3000)
  }, [navigation])
  return (
    <View style={styles.page}>
        <ILLogo />
      <Text style={styles.title}>MyDoctor</Text>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
    page:{
        backgroundColor: 'white',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        marginTop:20,
        fontSize:20,
        fontFamily:'Nunito-SemiBold',
        color:'#112340',
    }
})