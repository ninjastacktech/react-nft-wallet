/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

interface ICollectionAssetProps {
  asset: any;
}

const CollectionAsset: React.FunctionComponent<ICollectionAssetProps> = (props) => {
  const name = props.asset.name ?? `#${props.asset.tokenId}`;

  return (
    <>
      <a
        className="bg-slate-100 dark:bg-slate-800 w-60 h-80 rounded-lg shadow-lg flex flex-col mx-2 transform transition duration-500 hover:scale-110"
        href={props.asset.permalink}
        target="_blank"
        rel="noreferrer">
        {props.asset.animationUrl && (
          <video
            className="rounded-t-lg max-h-60"
            controlsList="nodownload"
            playsInline
            autoPlay
            loop
            muted
            poster={props.asset.imageUrl}
            preload="metadata">
            <source src={props.asset.animationUrl} type="video/mp4" />
          </video>
        )}
        {!props.asset.animationUrl && props.asset.imageUrl && (
          <img className="rounded-t-lg max-h-60" src={props.asset.imageUrl} alt="" />
        )}
        <div className="p-6">
          <h2 className="font-bold mb-2 text-m text-slate-900 dark:text-white">{name}</h2>
        </div>
      </a>
    </>
  );
};

export default CollectionAsset;
