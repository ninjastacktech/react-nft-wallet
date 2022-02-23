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
    <div className="flex flex-row my-8 mx-2 items-center">
      {props.showBackBtn && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform transition duration-500 hover:scale-125 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => router.back()}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      )}
      <div className="flex flex-row items-center">
        <h2 className="text-slate-900 text-xl font-semibold dark:text-white mx-4">{props.item?.name}</h2>
        {props.item?.imageUrl && <img src={props.item?.imageUrl} alt="" className="w-14 h-14 rounded-full mr-4"></img>}
      </div>
    </div>
  );
};

export default CollectionHeader;
