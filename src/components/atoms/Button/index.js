import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({title,type,onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingVertical:10,
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    borderRadius:10
  }),
  text: (type) => ({
    fontSize:16,
    textAlign:'center',
    fontFamily:'Nunito-SemiBold',
    color: type === 'secondary' ? '#112340' : 'white',

  })
})