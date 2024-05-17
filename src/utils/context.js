'use client';
import { createContext, useState } from 'react';

export const HomeLoc = createContext();

export const PageState = createContext();

export function PageStateProvider({ children }) {
  const [pageState, setPageState] = useState(true);

  return <PageState.Provider value={{ pageState, setPageState }}>{children}</PageState.Provider>;
}
