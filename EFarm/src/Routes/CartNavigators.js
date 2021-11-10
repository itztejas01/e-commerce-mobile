import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cart from '../Screens/Cart/Cart'
import Checkout from '../Screens/Cart/Checkout'

const Stack = createStackNavigator();

function MyStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen
           name="Cart"
           component={Cart}

           
           />
           <Stack.Screen
           name="Checkout"
           component={Cart}
           options={{
               title:'Checkout'
           }}
            
           
           />
           
       </Stack.Navigator>
    )
}

export default function CartNavigators(){
    return <MyStack />
}