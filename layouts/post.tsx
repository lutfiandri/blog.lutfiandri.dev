import { MDXProvider } from '@mdx-js/react'
import Image from '../components/ui/image'

interface ImgProps {
  src: string
  alt: string
}

const components = {
  img: Image,
}

interface Props {}

export default function Post(props: Props): JSX.Element {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  )
}
