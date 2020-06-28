import React from 'react'
import One from './src/screens1'
import Two from './src/screens2'
import Three from './src/screens3'
import {createBottomTabNavigator} from "react-navigation";

export default createBottomTabNavigator(
    {
        Stargate: One,
        Batman: Two,
        Spiderman: Three,
    }
)