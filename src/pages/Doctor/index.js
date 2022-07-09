import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {DoctorCategory, Gap, HomeProfile, RatedDoctor} from '../../components'
import { colors, fonts } from '../../utils'

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={16}/>
      <StatusBar backgroundColor={colors.secondary} barStyle='light-content'/>
      <HomeProfile/>
      <Gap height={30} />
      <Text style={styles.title}>Mau Konsultasi Dengan Siapa Hari ini?</Text>
      <Gap height={16}/>
      <View style={styles.scrolview}>
        <ScrollView style={styles.wrapper} horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={16}/>
            <DoctorCategory/>
            <DoctorCategory/>
            <DoctorCategory/>
            <DoctorCategory/>
          <Gap width={6} />
      </ScrollView>
      </View>
      <Gap height={30} />
      <Text style={styles.label}>Top Rated Doctors</Text>
      <Gap height={16} />
      <View>
        <RatedDoctor/>
        <RatedDoctor/>
        <RatedDoctor/>
      </View>
      <Text style={styles.label}>Good News</Text>
      </ScrollView>
      </View>
    </View>
  )
}

export default Doctor;

const styles = StyleSheet.create({
  page:{
    backgroundColor:colors.secondary,
    flex:1
  },
  container:{
    backgroundColor:colors.white,
    paddingHorizontal:16,
    flex:1,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  title:{
    fontFamily:fonts.primary[600],
    fontSize:20,
    color:colors.text.primary,
    maxWidth:209
  },
  scrolview:{
    marginHorizontal:-16
  },
  wrapper:{
    flexDirection:'row',
  },
  label:{
    fontFamily:fonts.primary[600],
    fontSize:16,
    color:colors.text.primary
  }
})