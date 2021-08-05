import { ReactNode } from 'react'
import styles from './text.module.sass'

interface Props {
  children: ReactNode
}

interface AProps extends Props {
  href: string
  target: string
}

function P(props: Props) {
  return <p className={styles.p}>{props.children}</p>
}

function Em(props: Props) {
  return <em className={styles.em}>{props.children}</em>
}

function A(props: AProps) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className={styles.a}>
      {props.children}
    </a>
  )
}

export const Text = { P, Em, A }
