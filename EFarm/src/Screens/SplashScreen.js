import React, {Component, useEffect} from 'react'
import { View, Image,Text, StyleSheet } from 'react-native'
import * as actions from '../Redux/Actions'
import { StackActions, NavigationActions } from '@react-navigation/native'


function SplashScreen(props) {

    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.dispatch(StackActions.replace('TabScreen'))
        },5)
    },[])

    return (
        <View style={styles.container}>
            <Text>E-Farm APP</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green'
    }
})


export default SplashScreen
