import React, {useState, useEffect} from 'react'
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Left, Right,Text, Container, H1 } from 'native-base'


function SingleProduct(props) {
    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');
    return (
       <Container style={styles.container}>
           <ScrollView style={{marginBottom:80, padding:5 }}>
                <View style={styles.imageContainer}>
                    <Image
                    source={{uri : item.image ? item.image 
                        : 'https://images.unsplash.com/photo-1491926626787-62db157af940?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8aG9tZSxmdXJuaXR1cmV8fHx8fHwxNjM2MTczOTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600'}}
                    
                    resizeMode='contain'
                    style={styles.image}

                    
                    />
                </View>
                <View style={styles.contentContainer}>
                    <H1 style={styles.contentHeader}>{item.name}</H1>
                    <Text style={styles.contentText}>{item.brand}</Text>
                </View>
                {/* Todo : Description, rich Description and Availabilty */}
           </ScrollView>
           <View style={styles.bottomContainer}>
            <Left>
                <Text style={styles.price}>Rs.{item.price}</Text>
            </Left>
            <Right>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Add</Text>
                </TouchableOpacity>
            </Right>
           </View>
       </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'relative',
        height:"100%"
    },
    imageContainer:{
        backgroundColor:'white',
        padding:0,
        margin:0
    },
    image:{
        width:'100%',
        height:250
    },
    contentContainer:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    contentHeader:{
        fontWeight:'bold',
        marginBottom:20,
        
    },
    contentText:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:20
    },
    bottomContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        left:0,
        backgroundColor:'white'
    },
    price:{
        fontSize:20,
        color:'#ffd23f',
        fontWeight:'bold',
        marginBottom:10 
    },
    button: {
        width: 70,
        // marginTop: 20,
        backgroundColor: "green",
        padding: 15,
        marginBottom:10,
        marginRight:10,
        borderRadius: 15,
    },
    btnText: {
        color: "white",
        fontSize: 18,
        justifyContent: "center",
        textAlign: "center",
      },

})

export default SingleProduct
