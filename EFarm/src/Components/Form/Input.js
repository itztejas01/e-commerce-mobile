import React from 'react'
import { TextInput, StyleSheet } from 'react-native'


function Input(props) {
    // console.log("props", props.onblur)
    return (
       <TextInput
       style={[styles.input, props.style]}
       placeholder={props.placeholder}
       name={props.name}
       placeholderTextColor='black'
       id={props.id}
       value={props.value}
       autoCorrect={props.autoCorrect}
       onChangeText={props.onChangeText}
       onFocus={props.onFocus}
       secureTextEntry={props.secureTextEntry}
       keyboardType={props.keyboardType}
       onBlur={props.onblur}
       maxLength={props.maxLength}
       
       />
    );
}

const styles = StyleSheet.create({
    input:{
        width:'80%',
        height:60,
        backgroundColor:'white',
        margin:10,
        borderRadius:10,
        padding:10,
        borderWidth:2,
        // borderColor:'orange',
        color:'black'
    },
})

export default Input
