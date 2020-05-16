import { Platform } from 'react-native'

const OS_API_HOST = {
    ios: 'http://127.0.0.1',
    android: 'http:10.0.2.2',
}

const config = {
    API_HOST: OS_API_HOST[Platform.OS],
    API_PORT: '3000',
}

export default config;