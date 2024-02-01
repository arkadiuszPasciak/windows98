import type { DsTextProps } from './ds-text.type'
import styles from './ds-text.module.scss'

export function DSText({ id, text }: DsTextProps) {
  return (
    <p className={styles['DSText']} data-testid={`ds-text-${id}`}>
      {text}
    </p>
  )
}
