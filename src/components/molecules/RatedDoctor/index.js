import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DummyDoctor1, IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.pict}/>
        <View style={styles.wrapperText}>
          <Text style={styles.nama}>Saza rumaisa</Text>
          <Text style={styles.ahli}>Pediatrician</Text>
        </View>     
      <View style={styles.rate}>
        <IconStar/>
        <IconStar/>
        <IconStar/>
        <IconStar/>
        <IconStar/>
      </View>
    </View>
  )
}

export default RatedDoctor

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:16
  },
  content:{
    // alignItems:'center'
  },
  pict:{
    width:50,
    height:50,
    borderRadius:50/2,
    marginRight:12
  },
  rate:{
    flexDirection:'row',
    alignItems:'center'
  },
  wrapperText:{
    flex:1,
    justifyContent:'center',
  },
  nama:{
    fontFamily:fonts.primary[600],
    fontSize:16,
    color:colors.text.primary
  },
  ahli:{
    fontFamily:fonts.primary[400],
    fontSize:12,
    color:colors.text.secondary
  }
})