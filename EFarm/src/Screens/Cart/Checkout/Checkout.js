import React, {useState, useEffect} from 'react'
import { View, TouchableOpacity,Alert, StyleSheet } from 'react-native'
import { Text, Item, Picker } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import FormContainer from '../../../Components/Form/FormContainer'
import Input from '../../../Components/Form/Input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'

const countries = require('../../../assets/data/countries.json')

function Checkout(props) {
    const [orderItems, setOrderItems] = useState();
    const [shippingAddress, setShippingAddress] = useState()
    const [shippingAddress2, setShippingAddress2] = useState()
    const [city, setCity] = useState()
    const [zip, setZip] = useState()
    const [phone,setPhone] = useState()
    const [country, setCountry] = useState()
    const [user, setUser] = useState()
    const [phoneError, setPhoneError] = useState()
    const [addressError, setAddressError] = useState()
    const [zipError, setZipError] = useState()
    const [cityError, setCityError] = useState()
    const [countryError, setCountryError] = useState()

    

    useEffect(()=>{
        setOrderItems(props.cartItems)

        return ()=>{
            setOrderItems();
        }
    },[])

    
    const validation = (text,type) => {
        if(type==="phone"){
        let val= /^(\+\d{1,3}[- ]?)?\d{10}$/
        if(text===""){
            setPhoneError(false)
        }
        else if(val.test(text)){
            
            setPhoneError(true)
        }else{
            setPhoneError()
        }
    }if(type==="address"){
       
        if(text===""){
            setAddressError(false)
        }
        else{
            setAddressError(true)
        }
    }
    if(type==="address2"){
        if(text===''){
            setAddressError(false)
        }else{
            setAddressError(true)
        }
    }
    if(type==="zip"){
        let val = /^[1-9][0-9]{5}$/
        if (val.test(text)){
            setZipError(true)
        }else{
            setZipError()
        }
    }
    if(type==='city'){
        let val = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
        if(val.test(text)){
            setCityError(true)
        }else{
            setCityError()
        }
    }
    if(type==="country"){
        let val = /[a-zA-Z]{2,}/
        if (val.test(text)){
            setCountryError(true)
        }else{
            setCountryError()
        }
    }


}

    const checkoutValid = () =>{
        let order={
            city,
            country,
            dateOrdered: Date.now(),
            orderItems,
            phone,
            shippingAddress1:shippingAddress,
            shippingAddress2: shippingAddress2,
            zip,
        }

        if(city !==undefined && country!==undefined && zipError!==undefined && phoneError!==undefined && phone!==undefined && shippingAddress!==undefined && zip !==undefined && shippingAddress2!==undefined ){
            console.log('variable not found',phoneError)
            props.navigation.navigate("Payment", {order:order})
        }if(!phoneError){
            Alert.alert('Field','Please enter proper phone number')
        }
        if(!zipError){
            Alert.alert('Field','Please enter proper zip code')
        }
        else{
            Alert.alert('Field','Please enter all the field')
        }
       

    }
    return (
        <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        extraHeight={200}
        enableOnAndroid={true}
        
        >
        
            <FormContainer title={'Shipping Information'}>
                <Input
                placeholder={'Phone No.'}
                name={'Phone'}
                value={phone}
                keyboardType={'numeric'}
                onChangeText={(text) =>
                    {setPhone(text),validation(text,"phone")}  
                }  
                // onblur={phoneNumberValid}
                maxLength={10}
                style={[!phoneError ? styles.error: styles.success]}
                />
                <Input
                placeholder={'Shipping Address 1'}
                name={'ShippingAddress1'}
                value={shippingAddress}
                onChangeText={(text)=>{setShippingAddress(text), validation(text,"address")}} 
                style={[!addressError ? styles.error: styles.success]}  
                />
                 <Input
                placeholder={'Shipping Address 2'}
                name={'ShippingAddress2'}
                value={shippingAddress2}
                onChangeText={(text)=>{
                    setShippingAddress2(text)
                    validation(text, "address2")
                }} 
                style={[!addressError ? styles.error: styles.success]} 
                />
                <Input
                placeholder={'City'}
                name={'city'}
                value={city}
                onChangeText={(text)=>{setCity(text),validation(text,'city')}}  
                style={[!cityError ? styles.error: styles.success]} 
                />
                <Input
                placeholder={'Pincode'}
                name={'zip'}
                value={zip}
                maxLength={6}
                keyboardType={'numeric'}
                onChangeText={(text)=>{setZip(text), validation(text,'zip')}} 
                style={[!zipError ? styles.error: styles.success]}  
                />

                <Input
                placeholder={'country'}
                name={"Country"}
                value={country}
                onChangeText={(text)=>{setCountry(text),validation(text, 'country')}}

                style={[!countryError ? styles.error: styles.success]} 
                />                
                <View style={{width:'80%', alignItems:'center'}}>
                        <TouchableOpacity style={{backgroundColor:'green', width:100, height:50}} onPress={()=>checkoutValid()}>
                            <Text style={{marginTop:10,textAlign:'center',color:'white'}}>Confirm</Text>
                        </TouchableOpacity>
                </View>
            </FormContainer>
            </KeyboardAwareScrollView>
    )
}

const styles=StyleSheet.create({
    error:{
        borderColor:'red'
    },
    success:{
        borderColor:'green'
    }
})

const mapStateToProps = (state) =>{
    const {cartItems} = state;
    return{
        cartItems:cartItems,
    }
}

export default connect(mapStateToProps) (Checkout)
