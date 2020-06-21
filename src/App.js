import React, {Component} from 'react'
import {View, Dimensions} from 'react-native'
import {ImageCard, Header} from "./components/uikit/index"
import {width, height} from "../constants"


const url = 'https://gitlab.com/gHashTag/react-native-init-data/-/raw/master/db.json'

export default class App extends Component {
  state = {
    title: 'STAR GATE',
    data: []
  }

  componentDidMount = async() => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({data})
    } catch (e) {
      throw e
    }

  }

  render() {
    console.log('width, height', width, height)
    return (
        <View>
          <Header
              title={this.state.title}
          />
          <ImageCard />
        </View>
    )
  }
}
