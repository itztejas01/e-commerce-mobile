import React from 'react'
import { TouchableOpacity, View, Dimensions } from 'react-native'
import ProductCard from './ProductCard'

var {width} = Dimensions.get("window");
// console.log('width of the screen: ',width)

function ProductList(props) {

    const { item } = props;
    // console.log(item);
    
    return (
        <View>
        <TouchableOpacity 
        style={{width:'50%'}}
        onPress={()=>{
            props.navigation.navigate("Product Details",{
                item: item
            })
        }}
        >

            <View style={{width: width / 2, 
                backgroundColor:'gainsboro'}}>
            <ProductCard
            {...item}
            
            />

            </View>
            
        </TouchableOpacity>
        </View>
    )
}

export default ProductList
