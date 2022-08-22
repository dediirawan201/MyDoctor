import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {List} from '../../components'
import { colors, fonts, getData } from '../../utils'
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets'
import { useEffect } from 'react'
import { child, get, getDatabase, onValue, query, ref } from 'firebase/database'
import {Firebase} from '../../config'
import { async } from '@firebase/util'

const Messages = ({navigation}) => {
  // const [doctors] = useState([
  //   {
  //     id:1,
  //     profile: DummyDoctor4,
  //     name:'Shaza rumaisa',
  //     desc:'Ada yang bisa dibantu mam'
  //   },
  //   {
  //     id:2,
  //     profile: DummyDoctor5,
  //     name:'Kayla',
  //     desc:'Tinggal ditembus obatnya saja ya'
  //   },
  //   {
  //     id:3,
  //     profile: DummyDoctor6,
  //     name:'Kavin',
  //     desc:'Keluhan nya apa ya pak?'
  //   },
  // ])
  const [user,setUser] = useState({})
  const [historyChat, setHistoryChat] = useState([])

  useEffect(() => {
    getDataFromLocal()
    const urlHistory = `messages/${user.uid}/`;
    const db = getDatabase(Firebase)
    // const rootDB = ref(db)
    // const messagesDB = query(rootDB,child(urlHistory))
    // const messagesDB = query(ref(db),child(urlHistory))
    const messagesDB = child(ref(db),urlHistory)


    onValue(messagesDB, async snapshot => {
      if(snapshot.val()){
        const oldData = snapshot.val();
        const data = [];

      const promises = await Object.keys(oldData).map(async key => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
          const detailDoctor = await child(ref(db),urlUidDoctor)
          // get(detailDoctor,(snapsho) => {
          //   console.log('detail doctor ', snapsho.val())
          // },{onlyOnce:true})
          get(await child(ref(db), urlUidDoctor)).then((snapsho) => {
            console.log('detail doctor ', snapsho)
            data.push({
              id: key,
              detailDoctor: snapsho.val(),
              ...oldData[key]
              // data: oldData[key],
            })
          })
        })
        await Promise.all(promises) 
        console.log('new data history: ', data)
        setHistoryChat(data)
      }
    },)
  },[user.uid])

  const getDataFromLocal = () => {
    getData('user').then(res => {
      // console.log('user login', res) 
      // console.log('data doctor ', dataDoctor)
      setUser(res)  
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {historyChat.map(chat => {
          return (
             <List onPress={() => navigation.navigate('Chat')}
             profile={{uri:chat.detailDoctor.photo}} 
             name={chat.detailDoctor.fullName}
             desc={chat.lastContentChat}
             key={chat.id}/>
          )
        
        })}
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