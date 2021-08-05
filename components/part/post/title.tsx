import styles from './title.module.sass'

interface Props {
  title: string
}

export function Title(props: Props) {
  return <div className={styles.title}>{props.title}</div>
}
