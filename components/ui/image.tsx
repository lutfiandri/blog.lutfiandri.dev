import NextImage from 'next/image'
import styles from './image.module.sass'

interface ImgProps {
  src: string
  alt: string
}

/**
 * @returns next/image with 100% width and auto height
 */
export function Image(props: ImgProps) {
  return (
    <div className={styles.wrapper}>
      <NextImage
        src={props.src}
        alt={props.alt}
        layout="responsive"
        width={1280}
        height={720}
      />
    </div>
  )
}
