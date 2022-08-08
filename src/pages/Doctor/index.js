import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useId, useState } from 'react'
import {DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor} from '../../components'
import { colors, errorMessages, fonts, getData } from '../../utils'
import {CategoryDokter, DummyDoctor1, DummyDoctor5, DummyDoctor6} from '../../assets';
import { child, get, getDatabase, limitToLast, onValue, orderByChild, query, ref } from 'firebase/database';
import {Firebase} from '../../config';
import { getAuth } from 'firebase/auth';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]) 
  const [categoryDoctor, setCategoryDoctor] = useState([])
  const [doctors,setDoctors] = useState([])
  useEffect(() => {
    getCategoryDoctor()
    getTopRatedDoctors()
    getNewsItem() 
  },[])

  const getTopRatedDoctors = () => { 
    const db = getDatabase(Firebase);
    const dbRef = query(ref(db,'doctors'),orderByChild("rate"), limitToLast(3))
    onValue(dbRef, (res) => {
      console.log('hasil rate ', res.val())
      if(res.val()){
              const oldData = res.val();
              const data = [];
              Object.keys(oldData).map(key => {
                data.push({
                  id: key,
                  data: oldData[key], 
                })
              })
              console.log('data hasil parse :', data)
              setDoctors(data)
            }
    },{
      onlyOnce:true
    })    
  }

  const getCategoryDoctor = () => {
    const db = getDatabase(Firebase);
    onValue(ref(db, '/category_doctor/'),(res) =>{
      if(res.val()){
        const data = res.val();
        const filterData = data.filter(el => el !== null)
        console.log('data hasil filter ', filterData)
        setCategoryDoctor(filterData) 
      }else{
        errorMessages(errorMessages)
      }
      
    }, {
      onlyOnce: true
    })
  }
  const getNewsItem = () => {
    const db = getDatabase(Firebase);
    onValue(ref(db, '/news/'),(res) =>{
      console.log('respon news ',res.val())
      if(res.val()){
        const data = res.val();
        const filterData = data.filter(el => el !== null)
        console.log('data hasil filter ', filterData)
        setNews(filterData)
      }else{
        errorMessages(errorMessages)
      }
      
    }, {
      onlyOnce: true
    })
  }
  

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
              <DoctorCategory 
              onPress={() => navigation.navigate('ChooseDoctor',item)} 
              key={item.id} category={item.category} />
            )
          })}
          <Gap width={12} />
      </ScrollView> 
      </View>
      <Gap height={30} />
      <Text style={styles.label}>Top Rated Doctors</Text>
      <Gap height={16} />
      <View style={styles.wrapperSection}>
        {doctors.map(doctor => {
          return (
            <RatedDoctor 
            key={doctor.id}
            avatar={{uri: doctor.data.photo}} 
            name={doctor.data.fullName}
            desc={doctor.data.profession} 
            onPress={() => navigation.navigate('ProfileDokter',doctor)}/>
            
            )
          })}
          </View>
      <Text style={styles.label}>Good News</Text>
          {news.map(item => { 
            return(
              <NewsItem key={item.id} title={item.title} date={item.date} image={item.image}/>
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