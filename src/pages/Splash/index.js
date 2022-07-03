import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ILLogo} from '../../assets';

const Splash = () => {
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
        fontWeight:'600',
        color:'#112340',
    }
})