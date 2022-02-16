import * as React from 'react';
import CollectionAsset from './collection-asset';

export interface ICollectionAssetsListProps {
  assets: any[];
}

const CollectionAssetsList = (props: ICollectionAssetsListProps) => {
  return (
    <div className="flex flex-row flex-wrap">
      {props.assets
        ?.map((asset) => {
          return <CollectionAsset key={asset.tokenId} asset={asset} />;
        })}
    </div>
  );
};

export default CollectionAssetsList;
