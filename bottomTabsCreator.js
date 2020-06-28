import React from 'react'
import {createBottomTabNavigator} from "react-navigation"
import One from './src/components/screens/index'
import Two from './src/components/screens2/index'
import Three from './src/components/screens3/index'

export default createBottomTabNavigator(
    {
        Stargate: One,
        Batman: Two,
        Spiderman: Three,
    }
)