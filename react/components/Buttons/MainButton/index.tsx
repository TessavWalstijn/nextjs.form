import { DefaultTheme } from 'styled-components'
import { Button, Icon, Text, AA } from './styled'
import Link from 'next/link'
import P from '@react/components/Typography/Paragraph'
import { IconName } from '@fortawesome/fontawesome-common-types';

interface ThemeButtonProps {
  themed: DefaultTheme,
  icon: IconName,
  text: string,
  link: string,
  onlySolid?: bool,
}

const MainButton: React.FC<ThemeButtonProps> = ({ themed, icon, link, text, onlySolid = false, ...other }) => {

  return (
    <Button {...other}>
      <Link href={link}>
        <AA>
          <Icon style={{ cursor: 'pointer' }} icon={[onlySolid === true ? 'fas' : (themed.type === 'light' ? 'far' : 'fas'), icon]} />
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

export default MainButton
