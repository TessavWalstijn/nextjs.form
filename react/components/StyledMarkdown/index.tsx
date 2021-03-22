import P from '@react/components/Typography/Paragraph'
import H from '@react/components/Typography/Header'
import A from '@react/components/Typography/Link'
import Hr from '@react/components/Typography/BreakLine'
import { Markdown } from './styled'

export interface StyledMarkdownProps {
  text: string
}

const StyledMarkdown: React.FC<StyledMarkdownProps> = ({ text }) => {
  return (
    <Markdown
      escapeHtml={false}
      source={text}
      renderers={{
        paragraph: (props: any) => (
          <P mt={0} mb={2} ml={3} mr={3} {...props} />
        ),
        heading: (props: any) => (
          <H mt={1} mb={2} variant={`h${props.level}`} {...props} />
        ),
        link: (props: any) => (
          <A {...props} />
        ),
        thematicBreak: (props: any) => (
          <Hr {...props} />
        )
      }}
    />
  )
}

export default StyledMarkdown


