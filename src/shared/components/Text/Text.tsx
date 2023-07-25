import React from 'react'
import {
    Text as RNText,
    TextProps as TextPropsNative,
    TextStyle,
} from 'react-native'
import { styles, textStyles } from './TextStyle'
import { TextType } from './types'

type TextProps = TextPropsNative & {
    color?: string
    type?: TextType
}

const TextCustom = ({ color, type = TextType.BASE, ...props }: TextProps) => {
    const customTextStyle: TextStyle = {
        ...styles.defaultText,
        ...textStyles[type],
        color: color || styles.defaultText.color,
    }

    return <RNText style={customTextStyle} {...props} />
}

export default TextCustom
