'use client';
import React, { useEffect, useContext } from 'react';
import { PageState } from '@/utils/context';
import { onComplete } from "@/utils/router-events/events";
import { ConsoleLogger } from '@aws-amplify/core';

export default function Template({ children }: { children: React.ReactNode }) {
  const { setPageState } = useContext(PageState);

  useEffect(() => {
    const onPageLoad = () => {
      setPageState(true);
    };

    if (document.readyState === 'complete') {
      console.log(`page complete`)
      onPageLoad();
      onComplete()
    } else {
      console.log(`page not`)
      
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
}
