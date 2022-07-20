import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button, Gap, Header, Input} from '../../components';
import { colors } from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack() } title='Daftar Akun'/>
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
          <Input title='Full Name'/>
          <Gap height={24} />
          <Input title='Pekerjaan'/>
          <Gap height={24}/>
          <Input title='Email Address'/>
          <Gap height={24} />
          <Input title='Password'/>
          <Gap height={40}/>
          <Button title='Continue' onPress={() => navigation.navigate('UploadPhoto')}/>
      </View>
        </ScrollView>
      
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