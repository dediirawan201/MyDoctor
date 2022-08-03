import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DummyNews1 } from '../../../assets';
import { colors, fonts } from '../../../utils';

const NewsItem = ({title,date,image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.today}>{date}</Text>
      </View>
      <Image source={{uri: image}} style={styles.pict}/>
      </View>
    </View> 
  )
}

export default NewsItem;

const styles = StyleSheet.create({
  container:{
    marginBottom:16,

  },
  content:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderBottomColor:colors.border.primary,
    paddingBottom:12,
    paddingTop:16,
    paddingHorizontal:16,
  },
  title:{
    fontFamily:fonts.primary[600],
    color:colors.text.primary,
    fontSize:16,
    maxWidth:201
  },
  today:{
    fontFamily:fonts.primary[400],
    fontSize:12,
    color:colors.text.secondary
  },
  pict:{
    width:80,
    height:60,
    borderRadius:10
  },
})