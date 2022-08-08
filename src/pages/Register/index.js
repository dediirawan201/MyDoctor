import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Button, Gap, Header, Input, LoadingBackground} from '../../components';
import { colors, errorMessages, storeData, useForm } from '../../utils';
import {Firebase} from '../../config'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { showMessage, hideMessage } from "react-native-flash-message";
import { getDatabase, ref, set } from "firebase/database";
import { useDispatch } from 'react-redux';

const Register = ({navigation}) => {
  // const [fullName, setFullName] = useState('')
  // const [profesion, setProfesion] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  
  const [loading, setLoading] = useState(false)
  const [form,setForm] = useForm({
    fullName:'',
    profesion:'',
    email:'', 
    password:''
  });
  const dispatch = useDispatch();

  const OnNavigation = () => {
    dispatch(update(true))
    const authentication = getAuth(Firebase)
    createUserWithEmailAndPassword(authentication,form.email, form.password)
    .then((success) => {
      // Signed in
      dispatch(update(false))
      setForm('reset')

      // const data = {
      //   fullName: form.fullName,
      //   profesion: form.profesion,
      //   email: form.email,
      // };
      const database = getDatabase(Firebase)
      set(ref(database, 'users/' + success.user.uid),{
        fullName: form.fullName,
        profesion: form.profesion,
        email: form.email,
        uid: success.user.uid
      })
      storeData('user', {
        fullName: form.fullName,
        profesion: form.profesion,
        email: form.email,
        uid:success.user.uid
      });
      navigation.navigate('UploadPhoto',{
        fullName: form.fullName,
        profesion: form.profesion,
        email: form.email,
        uid: success.user.uid
      })
    })
    .catch((error) => {
      setLoading(false);
      errorMessages(error.message)
  })}
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack() } title='Daftar Akun'/>
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
          <Input 
          title='Full Name' 
          value={form.fullName} 
          onChangeText={(value) =>setForm('fullName',value)}/>
          <Gap height={24} />
          <Input 
          title='Pekerjaan' 
          value={form.profesion} 
          onChangeText={(value) => setForm('profesion',value)}/>
          <Gap height={24}/>
          <Input 
          title='Email Address' 
          value={form.email} 
          onChangeText={(value) => setForm('email',value)}/>
          <Gap height={24} />
          <Input title='Password' 
          value={form.password} 
          onChangeText={(value) => setForm('password',value)} 
          secureTextEntry/>
          <Gap height={40}/>
          <Button title='Continue' onPress={OnNavigation}/>
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