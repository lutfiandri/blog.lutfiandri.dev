import Highlight, {
  defaultProps,
  Language,
  RenderProps,
} from 'prism-react-renderer'
import { renderToString } from 'react-dom/server'
import { ReactElement } from 'react'
import styles from './codeblock.module.sass'

interface Props {
  children: ReactElement
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
      code={renderToString(props.children).trim()}
      language={language}
    >
      {(rprops: RenderProps) => (
        <pre
          className={`${rprops.className} ${styles.codeblock}`}
          style={{ ...rprops.style }}
        >
          {rprops.tokens.map((line, i: number) => (
            <div key={i} {...rprops.getLineProps({ line, key: i })}>
              {line.map((token, key) => {
                // top => tokenOutputProps
                const top = rprops.getTokenProps({ token, key })
                const spanHtml = { __html: top.children }

                return (
                  <span
                    key={key}
                    className={top.className}
                    style={top.style}
                    dangerouslySetInnerHTML={spanHtml}
                  />
                )
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
