import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Gap, ListDoctor} from '../../components'
import { colors, fonts } from '../../utils'

const Messages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctor/>
        <ListDoctor/>
        <ListDoctor/>
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