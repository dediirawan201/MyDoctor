import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils';

const Link = ({size,align,title}) => {
  return (
    <View>
      <Text style={styles.label(size, align)}>{title}</Text>
    </View>
  )
}

export default Link;

const styles = StyleSheet.create({
  label: (size,align) => (
    {
      fontSize:size,
      fontFamily:'Nunito-Regular', 
      color:colors.text.secondary,
      textDecorationLine:'underline',
      textAlign:align
    }
  )
})