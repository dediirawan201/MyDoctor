import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { colors, fonts } from '../../../utils';

const Header = ({onPress,title}) => {
  return (
    <View style={styles.container}>
        <Button type='icon-only' icon='back-dark' onPress={onPress}/>
        {/* <IconBackDark/> */}
      <Text style={styles.label}>{title}</Text>
      <Gap width={24} />
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor: colors.white,
        paddingHorizontal:16,
        paddingVertical:30
    },
    label:{
        fontFamily:fonts.primary[600],
        fontSize:20,
        textAlign:'center',
        flex:1,
        color: colors.text.primary

    }
})