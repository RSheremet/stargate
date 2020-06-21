import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ({title}) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    )
}

export { Header }

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#30d0fe',
        height: 116,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 22,
        paddingBottom: 10,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'AvenirNext-DemiBold'
    }
})