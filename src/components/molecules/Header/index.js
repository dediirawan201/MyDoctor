import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { colors, fonts } from '../../../utils';

const Header = ({onPress,title,type}) => {
  return (
    <View style={styles.container(type)}>
        <Button type='icon-only' icon={type === 'dark' ? 'back-dark' : 'back-light'} onPress={onPress}/>
        {/* <IconBackDark/> */}
      <Text style={styles.label(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container:(type) => (
      {
        flexDirection:'row',
        backgroundColor: type === 'dark' ? colors.white : colors.secondary,
        paddingHorizontal:16,
        paddingVertical:30,
        borderBottomLeftRadius:type === 'dark' ? 0 : 20,
        borderBottomRightRadius:type === 'dark' ? 0 : 20,
    }),
    label:(type) => (
      {
        fontFamily:fonts.primary[600],
        fontSize:20,
        textAlign:'center',
        flex:1,
        color: type === 'dark' ? colors.text.primary : colors.white
    })
})