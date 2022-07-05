import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Gap from '../Gap';
import { colors } from '../../../utils';

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
    fontSize:16,
    color: colors.text.secondary
  },
  input:{
    borderColor:colors.border,
    padding:11,
    borderWidth:1,
    borderRadius:10,
    marginTop:6

  }
})