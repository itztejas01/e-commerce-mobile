import React from 'react'
import { 
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    TouchableOpacity

 } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../Redux/Actions/cartActions'
 
 var {width} = Dimensions.get("window");
 
 function ProductCard(props) {  
    const {name, price, image, countInStock} = props
    // console.log(props)
    return (
        <View style={styles.container}>
            <Image style={styles.image} 
            resizeMode="contain"
            source={{uri: image ? image : 'https://images.unsplash.com/photo-1491926626787-62db157af940?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8aG9tZSxmdXJuaXR1cmV8fHx8fHwxNjM2MTczOTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600'}}
            />
            <View style={styles.card} />
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0,15 - 1)
                + '...' : props.name    
            }
            
            </Text>
            <Text style={styles.price}>Rs.{price}</Text>

            {countInStock > 0 ? (
                <View style={{marginTop:10}}>
                   <TouchableOpacity
                    style={styles.button}
                   
                   onPress={() => {
                       props.addItemsToCart(props)
                   }}>
                       <Text style={{color:'white'}}>Add</Text>
                   </TouchableOpacity>
                </View>
            ):<Text style={{marginTop:20}}>Currently Unavilable</Text>}
        </View>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addItemsToCart: (product) =>
            dispatch(actions.addToCart({quantity:1, product}))
    }
}

const styles = StyleSheet.create({
    container:{
        width: width / 2 - 20,
        height: width / 1.7,
        padding:10,
        borderRadius:12,
        marginTop:5,
        marginBottom: 10,
        // marginLeft:1,
        // marginRight:10,
        alignItems:'center',
        elevation:10,
        backgroundColor:'white',
    },
    image:{
        width: width / 2 - 20 - 10,
        height:width / 2 - 20 - 10, 
        backgroundColor: 'transparent',
        position:'absolute',
        top: -30,
        borderRadius:12
    },
    card:{
        marginBottom:10,
        height: width / 2 - 20 - 90,
        backgroundColor:'transparent',
        width: width /2 -20 -10,
    },
    title:{
        fontWeight:'bold',
        fontSize:14,
        textAlign:'center',
        color:"black"
    },
    price:{
    fontSize:20,
    fontWeight:'bold',
    color: '#ffd23f',
    marginTop:10
    },
    button:{
        backgroundColor:'green', 
        width:50,
        borderRadius:10, 
        padding:10
    }
})




export default connect(null, mapDispatchToProps)(ProductCard)
