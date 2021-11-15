import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Left,
Right,
ListItem,
Thumbnail,
Body

} from 'native-base'
import { connect } from 'react-redux'
import * as actions from '../../../Redux/Actions/cartActions'

const {height, width} = Dimensions.get('window')

function Confirm(props) {
    const {order} = props.route.params
    // console.log('confirm order: ',order)
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{fontSize:25, fontWeight:'bold', color:'black'}}>Confirm Order</Text>
            </View>
            {props.route.params ?(
                <View style={{borderWidth:2,borderColor:'pink'}}>
                    <Text style={styles.shipping}>Shipping to : </Text>
                    <View style={{padding:8}}>
                        <Text style={{color:'black',marginTop:10}}>Address to : {order.order.shippingAddress1} {order.order.shippingAddress2} </Text>
                        <Text style={{color:'black',marginTop:10}}>City : {order.order.city} </Text>
                        <Text style={{color:'black',marginTop:10}}>Zip Code : {order.order.zip} </Text>
                        <Text style={{color:'black',marginTop:10}}>Country : {order.order.country} </Text>
                    </View>
                </View>
                
            ):null}
        </ScrollView>
        // <View>
        //     <Text style={{color:"black"}}>COnfirm screen</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:height,
        padding:10,
        alignItems:'center',
        backgroundColor:'white'
    },
    titleContainer:{
        margin:10
    },
    shipping:{
        alignSelf:'center',
        margin:8,
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    }
})

export default Confirm
