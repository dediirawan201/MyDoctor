import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import { fonts } from '../../utils';

const Login = ({navigation}) => {
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
      <Button title='Sign In' onPress={() => navigation.replace('MainApp')}/>
      <Gap height={30}/>
      <Link onPress={() => navigation.navigate('Register')}
       title='Create New Account' size={16} align='center'/>
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
    fontFamily:fonts.primary[600],
    fontSize:20,
  }
})