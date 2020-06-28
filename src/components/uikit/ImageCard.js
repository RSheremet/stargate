import React from 'react'
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native'
import {width} from "../../../constants"

const ImageCard = (props) => {
    const { h1, cover, container } = styles
    return (
        <TouchableOpacity onPress={props.navigation}>
            <View style={container}>
                <Image
                    style={cover}
                    source={{uri: props.image}}
                />
                <Text style={h1}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export { ImageCard }

const styles = StyleSheet.create({
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        alignItems: 'center',
        textAlign: 'center',
        width: width / 2.4
    },
    cover: {
        width: width / 2.4,
        height: width * 0.63,
        borderRadius: 5,
        marginTop: 10
    },
    container: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4,
    }
})
