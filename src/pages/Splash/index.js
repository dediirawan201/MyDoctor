import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {ILLogo} from '../../assets';
import { fonts } from '../../utils';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {Firebase} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      const auth = getAuth(Firebase);
    onAuthStateChanged(auth, user => {
      if(user){
        console.log('user: ', user)
        navigation.replace('MainApp')
      }else{
        //logout
        navigation.replace('GetStarted')
      }
    })
    // navigation.replace('GetStarted')
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
        fontFamily:fonts.primary[600],
        color:'#112340',
    }
})