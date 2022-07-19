import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {List} from '../../components'
import { colors, fonts } from '../../utils'
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets'

const Messages = () => {
  const [doctors] = useState([
    {
      id:1,
      profile: DummyDoctor4,
      name:'Shaza rumaisa',
      desc:'Ada yang bisa dibantu mam'
    },
    {
      id:2,
      profile: DummyDoctor5,
      name:'Kayla',
      desc:'Tinggal ditembus obatnya saja ya'
    },
    {
      id:3,
      profile: DummyDoctor6,
      name:'Kavin',
      desc:'Keluhan nya apa ya pak?'
    },
  ])
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
             <List
             profile={doctor.profile} 
             name={doctor.name}
             desc={doctor.desc}
             key={doctor.id}/>
          )
        
        })}
        <List/>
        <List/>
        <List/>
      </View>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.secondary,
    flex:1,
  },
  content:{
    backgroundColor: colors.white,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    flex:1
  },
  title:{
    fontSize:20,
    fontFamily:fonts.primary[600],
    paddingHorizontal:16,
    paddingTop:30
  }
})