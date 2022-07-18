import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ILCatObat, ILCatPsikiater, ILCatUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atoms'

const DoctorCategory = ({category,onPress}) => {
  const Icon = () => {
    if(category === 'Dokter umum'){
      return <ILCatUmum style={styles.gambar}/>
    }
    if(category === 'Dokter psikiater'){
    return <ILCatPsikiater style={styles.gambar}/>
    }
    if(category === 'Dokter anak'){
      return <ILCatObat style={styles.gambar}/>
    }
    return <ILCatUmum style={styles.gambar}/>
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon/>
      <Gap height={28}/>
      <View style={styles.wrapperText}>
        <Text style={styles.text1}>Saya Butuh</Text>
        <Text style={styles.text}>{category}</Text>
      </View>
    </TouchableOpacity>
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