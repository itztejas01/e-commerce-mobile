import React from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, 
    Right, 
    Left, 
    Container, 
    Content, 
    H1, 
    ListItem, 
    Thumbnail, 
    Body } from 'native-base'

import { SwipeListView } from 'react-native-swipe-list-view'
import CartItems from './CartItems'

import Icon from 'react-native-vector-icons/FontAwesome'
import * as actions from '../../Redux/Actions/cartActions'
import { connect } from 'react-redux'

const {height, width} = Dimensions.get('window')

function Cart(props) {
    var total = 0;
    props.cartItems.forEach(cart =>{
        return (total+= cart.product.price)
    })
    return (
        <Container>
            {props.cartItems.length ? (
                <Container>
                    
                    {/* {props.cartItems.map(data => {
                        return (
                            <CartItems item={data} />
                        )
                    })} */}
                    <SwipeListView
                    data = {props.cartItems}
                    renderItem={(data) => (
                        // console.log('data are: ',data)
                        <CartItems item={data} />
                        
                    )}
                    renderHiddenItem={(data)=>(
                        <View style={styles.hiddenContainer}>
                            <TouchableOpacity 
                            style={styles.hiddenButton}
                            onPress={()=>{
                                props.removeFromCart(data.item)
                            }}
                            >
                                <Icon name="trash" color={"white"} size={30} />
                            </TouchableOpacity>
                        </View>
                    )}
                    disableRightSwipe={true}
                    previewOpenDelay={3000}
                    friction={1000}
                    tension={40}
                    leftOpenValue={75}
                    stopLeftSwipe={75}
                    rightOpenValue={-75}
                    />

                    <View style={styles.bottomContainer}>
                        <Left>
                            <Text style={styles.price}>Rs. {total}</Text>
                        </Left>
                        <Right>
                            <TouchableOpacity onPress={()=>{ 
                                props.clearCart()
                            }}>
                                <Text style={{margin:20, color:'red'}}>Clear cart</Text>
                            </TouchableOpacity>
                        </Right>
                        <Right>
                            <TouchableOpacity onPress={()=>{
                                props.navigation.navigate("Checkout")
                            }}>
                                <Text style={{marginRight:10}}>Checkout</Text>
                            </TouchableOpacity>
                        </Right>
                    </View>
                </Container>
            ):(
                <Container style={styles.emptyContainer}>
                    <Text>Carts is Empty</Text>
                    <Text onPress={()=>{
                        props.navigation.navigate("Home")
                    }}>Add Products to cart</Text>
                </Container>
            )}

        </Container>
    )
}

const styles = StyleSheet.create({
    emptyContainer:{
        height: height,
        alignItems:'center',
        justifyContent:'center'
    },
    bottomContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        left:0,
        backgroundColor:'white',
        elevation:10
    },
    price:{
        fontSize:16,
        padding:20,
        color:'red'
    },
    hiddenContainer:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row'
    },
    hiddenButton:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:20,
        height:70,
        width:width /1.2
    }

})

const mapStateToProps = (state) =>{
    const { cartItems } = state
    return{
        cartItems: cartItems,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        clearCart: () => dispatch(actions.clearCart()),
        removeFromCart: (item) => dispatch(actions.removeFromCart(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
