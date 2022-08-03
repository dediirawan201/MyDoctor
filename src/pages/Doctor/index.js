import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor} from '../../components'
import { colors, errorMessages, fonts, getData } from '../../utils'
import {CategoryDokter, DummyDoctor1, DummyDoctor5, DummyDoctor6} from '../../assets';
import { getDatabase, onValue, ref } from 'firebase/database';
import {Firebase} from '../../config';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]) 
  const [categoryDoctor, setCategoryDoctor] = useState([])
  useEffect(() => {
    const db = getDatabase(Firebase);
    onValue(ref(db, '/news/'),(res) =>{
      console.log('respon news ',res.val())
      if(res.val()){
        setNews(res.val())
      }else{
        errorMessages(errorMessages)
      }
      
    }, {
      onlyOnce: true
    })

    onValue(ref(db, '/category_doctor/'),(res) =>{
      console.log('respon categoryDoctor ',res.val())
      if(res.val()){
        setCategoryDoctor(res.val()) 
      }else{
        errorMessages(errorMessages)
      }
      
    }, {
      onlyOnce: true
    })
  },[])
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={16}/>
      <StatusBar backgroundColor={colors.secondary} barStyle='light-content'/>
      <View style={styles.wrapperSection}>
        <HomeProfile onPress={() => navigation.navigate('Profile')}/>
        <Gap height={30} />
        <Text style={styles.title}>Mau Konsultasi Dengan Siapa Hari ini? Dedi ya</Text>
        <Gap height={16}/>
      </View>
      <View style={styles.scrolview}>
        <ScrollView style={styles.wrapper} horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={32}/>
          {categoryDoctor.map(item => {
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
          {news.map(item => { 
            return(
              <NewsItem title={item.title} date={item.date} image={item.image}/>
            ) 
          })}
        
      
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