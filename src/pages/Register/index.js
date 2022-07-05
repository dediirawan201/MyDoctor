import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button, Gap, Header, Input} from '../../components';
import { colors } from '../../utils';

const Register = () => {
  return (
    <View style={styles.page}>
      <Header/>
      <View style={styles.content}>
        <Input title='Full Name'/>
        <Gap height={24} />
        <Input title='Pekerjaan'/>
        <Gap height={24}/>
        <Input title='Email Address'/>
        <Gap height={24} />
        <Input title='Password'/>
        <Gap height={40}/>
        <Button title='Continue'/>
      </View>
      
    </View>
  )
}

export default Register;

const styles = StyleSheet.create({
  page:{
    backgroundColor:colors.white,
    flex:1
  },
  content:{
    paddingHorizontal:40,
    paddingTop:0,
    backgroundColor: colors.white,
    
    
  }
})