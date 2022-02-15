import * as React from 'react';
import CollectionAssetsList from './collection-assets-list';
import CollectionHeader from './collection-header';

export interface ICollectionProps {
  collection: any;
  assets: any[];
}

const Collection = (props: ICollectionProps) => {
  return (
    <div>
      <CollectionHeader item={props.collection} />

      <CollectionAssetsList assets={props.assets} />
    </div>
  );
};

export default Collection;
