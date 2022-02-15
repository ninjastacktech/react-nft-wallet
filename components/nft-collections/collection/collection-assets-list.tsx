import * as React from 'react';
import CollectionAsset from './collection-asset';

export interface ICollectionAssetsListProps {
  assets: any[];
}

const CollectionAssetsList = (props: ICollectionAssetsListProps) => {
  return (
    <div>
      {props.assets
        ?.map((asset) => {
          return <CollectionAsset key={asset.name} asset={asset} />;
        })}
    </div>
  );
};

export default CollectionAssetsList;
