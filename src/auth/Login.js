import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  login = () => {
    this.props.login()
    this.props.navigation.navigate('QRCode')
  }

  render() {
    return (
      <View>
        <Text onPress={this.login}>Login</Text>
      </View>
    )
  }
}

export default Login
