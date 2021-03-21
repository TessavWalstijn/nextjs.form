import { DefaultTheme } from 'styled-components'
import { Button, Icon, Text } from './styled'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb as faLightbulbR } from '@fortawesome/free-regular-svg-icons'
import { faLightbulb as faLightbulbS } from '@fortawesome/free-solid-svg-icons'
import P from '@react/components/Typography/Paragraph'

library.add(faLightbulbR, faLightbulbS);

interface ThemeButtonProps {
  themed: DefaultTheme
  onClick: (theme: 'dark' | 'light') => void
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ themed, onClick, ...other }) => {
  console.log(themed.type)

  return (
    <Button {...other} onClick={() => { onClick(themed.type === 'light' ? 'dark' : 'light') }} >
      <Icon style={{ cursor: 'pointer' }} icon={[themed.type === 'light' ? 'far' : 'fas', 'lightbulb']} />
      <Text>
        <P>
          Theme
        </P>
      </Text>
    </Button>
  )
}

export default ThemeButton
