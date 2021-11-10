import React from 'react'
import { StyleSheet } from 'react-native'
import { Container,Badge, Text } from 'native-base'
import { connect } from 'react-redux'

function CartIcon(props) {
    return (
        <Container>
            {props.cartItems.length ? (
                <Badge style={styles.badge}>
                    <Text style={styles.text}>{props.cartItems.length}</Text>
                </Badge>
            ):null}
        </Container>
    )
}

const styles=StyleSheet.create({
    badge:{
        width:25,
        position:'absolute',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        top:-18,
        right:-15
    },
    text:{
        fontSize:12,
        width:100,
        fontWeight:'bold'
    }
})

const mapStateToProps = (state) => {
    const {cartItems} = state;
    return{
        cartItems:cartItems
    }
}

export default connect(mapStateToProps) (CartIcon)
