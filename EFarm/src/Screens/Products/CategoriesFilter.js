import React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native'
import { ListItem, Badge, Text } from 'native-base'

function CategoriesFilter(props) {
    const {categories, CategoriesFilter, productsCtg, active, setActive} = props
    return (
        <View>
            <ScrollView
            bounces={true} 
            horizontal={true}
            style={{backgroundColor:'white'}}
            
            >
            <ListItem style={{margin:0,padding:0,borderRadius:0}}>
                <TouchableOpacity
                key={1}
                onPress= {()=>{
                    CategoriesFilter('all'),
                    setActive(-1)
                }}
                >
                    <Badge style={[styles.center,{margin:5},
                    active === -1 ? styles.active : styles.inActive
                    ]}>
                        <Text style={{color:'white'}}>All</Text>
                    </Badge>

                </TouchableOpacity>
                {categories.map((item)=>(
                    // console.log(item._id.$oid)
                     <TouchableOpacity
                     key={item._id.$oid}
                     onPress= {()=>{
                         CategoriesFilter(item._id.$oid),
                         setActive(categories.indexOf(item))
                     }}
                     >
                         <Badge style={[styles.center,
                         {margin:5},
                         active === categories.indexOf(item) ? styles.active : styles.inActive
                         ]}>
                             <Text style={{color:'white'}}>{item.name}</Text>
                         </Badge>
     
                     </TouchableOpacity>
                ))}
            </ListItem>

            </ScrollView>
        </View>
    )
}
const styles= StyleSheet.create({
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    active:{
        backgroundColor:'#03bafc'
    },
    inActive:{
        backgroundColor:"#a0e1eb"
    }
})
export default CategoriesFilter
