import React, {Component} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {ImageCard, Header, Layout} from "../uikit/index"
import {STARGATE_DETAILS} from "../routes";


const url = 'https://gitlab.com/gHashTag/react-native-init/raw/master/db.json'

export default class App extends Component {
    state = {
        title: 'STAR GATE',
        data: []
    }

    componentDidMount = async() => {
        const response = await fetch(url)
        const data = await response.json()
        this.setState({data})
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    title={this.state.title}
                />
                <Layout>
                        {this.state.data && this.state.data.map( i =>
                            <ImageCard
                                key={i.id}
                                image={i.image}
                                name={i.name}
                                navigation={() => this.props.navigation.navigate(STARGATE_DETAILS, (this.state.data, i))}
                            />
                        )}
                </Layout>

            </View>
        )
    }
}


