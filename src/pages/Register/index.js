import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button, Header, Input} from '../../components';

const Register = () => {
  return (
    <View>
      <Header/>
      <View style={styles.content}>
        <Input title='Full Name'/>
        <Input title='Pekerjaan'/>
        <Input title='Email Address'/>
        <Input title='Password'/>
        <Button title='Continue'/>
      </View>
      
    </View>
  )
}

export default Register;

const styles = StyleSheet.create({
  content:{
    paddingHorizontal:40,
    paddingTop:0
    
  }
})