import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, Link } from '../../components';
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets';
import { colors, fonts, storeData } from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { showMessage, hideMessage } from "react-native-flash-message";
import { getDatabase, ref, set, update } from "firebase/database";
import {Firebase} from '../../config'

const UploadPhoto = ({navigation,route}) => {
    const {fullName,profesion,uid} = route.params
    const [hasPhoto,setHasPhoto] = useState(false)
    const [photoForDB, setPhotoForDB] = useState('')
    const [photo, setPhoto] = useState(ILNullPhoto)

    
    const addImage = () => {
        const option = {
            mediaType: 'photo',
            quality: 0.5,
            maxWidth:200,
            maxHeight:200
        }
        launchImageLibrary(option, (res) => {
            if(res.didCancel || res.errorMessage || res.errorCode){
                showMessage({
                    message: 'Upps, Anda Belum Masukan Foto',
                    type: "default",
                    backgroundColor: colors.err.primary,
                    color:colors.white
                  });
            }else{
                console.log('response get image ', res)
                const foto = res.assets[0]
                setPhotoForDB(foto.uri);
                
                const uri = {uri: foto.uri}
                setPhoto(uri)
                setHasPhoto(true)
            }
        })
    }
    const uploadAndContinue = () => {

        const database = getDatabase(Firebase)
                    update(ref(database, 'users/' + uid),{
                        photo: photoForDB})
        const data = route.params;
        data.photo = photoForDB;
        storeData('user', data)
                        navigation.replace('MainApp')
                    }
  return (
    <View style={styles.page}>
        <Header title='Upload Photo' onPress={() => navigation.goBack()}/>
        <View style={styles.content}>
             
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.wrapperAvatar} onPress={addImage}>
                        <Image source={photo} style={styles.avatar}/>
                        {hasPhoto && <IconRemovePhoto style={styles.addphoto}/>}
                        {!hasPhoto && <IconAddPhoto style={styles.addphoto}/> }
                    </TouchableOpacity>
                    <Text style={styles.nama}>{fullName}</Text>
                    <Text style={styles.karir}>{profesion}</Text>
                </View>
            
            <View>
                <Button onPress={uploadAndContinue} 
                title='Upload and Continue' disable={!hasPhoto}/>
                <Gap height={30} />
                <Link onPress={() => navigation.navigate('MainApp')} title='Skip for This' size={16} align='center'/>
            </View>
    </View>
        </View>
  )
}

export default UploadPhoto;

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white,
    },
    content:{
        backgroundColor:colors.white,
        flex:1,
        justifyContent:'space-between',
        padding:40,
        paddingBottom:64
    },
    profile:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    wrapperAvatar:{
        width:130,
        height:130,
        borderWidth:1,
        borderRadius:130/2,
        borderColor:colors.border.primary,
        alignItems:'center',
        justifyContent:'center',
        
    },
    avatar:{
        width:110,
        height:110,
        borderRadius:110 / 2
    },
    addphoto:{
        position:'absolute',
        bottom:8,
        right:6,
    },
    nama:{
        fontFamily:fonts.primary[600],
        fontSize:24,
        color:colors.text.primary,
        textAlign:'center',
        textTransform:'capitalize'
    },
    karir:{
        fontFamily:fonts.primary[400],
        fontSize:18,
        color:colors.text.secondary,
        textAlign:'center',
        textTransform:'capitalize'
    }
})