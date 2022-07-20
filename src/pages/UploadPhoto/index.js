import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Link } from '../../components';
import { IconAddPhoto, ILNullPhoto } from '../../assets';
import { colors, fonts } from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
        <Header title='Upload Photo' onPress={() => navigation.goBack()}/>
        <View style={styles.content}>
             
                <View style={styles.profile}>
                    <View style={styles.wrapperAvatar}>
                        <Image source={ILNullPhoto} style={styles.avatar}/>
                        <IconAddPhoto style={styles.addphoto}/>
                    </View>
                    <Text style={styles.nama}>Dedi Irawan</Text>
                    <Text style={styles.karir}>React Native Developer</Text>
                </View>
            
            <View>
                <Button onPress={() => navigation.navigate('MainApp')} title='Upload and Continue' type='secondary'/>
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
        textAlign:'center'
    },
    karir:{
        fontFamily:fonts.primary[400],
        fontSize:18,
        color:colors.text.secondary,
        textAlign:'center'
    }
})