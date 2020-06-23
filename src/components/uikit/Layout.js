import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'

const Layout = (props) => {
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                {props.children}
            </View>
        </ScrollView>
    )
}

export { Layout }

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
})