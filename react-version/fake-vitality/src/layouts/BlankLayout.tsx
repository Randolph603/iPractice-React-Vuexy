import { useSkin } from '@src/utility/hooks/useSkin';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children?: ReactNode;
  rest?: [Props];
}

const BlankLayout: React.FC<Props> = ({ children, ...rest }) => {
  const [isMounted, setIsMounted] = useState(false);
  useSkin();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='blank-page'>
      <div className='app-content content'>
        <div className='content-wrapper'>
          <div className='content-body'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default BlankLayout;
