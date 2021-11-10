import React from 'react';
import {View, StyleSheet, Dimensions, Image, FlatList} from 'react-native';
import {Container,Content, 
    List,
    Left, Body, 
    ListItem, 
    Thumbnail, 
    Text
}from 'native-base';


var {width, height} = Dimensions.get("window")


function SearchProducts(props) {
   const {productsFiltered, navigation} = props
  return (

      <Content style={{width: width}} padder>
     {productsFiltered.length > 0 ? (
            productsFiltered.map((item)=>{
                console.log(item._id.$oid)
                return(
                <List>
                <ListItem
                onPress={() => {
                    navigation.navigate("Product Details",{
                        item:item
                    })
                    
                }} 
                key={item._id.$oid}
                avatar
                >
                    <Left>
                        <Thumbnail 
                        source={{uri: item.image ? item.image : 'https://source.unsplash.com/1600x900/?random,image'}}
                        />
                    </Left>
                    <Body>
                        <Text style={{color:'black'}}>{item.name}</Text>
                        <Text note>{item.description}</Text>
                    </Body>
                </ListItem>
               
                </List>
                )
            })
        ):(
            <View style={styles.center}>
            <Text style={{textAlign:'center', color:"black"}}>No Products found of selected Criteria</Text>
            </View>
        )}
        
       
      </Content>
  );
}
const styles = StyleSheet.create({
    center:{
        // width:width,
        height:height / 1.2,
        justifyContent:'center',
        alignItems:"center",
        // backgroundColor:'black'
    }
})

export default SearchProducts;
