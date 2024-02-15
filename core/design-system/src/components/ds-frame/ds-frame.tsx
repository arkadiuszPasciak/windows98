import { DSText } from '../../index';
import type { DSFrameProps } from './ds-frame.type';

export function DSFrame({ title, children, id }: DSFrameProps) {
  return (
    <div data-testid={`ds-frame-${id}`}>
      {title && (
        <DSText text={title} id={`frame-${id}`}  />
      )}
      {children}
    </div>
  );
}
