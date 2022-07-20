import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { colors, fonts } from '../../../utils';
import DarkProfile from './DarkProfile';

const Header = ({onPress,title,type,namaDokter,ahli,imgDokter}) => {
  if(type === 'dark-profile'){
    return <DarkProfile onPress={onPress} namaDokter={namaDokter} ahli={ahli} imgDokter={imgDokter}/>
  }
  return (
    <View style={styles.container(type)}>
        <Button type='icon-only' icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress}/>
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
        backgroundColor: type === 'dark' ? colors.secondary : colors.white,
        paddingHorizontal:16,
        paddingVertical:30,
        borderBottomLeftRadius:type === 'dark' ? 20 : 0,
        borderBottomRightRadius:type === 'dark' ? 20 : 0,
    }),
    label:(type) => (
      {
        fontFamily:fonts.primary[600],
        fontSize:20,
        textAlign:'center',
        flex:1,
        color: type === 'dark' ? colors.white : colors.text.primary
    })
})