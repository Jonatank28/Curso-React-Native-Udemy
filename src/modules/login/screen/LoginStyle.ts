import { StyleSheet } from 'react-native'
import { theme } from '../../../shared/themes'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.bg.primary,
        justifyContent: 'center',
        padding: 16,
    },
    text: {
        textAlign: 'center',
    },
})
