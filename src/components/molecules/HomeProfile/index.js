import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DummyUser } from '../../../assets';
import { colors, fonts } from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.wrapper}>
        <Image source={DummyUser} style={styles.avatar}/>
      <View>
        <Text style={styles.nama}>Dedi Irawan</Text>
        <Text style={styles.profesi}>React Native Developer</Text>
      </View>
    </View>
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
  },
  profesi:{
    fontSize:12,
    fontFamily:fonts.primary[400],
    color:colors.text.secondary
  }
})