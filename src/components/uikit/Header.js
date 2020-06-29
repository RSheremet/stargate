import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({title, goBack}) => {
    return (
        <View style={styles.viewStyle}>
            {title === 'STAR GATE' || title === 'BATMAN' || title === 'SPIDERMAN' ? <View /> :
            <TouchableOpacity onPress={() => {goBack()}}>
                <Ionicons name={'ios-arrow-back'} style={styles.ButtonStyle} color={'#fff'}/>
            </TouchableOpacity>}
            <Text style={styles.textStyle}>
                { ((title).length > 25) ?
                    (((title).substring(0,25-3)) + '...') :
                    title }
            </Text>
        </View>
    )
}

export { Header }

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#30d0fe',
        height: 80,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingLeft: 22,
        paddingBottom: 10,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        flexDirection: 'row',
    },
    textStyle: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'AvenirNext-DemiBold',
    },
    ButtonStyle: {
        fontSize: 25,
        paddingBottom: 5,
        marginRight: 10,
    }
})