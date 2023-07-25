import { StyleSheet } from 'react-native'
import { TextType } from './types'

const textStyles = {
    [TextType.BASE]: {
        fontSize: 16,
        color: 'black',
    },
    [TextType.SMALL]: {
        fontSize: 12,
        color: 'black',
    },
    [TextType.MEDIUM]: {
        fontSize: 20,
        color: 'black',
    },
    [TextType.XL]: {
        fontSize: 20,
        color: 'black',
    },
}

const styles = StyleSheet.create({
    defaultText: {
        fontSize: 16,
        color: 'black',
    },
})

export { textStyles, styles }
