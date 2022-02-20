/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import * as React from 'react';
import { AssetModel, CollectionModel } from '../models/collection-models';

interface ICollectionTileProps {
  collection: CollectionModel;
  assets: AssetModel[];
}

const CollectionTile: React.FunctionComponent<ICollectionTileProps> = ({ collection, assets }) => {
  const [visibleAssetIndex, setVisibleAssetIndex] = React.useState(-1);

  React.useEffect(() => {
    const assignRandomIndex = () => {
      if (!assets) {
        return;
      }
      setVisibleAssetIndex(Math.floor(Math.random() * assets.length));

      setTimeout(assignRandomIndex, 5000);
    };

    assignRandomIndex();
  }, [assets]);

  return (
    <>
      <Link href={`/collection/${encodeURIComponent(collection.slug)}`} passHref>
        <div className="flex flex-col justify-between bg-slate-100 dark:bg-slate-800 w-60 shadow-lg rounded m-4 transform transition duration-500 hover:scale-110">
          {/* <div className="py-2 px-4 text-center tracking-wide grid grid-cols-3 gap-6">
          <div className="flex tools text-slate-900 dark:text-white text-sm font-semibold">
            <p className="flex justify-center items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="12px"
                width="12px"
                xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0z"></path>
                </g>
              </svg>
            </p>
            <p className="animate-pulse px-2">{assets?.length}</p>
          </div>
          <div className="flex followers text-slate-900 dark:text-white text-sm font-semibold">
            <p className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </p>
            <p className="animate-pulse px-2">7542</p>
          </div>
          <div className="flex following text-slate-900 dark:text-white text-sm font-semibold">
            <p className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </p>
            <p className="animate-pulse px-2">295</p>
          </div>
        </div> */}
          <div className="group relative flex justify-center min-h-[2rem]">
            {assets?.length > 0 && visibleAssetIndex > -1 ? (
              <img alt="" className="block w-full rounded" src={assets[visibleAssetIndex]?.imagePreviewUrl} />
            ) : collection.bannerImageUrl ? (
              <img alt="" className="block w-full rounded" src={collection.bannerImageUrl} />
            ) : (
              <img alt="" className="block h-full rounded" src={collection.imageUrl} />
            )}
            <div
              className="absolute rounded bg-gradient-to-t from-slate-800/50 w-full h-full top-0 flex group-hover:opacity-100 duration-700 transition justify-between
          items-end">
              {/* <div className="group-hover:scale-110 text-white outline-none  transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16">
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div> */}

              {/* <div className="group-hover:scale-110 text-white outline-none  transition">
              <span>Ξ {collection.stats.floorPrice}</span>
            </div> */}
              {collection.imageUrl && (
                <img src={collection.imageUrl} alt="" className="w-14 h-14 rounded-full mr-4"></img>
              )}
              {assets?.length && (
                <div className="flex tools text-white text-sm font-semibold">
                  <p className="flex justify-center items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="12px"
                      width="12px"
                      xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0z"></path>
                      </g>
                    </svg>
                  </p>
                  <p className="animate-pulse px-2 text-lg">{assets?.length}</p>
                </div>
              )}

              {/* <div className="group-hover:scale-110 text-white outline-none  transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div> */}
            </div>
          </div>
          <div className="p-2">
            <h3 className="py-1 text-base justify-center">{collection.name}</h3>
            {+collection.stats.floorPrice > 0 && <p className="text-gray-400 text-sm">{collection.stats.floorPrice}</p>}
            {assets == null && <p className="text-gray-400 text-sm animate-pulse">Loading assets...</p>}
          </div>
        </div>
      </Link>
    </>
  );
};

export default CollectionTile;
