import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Gap from '../Gap';
import { colors, fonts } from '../../../utils';

const Input = ({title}) => {
  const [border,setBorder] = useState(colors.border)
  const OnFormFocus = () => {
    setBorder(colors.blue1)
  }
  const OnBlurForm = ({border}) => {
    setBorder(border)
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput onFocus={OnFormFocus} onBlur={OnBlurForm} style={styles.input(border)}/>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  title:{
    fontFamily:fonts.primary[400],
    fontSize:16,
    color: colors.text.secondary
  },
  input:(border) => (
    {
      borderColor:border,
      padding:11,
      borderWidth:1,
      borderRadius:10,
      marginTop:6
  
    }
  )
})