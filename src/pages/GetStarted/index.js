import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILLogo, ILGetStarted } from '../../assets'
import { Button, Gap } from '../../components';
import { colors, fonts } from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
      <ILLogo/>
      <Text style={styles.title}>Konsultasi dengan Dokter jadi lebih mudah & Fleksibel</Text>
      </View>
      <View>
      <Button title="Get Started" onPress={() => navigation.navigate('Register')}/>
      <Gap height={16}/>
      <Button title="Sign In" type="secondary" onPress={() => navigation.navigate('Login')}/>
      </View>
    </ImageBackground> 
  )
}

export default GetStarted

const styles = StyleSheet.create({
  page:{
    padding:40,
    flex:1,
    justifyContent:'space-between',
  },
  title:{
    marginTop:91,
    fontSize:28,
    fontFamily:fonts.primary[600],
    color:'white',
  }
})