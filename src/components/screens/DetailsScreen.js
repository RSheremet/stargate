import React from 'react'
import {View, Text} from 'react-native'
import {Header} from "../uikit"
import Icon from "react-native-vector-icons/FontAwesome";
import HTML from 'react-native-render-html';


class DetailsScreen extends React.PureComponent {
    render() {
        console.log(this.props)
        return(
            <View>
                <Header
                    title={this.props.navigation.state.params.name}
                    goBack={this.props.navigation.goBack}
                />
                <HTML html={this.props.navigation.state.params.info} />
                <Icon name="rocket" size={30} color="#900" />
            </View>
        )
    }
}

export default DetailsScreen