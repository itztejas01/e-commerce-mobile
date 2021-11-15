import React from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Checkout from '../Screens/Cart/Checkout/Checkout'
import Payment from '../Screens/Cart/Checkout/Payment'
import Confirm from '../Screens/Cart/Checkout/Confirm'

const Tab = createStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false
        }}>
            <Tab.Screen name="Checkout" component={Checkout} />
            <Tab.Screen name="Payment" component={Payment} />
            <Tab.Screen name="Confirm" component={Confirm} />
        </Tab.Navigator>
    )
}

export default function CheckoutNavigator(){
    return <MyTabs />
}
