import { StackNavigator } from 'react-navigation'
import LoginContainer from './auth/LoginContainer'
import NewQRCode from './qrcode/NewQRCode'

const AppNavigator = StackNavigator({
  Contacts: {
    screen: LoginContainer,
    navigationOptions: {
      title: 'Login',
    },
  },
  QRCode: {
    screen: NewQRCode,
    navigationOptions: {
      title: 'QRCode example',
    },
  },
})

export default AppNavigator
