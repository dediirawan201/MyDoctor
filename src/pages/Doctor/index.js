import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor} from '../../components'
import { colors, fonts, getData } from '../../utils'
import {CategoryDokter, DummyDoctor1, DummyDoctor5, DummyDoctor6} from '../../assets';
const Doctor = ({navigation}) => {
 
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={16}/>
      <StatusBar backgroundColor={colors.secondary} barStyle='light-content'/>
      <View style={styles.wrapperSection}>
        <HomeProfile onPress={() => navigation.navigate('Profile')}/>
        <Gap height={30} />
        <Text style={styles.title}>Mau Konsultasi Dengan Siapa Hari ini?</Text>
        <Gap height={16}/>
      </View>
      <View style={styles.scrolview}>
        <ScrollView style={styles.wrapper} horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={32}/>
          {CategoryDokter.data.map(item => {
            return (
              <DoctorCategory onPress={() => navigation.navigate('ChooseDoctor')} key={item.id} category={item.category} />
            )
          })}
          <Gap width={12} />
      </ScrollView>
      </View>
      <Gap height={30} />
      <Text style={styles.label}>Top Rated Doctors</Text>
      <Gap height={16} />
      <View style={styles.wrapperSection}>
        <RatedDoctor avatar={DummyDoctor1} name='Keyla Ramadhani' desc='Dokter Anak' onPress={() => navigation.navigate('ProfileDokter')}/>
        <RatedDoctor avatar={DummyDoctor5} name='Shaza Rumaisa' desc='Dokter Umum' onPress={() => navigation.navigate('ProfileDokter')}/>
        <RatedDoctor avatar={DummyDoctor6} name='Heikal Ramadhan' desc='Dokter Spesialis' onPress={() => navigation.navigate('ProfileDokter')}/>
      </View>
      <Text style={styles.label}>Good News</Text>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      
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
    color:colors.text.primary,
    paddingHorizontal:16
  },
  wrapperSection:{
    paddingHorizontal:16
  }
})