import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

function Portal({ children }: Props) {
  const [portalDiv, setPortalDiv] = useState<HTMLDivElement>();

  useEffect(() => {
    const div = document.createElement('div') as HTMLDivElement;
    document.body.appendChild(div);
    setPortalDiv(div);
    return () => {
      document.body.removeChild(div);
    };
  }, []);

  if (!portalDiv) return null;

  return createPortal(children, portalDiv);
}

export default Portal;
