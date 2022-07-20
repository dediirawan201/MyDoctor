import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils';

const Link = ({size,align,title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.label(size, align)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Link;

const styles = StyleSheet.create({
  label: (size,align) => (
    {
      fontSize:size,
      fontFamily:fonts.primary[400], 
      color:colors.text.secondary,
      textDecorationLine:'underline',
      textAlign:align
    }
  )
})