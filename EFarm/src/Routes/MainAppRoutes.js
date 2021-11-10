import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeNavigators from './HomeNavigators'
import CartNavigators from './CartNavigators'
import CartIcon from '../Components/CartIcon'



const Tab = createBottomTabNavigator();


function MainAppRoutes() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            KeyboardHidesTabBar:true,
            showLabel:false,
            activeTintColor:'#e91e63'
        }}
        >
            <Tab.Screen name="Home" component={HomeNavigators} 
            options={{
                headerShown:false,
                tabBarIcon:({color}) =>(
                    <Icon 
                    name="home"
                    style={{position:"relative"}}
                    color={color}
                    size={30}
                    />
                )
            }} 
            />

            <Tab.Screen 
            name="Cart" 
            component={CartNavigators} 
            options={{
                headerShown:false,
                tabBarIcon:({color}) => (
                    <View style={{marginTop:10}}>
                    <Icon 
                    name="shopping-cart"
                    color={color}
                    size={30}
                />
                <CartIcon />
                </View>
                )
            }} 
            />

            <Tab.Screen
             name="Admin" 
             component={HomeNavigators} 
             options={{
                headerShown:false,
                 tabBarIcon:({color}) => (
                     <Icon 
                     name="cog"
                     color={color}
                     size={30}
 
                 />
                 )
             }}
            
            />

            <Tab.Screen
             name="User" 
             component={HomeNavigators} 
             options={{
                headerShown:false,
                 tabBarIcon:({color}) => (
                     <Icon 
                     name="user"
                     color={color}
                     size={30}
 
                 />
                 )
             }}
            
            />  

        </Tab.Navigator>

        
    )
}

export default MainAppRoutes
