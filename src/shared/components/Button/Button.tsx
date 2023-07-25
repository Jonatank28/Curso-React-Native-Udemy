import React from 'react'
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleProp,
    ViewStyle,
    ActivityIndicator,
    View,
} from 'react-native'
import { styles, buttonStyles } from './ButtonStyle'
import { ButtonType } from './type'

type ButtonProps = TouchableOpacityProps & {
    title: string
    marginTop?: number | string
    type?: ButtonType
    loading?: boolean
    disabled?: boolean
    onPress?: () => void
}

const Button = ({
    title,
    marginTop,
    loading,
    disabled,
    type = ButtonType.PRIMARY,
    onPress,
    ...props
}: ButtonProps) => {
    const containerStyle: StyleProp<ViewStyle> = {
        ...styles.container,
        ...buttonStyles[type].container,
        marginTop,
    }
    const containerStyleDisabled: StyleProp<ViewStyle> = {
        ...styles.container,
        ...buttonStyles.disabled.container,
        marginTop,
    }

    const textStyle = {
        ...styles.text,
        ...buttonStyles[type].text,
    }

    const handleOnPress = () => {
        if (!loading && !disabled && onPress) {
            onPress()
        }
    }

    return (
        <TouchableOpacity
            style={!disabled ? containerStyle : containerStyleDisabled}
            onPress={handleOnPress}
            {...props}
        >
            <View style={styles.content}>
                <Text style={textStyle}>{title}</Text>
                {loading && <ActivityIndicator size="small" color="white" />}
            </View>
        </TouchableOpacity>
    )
}

export default Button
