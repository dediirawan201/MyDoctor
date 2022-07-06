import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { colors } from '../../../utils';

const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
        <Button type='icon-only' icon='back-dark' onPress={onPress}/>
        {/* <IconBackDark/> */}
      <Text style={styles.label}>Daftar Akun</Text>
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
        fontFamily:'Nunito-SemiBold',
        fontSize:20,
        textAlign:'center',
        flex:1,
        color: colors.text.primary

    }
})