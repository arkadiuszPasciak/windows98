import type { DSTextProps } from './ds-text.type'
import styles from './ds-text.module.scss'

export function DSText({
  className = '',
  id,
  text
}: DSTextProps) {
  return (
    <p
      className={`${styles['DSText']} ${className}`}
      data-testid={`ds-text-${id}`}
    >
      {text}
    </p>
  )
}
