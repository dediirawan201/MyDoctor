import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconDoctor, IconDoctorActive, IconHospitals, IconHospitalsActive, IconMessages, IconMessagesActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if( title === 'Doctor'){ 
      return active ? <IconDoctorActive/> : <IconDoctor/>;
    } 
    if(title === 'Messages'){
      return active ? <IconMessagesActive/> : <IconMessages/>
    }
    if(title === 'Hospitals'){
      return active ? <IconHospitalsActive/> : <IconHospitals/>
    }
    return <IconDoctor/>
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Icon/>
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TabItem;

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },
  title:(active) => (
  {
      fontSize:10,
      marginTop:4,
      color:active ? colors.text.menuActive : colors.text.menuInactive,
      fontFamily: fonts.primary[600]
  }
  )
})