import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILCatUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atoms'

const DoctorCategory = () => {
  return (
    <View style={styles.container}>
      <ILCatUmum style={styles.gambar}/>
      <Gap height={28}/>
      <View style={styles.wrapperText}>
        <Text style={styles.text1}>Saya Butuh</Text>
        <Text style={styles.text}>Dokter Umum</Text>
      </View>
    </View>
  )
}

export default DoctorCategory

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.cartlight.primary,
    padding:12,
    alignSelf:'flex-start',
    marginRight:10,
    height:130,
    width:100,
    borderRadius:10
  },
  wrapperText:{
    width:100
  },
  text1:{
    fontSize:12,
    fontFamily:fonts.primary[400]
  },
  text:{
    fontFamily:fonts.primary[600],
    fontSize:12,
    color:colors.text.primary
  }
})