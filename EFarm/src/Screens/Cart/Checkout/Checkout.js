import React, {useState, useEffect} from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Item } from 'native-base'
import { Picker } from '@react-native-picker/picker'; 
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

    useEffect(()=>{
        setOrderItems(props.cartItems)

        return ()=>{
            setOrderItems();
        }
    },[])

    const Checkout = () =>{
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

        props.navigation.navigate("Payment", {order:order})
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
                onChangeText={(text)=>setPhone(text)}  
                />
                <Input
                placeholder={'Shipping Address 1'}
                name={'ShippingAddress1'}
                value={shippingAddress}
                onChangeText={(text)=>setShippingAddress(text)}  
                />
                 <Input
                placeholder={'Shipping Address 2'}
                name={'ShippingAddress2'}
                value={shippingAddress2}
                onChangeText={(text)=>setShippingAddress2(text)}  
                />
                <Input
                placeholder={'City'}
                name={'city'}
                value={city}
                onChangeText={(text)=>setCity(text)}  
                />
                <Input
                placeholder={'Pincode'}
                name={'zip'}
                value={zip}
                onChangeText={(text)=>setZip(text)}  
                />

                
                    {/* <Picker
                    mode='dropdown'
                    iosIcon={<Icon name='arrow-down' color={'#007aff'} />}
                    style={{width: undefined}}
                    selectedValue={country}
                    placeholder='Select your Country'
                    placeholderStyle={{color:'#007aff'}}
                    placeholderIconColor='#007aff'
                    onValueChange={(e)=>setCountry(e)}
                    
                    >
                        {countries.map((c)=>{
                            return <Picker.Item key={c.code} 
                                                label={c.name} 
                                                value={c.name}

                                                />
                        })}
                    </Picker> */}
                
                <View style={{width:'80%', alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>Checkout()}>
                            <Text>Confirm</Text>
                        </TouchableOpacity>
                </View>
            </FormContainer>
            </KeyboardAwareScrollView>
    )
}

const mapStateToProps = (state) =>{
    const {cartItems} = state;
    return{
        cartItems:cartItems,
    }
}

export default connect(mapStateToProps,null) (Checkout)
