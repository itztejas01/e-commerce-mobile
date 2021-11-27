import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
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
    
    const confirmOrder = () =>{
        setTimeout(()=>{
            props.clearCart();
            props.navigation.navigate("Cart")
        })
    }
    // console.log('confirm order: ',order)
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{fontSize:25, fontWeight:'bold', color:'black'}}>Confirm Order</Text>
            </View>
            {props.route.params ?(
                <View style={{borderWidth:2,borderColor:'pink'}}>
                    <Text style={styles.title}>Shipping to : </Text>
                    <View style={{padding:20}}>
                        <Text style={{color:'black',marginTop:10}}>Address to : {order.order.shippingAddress1} {order.order.shippingAddress2} </Text>
                        <Text style={{color:'black',marginTop:10}}>City : {order.order.city} </Text>
                        <Text style={{color:'black',marginTop:10}}>Zip Code : {order.order.zip} </Text>
                        <Text style={{color:'black',marginTop:10}}>Country : {order.order.country} </Text>
                    </View>
                    <Text style={styles.title}>Items:</Text>
                    {order.order.orderItems.map((x)=>{
                        return(
                            <ListItem style={styles.listItem} key={x.product.name} avatar>
                                <Left>
                                    <Thumbnail source={{uri:x.product.image ? x.product.image : 'https://images.unsplash.com/photo-1491926626787-62db157af940?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8aG9tZSxmdXJuaXR1cmV8fHx8fHwxNjM2MTczOTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600'}} />
                                </Left>
                                <Body style={styles.body}>
                                    <Left>
                                        <Text style={{color:'black'}}>{x.product.name}</Text>
                                    </Left>
                                    <Right>
                                        <Text style={{color:'black'}}>Rs.{x.product.price}</Text>
                                    </Right>
                                </Body>
                            </ListItem>
                        )
                    })}
                </View>
                
            ):null}
            <View style={{alignItems:'center', margin:20}}>
                    <TouchableOpacity onPress={confirmOrder}>
                        <Text style={{color:'green'}}>Place order</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
       
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
        margin:8
    },
    title:{
        alignSelf:'center',
        margin:8,
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    },
    listItem:{
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'center',
        width: width / 1.2

    },
    body:{
        margin:10,
        marginRight:50,

        alignItems:'center',
        flexDirection:'row'
    }
    
})

const mapDispatchToProps  = (dispatch) =>{
    return{
        clearCart: () => dispatch(actions.clearCart())
    }
}

export default connect(null,mapDispatchToProps)(Confirm)
