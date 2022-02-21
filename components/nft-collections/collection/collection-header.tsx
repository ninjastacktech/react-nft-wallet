/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import * as React from 'react';

export interface ICollectionHeaderProps {
  item: any;
  showBackBtn?: boolean;
}

const CollectionHeader = (props: ICollectionHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-row my-8 justify-between items-center">
      <div className="flex flex-row items-center">
        {props.item?.imageUrl && <img src={props.item?.imageUrl} alt="" className="w-14 h-14 rounded-full mr-4"></img>}
        <h2 className="text-slate-900 text-xl font-semibold dark:text-white">{props.item?.name}</h2>
      </div>
      <button
        onClick={() => router.back()}
        className={`bg-slate-900 hover:bg-slate-700 text-white w-30 h-10 flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 font-medium rounded-lg text-base px-6 py-3.5`}>
        Back
      </button>
    </div>
  );
};

export default CollectionHeader;
