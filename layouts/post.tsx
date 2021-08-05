import { MDXProvider } from '@mdx-js/react'
import { ReactNode } from 'react'
import { Image, Header, Text, CodeBlock } from '../components/ui'
import Head from 'next/head'
import { PostMeta } from '../types/meta'
import { Title, Container } from '../components/part/post'

interface ImgProps {
  src: string
  alt: string
}

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
  pre: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
  code: CodeBlock,
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
