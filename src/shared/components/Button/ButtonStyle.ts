import { StyleSheet } from 'react-native'
import { ButtonType } from './type'
import { theme } from '../../themes'

const buttonStyles = {
    [ButtonType.PRIMARY]: {
        container: {
            backgroundColor: 'blue',
        },
        text: {
            color: 'white',
        },
    },
    [ButtonType.SECONDARY]: {
        container: {
            backgroundColor: theme.colors.grayTheme.gray80,
        },
        text: {
            color: 'black',
        },
    },
    [ButtonType.DANGER]: {
        container: {
            backgroundColor: 'red',
        },
        text: {
            color: 'white',
        },
    },
    [ButtonType.DISABLED]: {
        container: {
            backgroundColor: theme.colors.grayTheme.gray100,
            pointerEvents: 'none',
        },
        text: {
            color: 'white',
        },
    },
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    text: {
        fontSize: 18,
    },
})

export { buttonStyles, styles }
