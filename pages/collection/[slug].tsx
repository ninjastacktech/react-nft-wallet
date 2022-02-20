import { useInjection } from 'inversify-react';
import { useRouter } from 'next/router';
import React from 'react';
import { ApiBasePath } from '../../components/api-path/api-path-provider';
import CollectionFull from '../../components/nft-collections/collection/collection-full';
import { AssetModel } from '../../components/nft-collections/models/collection-models';
import { AuthContext } from '../../components/wallet/components/auth/auth-context';
import styles from '../../styles/Home.module.css';

const CollectionPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const path = useInjection(ApiBasePath);
  const { authState } = React.useContext(AuthContext);
  const [isLoading, setLoading] = React.useState(false);
  const [assets, setAssets] = React.useState<AssetModel[]>([]);

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
    <main className={styles.main}>
      <CollectionFull assets={assets}></CollectionFull>
    </main>
  );
};

export default CollectionPage;
