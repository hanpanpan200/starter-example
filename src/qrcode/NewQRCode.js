import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
})

export default class NewQRCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '1234567890',
    }
  }

  textChangeHandler = text => {
    this.setState({ text: text })
  }

  render() {
    const { text } = this.state
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={this.textChangeHandler}
        />
        <QRCode
          value={text}
          size={200}
          bgColor="purple"
          fgColor="white"
        />
      </View>
    )
  }
}
