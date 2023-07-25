import React from 'react'
import {
    Text as RNText,
    TextProps as TextPropsNative,
    TextStyle,
} from 'react-native'
import { styles, textStyles } from './TextStyle'
import { TextType } from './types'
import { useFonts } from 'expo-font'
import { fonts } from '../../fonts'

type TextProps = TextPropsNative & {
    color?: string
    type?: TextType
}

const TextCustom = ({ color, type = TextType.BASE, ...props }: TextProps) => {
    const [fontsLoaded] = useFonts({
        'Inter-Regular': fonts.inter.regular,
        'Inter-Semi-Bold': fonts.inter.semiBold,
        'Inter-Bold': fonts.inter.bold,
        'Inter-Extra-Bold': fonts.inter.ExtraBold,
    })

    const customTextStyle: TextStyle = {
        ...styles.defaultText,
        ...textStyles[type],
        color: color || styles.defaultText.color,
        fontFamily: type === TextType.XL ? 'Inter-Extra-Bold' : 'Inter-Regular',
    }

    return <RNText style={customTextStyle} {...props} />
}

export default TextCustom
