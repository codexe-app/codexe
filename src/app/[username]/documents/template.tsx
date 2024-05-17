'use client';
import React, { useEffect, useContext } from 'react';
import { PageState } from '@/utils/context';
import { onStart, onComplete } from "@/utils/router-events/events";

export default function Template({ children }: { children: React.ReactNode }) {
  const { setPageState } = useContext(PageState);

  useEffect(() => {
    const onPageLoad = () => {
      setPageState(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      onStart()
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
}
