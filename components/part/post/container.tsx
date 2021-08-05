// import styled from 'styled-components'
import { ReactNode } from 'react'
import styles from './container.module.sass'

// export const Container = styled.div`
//   width: 100%;
//   max-width: 720px;
//   margin: 0 auto;
// `

interface Props {
  children: ReactNode
}

export function Container(props: Props) {
  return <div className={styles.container}>{props.children}</div>
}
