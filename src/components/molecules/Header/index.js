import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../../assets';
import { Gap } from '../../atoms';

const Header = () => {
  return (
    <View style={styles.container}>
        <IconBackDark/>
      <Text style={styles.label}>Daftar Akun</Text>
      <Gap width={24} />
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingHorizontal:16,
        paddingVertical:30
    },
    label:{
        fontFamily:'Nunito-SemiBold',
        fontSize:20,
        textAlign:'center',
        flex:1

    }
})