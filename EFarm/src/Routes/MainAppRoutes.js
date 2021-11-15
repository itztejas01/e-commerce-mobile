import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeNavigators from './HomeNavigators'
import CartNavigators from './CartNavigators'
import CartIcon from '../Components/CartIcon'
import SplashScreen from '../Screens/SplashScreen'



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabStack() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            showLabel:false,
            activeTintColor:'#e91e63',    
        }}
        screenOptions={{
            tabBarHideOnKeyboard:true
        }}
        >
            <Tab.Screen name="HomeScreen" component={HomeNavigators} 
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
            name="CartScreen" 
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

function MainAppRoutes() {
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="TabScreen" component={TabStack} />
        </Stack.Navigator>
    )

    
}

export default MainAppRoutes
