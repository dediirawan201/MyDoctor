import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DummyUser, ILNullPhoto } from '../../../assets';
import { colors, fonts, getData } from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile,setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profesion:''
  })

  useEffect(() => {
    getData('user').then(res => {
      // console.log('data user: ', res)
      const data =res;
      data.photo = {uri: res.photo}
      console.log('new profile: ', data)
      setProfile(res)
    })
  },[])

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Image source={profile.photo} style={styles.avatar}/>
      <View>
        <Text style={styles.nama}>{profile.fullName}</Text>
        <Text style={styles.profesi}>{profile.profesion}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HomeProfile;

const styles = StyleSheet.create({
  wrapper:{
    flexDirection:'row',
    alignItems:'center', 
  },
  avatar:{
    width:46,
    height:46,
    borderRadius:46/2,
    marginRight:12
  },
  nama:{
    fontFamily: fonts.primary[600],
    color:colors.text.primary,
    fontSize:16,
    textTransform:'capitalize'
  },
  profesi:{
    fontSize:12,
    fontFamily:fonts.primary[400],
    color:colors.text.secondary,
    textTransform:'capitalize'
  }
})