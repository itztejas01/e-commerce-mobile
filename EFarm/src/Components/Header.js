import React from 'react'
import { StyleSheet,View, Image, SafeAreaView } from 'react-native'

function Header() {
    return (
        <SafeAreaView style={styles.header}>
            <Image
            source={require('../assets/img/farmer.png')}
            resizeMode="contain"
            style={{height:50}}
            
            />
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        padding:10,
    }
})

export default Header
