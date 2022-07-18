import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Gap, ListHospitals} from '../../components';
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBG } from '../../assets';
import { colors, fonts } from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.slot}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals 
          nama='Rumahsakit' 
          hospital='Anna Pekayon' 
          address='Jl. raya pekayon' 
          pic={DummyHospital1}/>
        <ListHospitals 
          nama='Rumahsakit Anak' 
          hospital='Medika Galaxi' 
          address='Jl. raya Galaxi' 
          pic={DummyHospital2}/>
        <ListHospitals 
          nama='Rumahsakit Jiwa' 
          hospital='Primaya Bekasi Barat'
          address='Jl. raya pekayon' 
          pic={DummyHospital3}/>
      </View>
    </View>
  )
}

export default Hospitals;

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.secondary,
    flex:1,
  },
  content:{
    backgroundColor:colors.white,
    borderRadius:20,
    flex:1,
    marginTop:-16,
    paddingTop:14
    

  },
  background:{
    height:240
  },
  title:{
    paddingTop:30,
    fontFamily:fonts.primary[600],
    fontSize:20,
    color:colors.white,
    textAlign:'center'
  },
  slot:{
    fontFamily:fonts.primary[300],
    fontSize:12,
    textAlign:'center',
    color:colors.white
  }
})