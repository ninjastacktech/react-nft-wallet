import * as React from 'react';
import Asset from './asset';
import CollectionHeader from './collection-header';

export interface ICollectionFullProps {
  collection?: any;
  assets: any[];
  showBackBtn?: boolean;
}

const CollectionFull = (props: ICollectionFullProps) => {
  return (
    <div>
      <CollectionHeader item={props.collection} showBackBtn={props.showBackBtn} />

      <div className="flex flex-row flex-wrap">
        {props.assets?.map((asset) => {
          return <Asset key={asset.tokenId} asset={asset} />;
        })}
      </div>
    </div>
  );
};

export default CollectionFull;
