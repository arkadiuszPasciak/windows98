import { DSText } from '../../index';

interface DSFrameProps {
	title?: string
  	children: React.ReactNode
	id: string
}

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
