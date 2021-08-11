import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import styles from './codeblock.module.sass'

interface Props {
  children: string
  className: string
}

export function CodeBlock(props: Props) {
  let language: Language
  try {
    language = props.className.replace(/language-/, '') as Language
  } catch (e) {
    language = 'markup'
  }

  return (
    <Highlight
      {...defaultProps}
      code={props.children.trim()}
      language={language}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${styles.codeblock}`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={i} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
