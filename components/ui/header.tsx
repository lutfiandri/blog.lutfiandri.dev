import { ReactNode } from 'react'
import styles from './header.module.sass'

interface Props {
  children: ReactNode
}

function H1(props: Props) {
  return <h1 className={`${styles.header} ${styles.h1}`}>{props.children}</h1>
}

function H2(props: Props) {
  return <h2 className={`${styles.header} ${styles.h2}`}>{props.children}</h2>
}

function H3(props: Props) {
  return <h3 className={`${styles.header} ${styles.h3}`}>{props.children}</h3>
}

function H4(props: Props) {
  return <h4 className={`${styles.header} ${styles.h4}`}>{props.children}</h4>
}

function H5(props: Props) {
  return <h5 className={`${styles.header} ${styles.h5}`}>{props.children}</h5>
}

function H6(props: Props) {
  return <h6 className={`${styles.header} ${styles.h6}`}>{props.children}</h6>
}

export const Header = { H1, H2, H3, H4, H5, H6 }
