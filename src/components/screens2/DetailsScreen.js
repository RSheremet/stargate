import React from 'react'
import {View, Image, StyleSheet, ScrollView} from 'react-native'
import {Header} from "../uikit"
import Icon from "react-native-vector-icons/FontAwesome";
import HTML from 'react-native-render-html';
import {width} from "../../../constants";


class DetailsScreen extends React.PureComponent {
    render() {
        console.log(this.props)

        return(
            <View style={{paddingBottom: 30}}>
                <Header
                    title={this.props.navigation.state.params.name}
                    goBack={this.props.navigation.goBack}
                    style={{width: '100%'}}
                />
                <ScrollView>
                    <View style={styles.container}>
                        <Image source={{uri : this.props.navigation.state.params.image}} style={styles.cover} />
                        <HTML html={'<div style="padding: 0 15px; margin-top: 20px; line-height: 20px;">' + this.props.navigation.state.params.info + '</div>'} />
                        {/*<Icon name="rocket" size={30} color="#900" />*/}
                    </View>
                    <View style={{height: 100}}>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default DetailsScreen

const styles = StyleSheet.create({
    cover: {
        width: width / 2.4,
        height: width * 0.63,
        borderRadius: 5,
        marginTop: 10,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    }
})