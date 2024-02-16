import { DSText } from '../../index';
import type { DSFrameProps } from './ds-frame.type';
import styles from './ds-frame.module.scss'

export function DSFrame({
  children,
  className = '',
  id,
  title
}: DSFrameProps) {
  return (
    <div
	  	className={`${styles.frame} ${className}`}
		  data-testid={`ds-frame-${id}`}
    >
      {title && (
        <DSText
          className={styles.title}
          text={title}
          id={`frame-${id}`}
        />
      )}
      {children}
    </div>
  );
}
