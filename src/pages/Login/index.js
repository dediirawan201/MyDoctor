import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link, LoadingBackground} from '../../components';
import { colors, errorMessages, fonts, storeData, useForm } from '../../utils';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Firebase} from '../../config';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { update } from '../../redux/Reducer/reducerSlice';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email:'', password:''})
  const dispatch = useDispatch();

  const enteryLogin = () => {
      dispatch(update(true))
    console.log('login ', dispatch(update(true)))
    const auth = getAuth(Firebase);
signInWithEmailAndPassword(auth, form.email, form.password)
  .then((res) => {
    console.log('success: ', res)

    dispatch(update(false))
    const db = getDatabase(Firebase);
  ref(db, '/users/' + res.user.uid), (resDB) => {
  console.log('data user: ', resDB.val())
  if(resDB.val()){
    storeData('user', resDB.val())
    
  }
}, {
  onlyOnce: true
};
    // ...
    navigation.navigate('MainApp');
  })
  .catch((error) => {
    // dispatch({type:'SET_LOADING', value: false})
    // dispatch(update({type:'SET_LOADING', value: false}))
    dispatch(update(false))
    const errorMessage = error.message;
    errorMessages(error.message)
    console.log('err: ', errorMessage)
  });
  }
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ILLogo/>
      <Gap height={30}/>
      <Text style={styles.title}>Masuk dan Mulai Berkonsultasi</Text>
      <Gap height={30}/>
      <Input title='Email Address' value={form.email} 
      onChangeText={(value) => setForm('email', value)}/>
      <Gap height={24} />
      <Input title='Password' value={form.password} 
      onChangeText={(value) => setForm('password', value)}
      secureTextEntry/>
      <Gap height={10}/>
      <Link title='Forgot My Password' size={12}/>
      <Gap height={40}/>
      <Button title='Sign In' onPress={enteryLogin}/>
      <Gap height={30}/>
      <Link onPress={() => navigation.navigate('Register')}
       title='Create New Account' size={16} align='center'/>
       </ScrollView>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  page:{
    paddingHorizontal:40,
    paddingVertical:20,
    backgroundColor:'white',
    flex:1,
  },
  title:{
    maxWidth:153,
    fontFamily:fonts.primary[600],
    fontSize:20,
  }
})