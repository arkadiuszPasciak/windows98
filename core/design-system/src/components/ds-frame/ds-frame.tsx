import { DSText } from '../../index';
import type { DSFrameProps } from './ds-frame.type';
import styles from './ds-frame.module.scss'

export function DSFrame({ title, children, id }: DSFrameProps) {
  return (
    <div
	  	className={styles.frame}
		  data-testid={`ds-frame-${id}`}
    >
      {title && (
        <DSText
          classNames={styles.title}
          text={title}
          id={`frame-${id}`}
        />
      )}
      {children}
    </div>
  );
}
