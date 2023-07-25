import { View } from 'react-native'
import { styles } from './LoginStyle'
import Input from '../../../shared/components/Input/Input'
import Button from '../../../shared/components/Button/Button'
import { ButtonType } from '../../../shared/components/Button/type'
import TextCustom from '../../../shared/components/Text/Text'
import { TextType } from '../../../shared/components/Text/types'
import { theme } from '../../../shared/themes'

const Login = () => {
    const handleOnPress = () => {
        console.log('Pressionado')
    }

    return (
        <View style={styles.container}>
            <TextCustom
                color={theme.colors.grayTheme.gray80}
                type={TextType.BASE}
            >
                Texto com cor vermelha
            </TextCustom>
            <Input />
            <Button
                // loading
                // disabled
                title="Entrar"
                type={ButtonType.PRIMARY}
                onPress={handleOnPress}
                marginTop={10}
            />
        </View>
    )
}

export default Login
