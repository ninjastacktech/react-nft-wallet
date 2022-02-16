import * as React from 'react';
import { AuthContext } from '../wallet/components/auth/auth-context';
import { useInjection } from 'inversify-react';
import { ApiBasePath } from '../api-path/api-path-provider';
import Collection from './collection/collection';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface ICollectionsListNewProps {}

export interface CollectionModel {
  slug: string;
}
export interface AssetModel {}

const CollectionsList = (props: ICollectionsListNewProps) => {
  const path = useInjection(ApiBasePath);
  const { authState } = React.useContext(AuthContext);

  const [collections, setCollections] = React.useState<CollectionModel[]>([]);
  const [collectionAssets, setCollectionAssets] = React.useState<{ [slug: string]: AssetModel[] }>({});
  const [isLoading, setLoading] = React.useState(false);
  const [authConnected, setAuthConnected] = React.useState(false);

  React.useEffect(() => {
    authState.isAuthenticated ? setAuthConnected(true) : setAuthConnected(false);

    if (authState.isAuthenticated) {
      setLoading(true);
      fetch(`${path.basePath}/collections/${authState.address}`)
        .then((res) => res.json())
        .then((data) => {
          setCollections(data?.sort((a: any, b: any) => b.stats?.averagePrice - a.stats?.averagePrice));
          setLoading(false);
        })
        .catch((err) => {
          console.error('collections fetch err', err);
          setLoading(false);
        });
    }
  }, [path, authState]);

  const assetsResultRef = React.useRef<any>();
  assetsResultRef.current = collectionAssets;

  React.useEffect(() => {
    if (!path || !authState?.isAuthenticated || !collections?.length) {
      return;
    }

    const requestsToMake = collections.map((crtCol) => async () => {
      try {
        const response = await fetch(`${path.basePath}/assets/${crtCol.slug}/${authState.address}`);
        const currentAssets = await response.json();

        await timeout(1000);

        assetsResultRef.current = { ...assetsResultRef.current, [crtCol.slug]: currentAssets };
        setCollectionAssets(assetsResultRef.current);
      } catch (error) {
        console.error(`assets/${crtCol.slug}/${authState.address}`, error);
      }
    });

    requestsToMake.reduce((p, req) => {
      return p.then(() => req());
    }, Promise.resolve());
  }, [path, authState, collections]);

  if (isLoading) return <p>Loading...</p>;
  if (!authConnected) return <p>Not connected...</p>;

  return (
    <div className="flex flex-col">
      {collections.map((col) => (
        <Collection key={col.slug} collection={col} assets={collectionAssets[col.slug]}></Collection>
      ))}
    </div>
  );
};

export default CollectionsList;
