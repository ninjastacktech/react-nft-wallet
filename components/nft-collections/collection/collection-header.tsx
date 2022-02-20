/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export interface ICollectionHeaderProps {
  item: any;
}

const CollectionHeader = (props: ICollectionHeaderProps) => {
  return (
    <div className="flex flex-row items-center my-8">
      {props.item?.imageUrl && <img src={props.item?.imageUrl} alt="" className="w-14 h-14 rounded-full mr-4"></img>}
      <h2 className='text-slate-900 text-xl font-semibold dark:text-white'>{props.item?.name}</h2>
    </div>
  );
};

export default CollectionHeader;
