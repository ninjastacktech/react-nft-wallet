import { useInjection } from 'inversify-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { ApiBasePath } from '../../components/api-path/api-path-provider';
import CollectionFull from '../../components/nft-collections/collection/collection-full';
import { AssetModel, CollectionModel } from '../../components/nft-collections/models/collection-models';
import { AuthContext } from '../../components/wallet/components/auth/auth-context';
import useLocalStorage from '../../extensions/LocalStorageHook';
import styles from '../../styles/Home.module.css';

const CollectionPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const path = useInjection(ApiBasePath);
  const { authState } = React.useContext(AuthContext);
  const [isLoading, setLoading] = React.useState(false);
  const [apiCollection, setApiCollection] = React.useState(null);
  const [assets, setAssets] = React.useState<AssetModel[]>([]);
  const [storedCollection, setStoredCollection] = useLocalStorage('activeCollection', null);

  console.log('1', storedCollection);

  React.useEffect(() => {
    return () => {
      console.log('clearing storage');
      setStoredCollection(null);
    };
  }, []);

  React.useEffect(() => {
    if (authState.isAuthenticated && slug && !storedCollection) {
      fetch(`${path.basePath}/collections/${authState.address}`)
        .then((res) => res.json())
        .then((data: CollectionModel[]) => {
          const collection = data.find((x) => x.slug === slug);
          setApiCollection(collection);
        })
        .catch((err) => {
          console.error('collections fetch err', err);
        });
    }
  }, [path, authState, slug, storedCollection]);

  React.useEffect(() => {
    if (authState.isAuthenticated && slug) {
      setLoading(true);
      fetch(`${path.basePath}/assets/${slug}/${authState.address}`)
        .then((res) => res.json())
        .then((data) => {
          setAssets(data?.sort((a: any, b: any) => a.name.localeCompare(b.name)));
          //b.stats?.averagePrice - a.stats?.averagePrice));
          setLoading(false);
        })
        .catch((err) => {
          console.error('collections fetch err', err);
          setLoading(false);
        });
    }
  }, [path, authState, slug]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja NFT Wallet: Collection {slug}</title>
      </Head>
      <main className={styles.main}>
        <CollectionFull
          collection={storedCollection ?? apiCollection}
          assets={assets}
          showBackBtn={true}></CollectionFull>
      </main>
    </div>
  );
};

export default CollectionPage;
