import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import ProductContainer from '../Screens/Products/ProductContainer'
import SingleProduct from '../Screens/Products/SingleProduct'

const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen 
            name="Home"
            component={ProductContainer}
            options={{
                headerShown:false,
            }}
            
            />
              <Stack.Screen 
            name="Product Details"
            component={SingleProduct}
            ScreenOptions={{
                headerShown:true,
            }}
            
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigators(){
    return <MyStack />
}
