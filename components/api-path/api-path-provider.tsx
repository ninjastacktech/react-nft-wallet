import React, { useState } from 'react';
import { injectable, Container } from 'inversify';
import 'reflect-metadata';
import { Provider } from 'inversify-react';


@injectable()
export class ApiBasePath {
  readonly basePath = process.env.NEXT_PUBLIC_API_PATH || '/';
}

export interface ApiPathProps {
  children: React.ReactNode;
}

export const ApiPathProvider = ({ children }: ApiPathProps) => {
  const [container] = useState(() => {
    const c = new Container();
    c.bind(ApiBasePath).toSelf();
    return c;
  });
  return <Provider container={container}>{children}</Provider>;
};
