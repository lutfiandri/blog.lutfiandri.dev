import styled from 'styled-components'
import NextImage from 'next/image'

// const Wrapper = styled.div`
//   position: relative;
//   width: 100%;
// `

interface ImgProps {
  src: string
  alt: string
}

export default function Image(props: ImgProps) {
  return (
    <NextImage
      src={props.src}
      alt={props.alt}
      layout="responsive"
      width={1280}
      height={720}
    />
  )
}
