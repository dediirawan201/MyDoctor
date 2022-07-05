import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
      color:'#7D8797',
      textDecorationLine:'underline',
      textAlign:align
    }
  )
})