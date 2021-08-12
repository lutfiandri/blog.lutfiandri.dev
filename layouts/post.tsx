import { MDXProvider } from '@mdx-js/react'
import { ReactNode } from 'react'
import { Image, Header, Text, CodeBlock, Blockquote } from '@/components/ui'
import Head from 'next/head'
import { PostMeta } from '@/types/meta'
import { Title, Container } from '@/components/part/post'

const components = {
  img: Image,
  h1: Header.H1,
  h2: Header.H2,
  h3: Header.H3,
  h4: Header.H4,
  h5: Header.H5,
  h6: Header.H6,
  p: Text.P,
  em: Text.Em,
  a: Text.A,
  ul: Text.Ul,
  ol: Text.Ol,
  li: Text.Li,
  pre: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
  code: CodeBlock,
  blockquote: Blockquote,
}

interface Props {
  children: ReactNode
  meta: PostMeta
}

/**
 * @returns Post layout
 */
export default function Post(props: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{props.meta.title}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
          integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
          crossOrigin="anonymous"
        />
      </Head>
      <MDXProvider components={components}>
        <main>
          <Container>
            <Title title={props.meta.title} />
            <div>{props.children}</div>
          </Container>
        </main>
      </MDXProvider>
    </>
  )
}
