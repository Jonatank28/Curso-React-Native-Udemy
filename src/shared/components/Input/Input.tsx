import { TextInput, TextInputProps } from 'react-native'
import { styles } from './InputStyle'

type InputProps = TextInputProps & {}

const Input = ({ ...props }: InputProps) => {
    return <TextInput style={styles.container} {...props} />
}

export default Input
