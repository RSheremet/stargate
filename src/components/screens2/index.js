import {createStackNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from "./DetailsScreen"
import {
    BATMAN_HOME_HOME,
    BATMAN_DETAILS_DETAILS
} from "../routes";

export default createStackNavigator(
    {
        [BATMAN_HOME_HOME]: HomeScreen,
        [BATMAN_DETAILS_DETAILS]: DetailsScreen,
    },
    {
        headerMode: 'none'
    }
)