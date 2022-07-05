import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Gap from '../Gap';

const Input = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input}/>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  title:{
    fontFamily:'Nunito-Regular',
    fontSize:16
  },
  input:{
    borderColor:'#E9E9E9',
    padding:11,
    borderWidth:1,
    borderRadius:10,

  }
})