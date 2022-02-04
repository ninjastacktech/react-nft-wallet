import { useInjection } from 'inversify-react';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ApiBasePath } from '../../api-path/api-path-provider';
// import { ApiPathContext } from '../../api-path/api-path-provider';

export interface IProfileProps {}

export function Profile(props: IProfileProps) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  const path = useInjection(ApiBasePath);

//   const { apiBasePath } = useContext(ApiPathContext);

  useEffect(() => {
    setLoading(true);
    fetch(path.basePath + 'entries')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [path]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
}
