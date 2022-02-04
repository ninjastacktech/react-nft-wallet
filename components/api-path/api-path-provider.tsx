import React from 'react';

export const ApiPathContext = React.createContext<{ apiBasePath: string }>({ apiBasePath: '/' });

export interface ApiPathProps {
  children: React.ReactNode;
}

export const ApiPathProvider = ({ children }: ApiPathProps) => {
  const pathValue = { apiBasePath: process.env.NEXT_PUBLIC_API_PATH || '/' };
  return <ApiPathContext.Provider value={pathValue}>{children}</ApiPathContext.Provider>;
};
