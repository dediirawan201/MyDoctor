import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo/>
      <Gap height={40}/>
      <Text style={styles.title}>Masuk dan Mulai Berkonsultasi</Text>
      <Gap height={40}/>
      <Input title='Email Address'/>
      <Gap height={24} />
      <Input title='Password'/>
      <Gap height={10}/>
      <Link title='Forgot My Password' size={12}/>
      <Gap height={40}/>
      <Button title='Sign In'/>
      <Gap height={30}/>
      <Link title='Create New Password' size={16} align='center'/>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  page:{
    padding:40,
    backgroundColor:'white',
    flex:1,
  },
  title:{
    maxWidth:153,
    fontFamily:'Nunito-SemiBold',
    fontSize:20,
  }
})