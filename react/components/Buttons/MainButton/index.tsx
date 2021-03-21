import { DefaultTheme } from 'styled-components'
import { Button, Icon, Text, AA } from './styled'
import Link from 'next/link'
import P from '@react/components/Typography/Paragraph'
import { IconName } from '@fortawesome/fontawesome-common-types';

interface ThemeButtonProps {
  themed: DefaultTheme,
  icon: IconName,
  text: string,
  link: string
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ themed, icon, link, text, ...other }) => {

  return (
    <Button {...other}>
      <Link href={link}>
        <AA>
          <Icon style={{ cursor: 'pointer' }} icon={[themed.type === 'light' ? 'far' : 'fas', icon]} />
          <Text>
            <P>
              {text}
            </P>
          </Text>
        </AA>
      </Link>
    </Button>
  )
}

export default ThemeButton
