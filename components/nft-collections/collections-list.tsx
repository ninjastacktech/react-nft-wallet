import { useInjection } from 'inversify-react';
import * as React from 'react';
import { ApiBasePath } from '../api-path/api-path-provider';
import { AuthContext } from '../wallet/components/auth/auth-context';
import CollectionFull from './collection/collection-full';
import CollectionTile from './collection/collection-tile';
import { CollectionLayoutContext } from './collections-list-host';
import { AssetModel } from './models/collection-models';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface ICollectionsListNewProps {
  collections: any[];
}

const CollectionsList = (props: ICollectionsListNewProps) => {
  const path = useInjection(ApiBasePath);
  const { authState } = React.useContext(AuthContext);
  const { layout } = React.useContext(CollectionLayoutContext);

  const collections = props.collections;
  const [assets, setAssets] = React.useState<{ [slug: string]: AssetModel[] }>({});
  const [isLoading, setLoading] = React.useState(false);

  const assetsResultRef = React.useRef<any>();
  assetsResultRef.current = assets;

  React.useEffect(() => {
    if (!path || !authState?.isAuthenticated || !collections?.length) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    let continueUpdates = true;

    const requestsToMake = collections.map((crtCol) => async () => {
      try {
        const response = await fetch(`${path.basePath}/assets/${crtCol.slug}/${authState.address}`, {
          signal: signal,
        });
        const currentAssets = await response.json();

        await timeout(1000);

        if (!continueUpdates) {
          return;
        }
        assetsResultRef.current = { ...assetsResultRef.current, [crtCol.slug]: currentAssets };
        setAssets(assetsResultRef.current);
      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.log('Canceled chain of collections fetch');
        } else {
          console.error(`assets/${crtCol.slug}/${authState.address}`, err);
        }
      }
    });

    requestsToMake.reduce((p, req) => {
      return p.then(() => req());
    }, Promise.resolve());

    return () => {
      // cancel the request before component unmounts
      controller.abort();
      continueUpdates = false;
    };
  }, [path, authState, collections]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={`flex ${layout === 'eager' ? 'flex-col' : 'flex-row flex-wrap'}`}>
      {collections.map((col) => {
        return layout === 'eager' ? (
          <CollectionFull key={col.slug} collection={col} assets={assets[col.slug]}></CollectionFull>
        ) : (
          <CollectionTile key={col.slug} collection={col} assets={assets[col.slug]} />
        );
      })}
    </div>
  );
};

export default CollectionsList;
