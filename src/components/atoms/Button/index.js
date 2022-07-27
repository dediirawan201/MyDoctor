import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils';
import IconOnly from './IconOnly';
import IconButtonSend from './IconButtonSend';

const Button = ({title,type,onPress, icon, disable}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress}/>;
  }
  if (type === 'icon-button-send') { 
    return <IconButtonSend icon={icon} disable={disable} onPress={onPress}/>;
  }
  if(disable){
    return (
      <View style={styles.disable}>
        <Text style={styles.textDisable}>{title}</Text>
      </View>
    )}
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingVertical:16,
    backgroundColor: type === 'secondary' ? colors.button.primary.text : colors.button.primary.background,
    borderRadius:10
  }),
  text: (type) => ({
    fontSize:18,
    textAlign:'center',
    fontFamily:fonts.primary[600],
    color: type === 'secondary' ? colors.text.primary : colors.white,
  }),
  disable:{
   paddingVertical:16,
   borderRadius:10, 
   backgroundColor:colors.button.disable.background
  },

  textDisable:{
    fontSize:18,
    textAlign:'center',
    fontFamily:fonts.primary[600],
    color:colors.button.disable.text
  }
})