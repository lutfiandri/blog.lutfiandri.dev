import { ReactNode } from 'react'
import styles from './blockquote.module.sass'

interface Props {
  children: ReactNode
}

export function Blockquote(props: Props) {
  return <blockquote className={styles.blockquote}>{props.children}</blockquote>
}
