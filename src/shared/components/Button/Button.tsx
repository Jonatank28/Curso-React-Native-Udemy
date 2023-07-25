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
import { useFonts } from 'expo-font'
import { fonts } from '../../fonts'

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
    const [fontsLoaded] = useFonts({
        'Inter-Regular': fonts.inter.regular,
        'Inter-Semi-Bold': fonts.inter.semiBold,
        'Inter-Bold': fonts.inter.bold,
        'Inter-Extra-Bold': fonts.inter.ExtraBold,
    })

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
        fontFamily: 'Inter-Semi-Bold',
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
