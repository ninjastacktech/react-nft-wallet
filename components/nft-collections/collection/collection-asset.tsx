/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

interface ICollectionAssetProps {
  asset: any;
}

const CollectionAsset: React.FunctionComponent<ICollectionAssetProps> = (props) => {
  const name = props.asset.name ?? `#${props.asset.tokenId}`;

  return (
    <div className="w-60 h-72">
      <div>{name}</div>
      {props.asset.animationUrl && (
        <video
          className=""
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

      {!props.asset.animationUrl && props.asset.imageUrl && <img src={props.asset.imageUrl} alt=""></img>}
    </div>
  );
};

export default CollectionAsset;
