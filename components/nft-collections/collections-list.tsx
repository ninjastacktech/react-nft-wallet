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
  const [stats, setStats] = React.useState<{ [slug: string]: any }>({});
  const [isLoading, setLoading] = React.useState(false);

  const assetsResultRef = React.useRef<any>();
  assetsResultRef.current = assets;

  const statsResultRef = React.useRef<any>();
  statsResultRef.current = stats;

  React.useEffect(() => {
    if (!path || !authState?.isAuthenticated || !collections?.length) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    let continueUpdates = true;

    const requestsToMake = collections.map((crtCol) => async () => {
      try {
        const assetsResponse = await fetch(`${path.basePath}/assets/${crtCol.slug}/${authState.address}`, {
          signal: signal,
        });
        const currentAssets = await assetsResponse.json();
        await timeout(500);

        const statsResponse = await fetch(`${path.basePath}/collection/${crtCol.slug}/stats`, {
          signal: signal,
        });
        const currentStats = await statsResponse.json();
        await timeout(1000);

        if (!continueUpdates) {
          return;
        }
        assetsResultRef.current = { ...assetsResultRef.current, [crtCol.slug]: currentAssets };
        setAssets(assetsResultRef.current);

        statsResultRef.current = { ...statsResultRef.current, [crtCol.slug]: currentStats };
        setStats(statsResultRef.current);
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
          <CollectionTile key={col.slug} collection={col} assets={assets[col.slug]} stats={stats[col.slug]} />
        );
      })}
    </div>
  );
};

export default CollectionsList;
