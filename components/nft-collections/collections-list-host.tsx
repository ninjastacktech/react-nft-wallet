import { Dialog, Switch, Transition } from '@headlessui/react';
import { useInjection } from 'inversify-react';
import * as React from 'react';
import { Fragment } from 'react';
import { ApiBasePath } from '../api-path/api-path-provider';
import { AuthContext } from '../wallet/components/auth/auth-context';
import CollectionsList from './collections-list';
import { CollectionModel } from './models/collection-models';

export const CollectionLayoutContext = React.createContext<{ layout: 'tilesOnly' | 'eager' }>({ layout: 'tilesOnly' });

export interface ICollectionsListHostNewProps {}

const CollectionsListHost = (props: ICollectionsListHostNewProps) => {
  const path = useInjection(ApiBasePath);
  const { authState } = React.useContext(AuthContext);
  const [checkedEagerLayout, setCheckedEagerLayout] = React.useState(false);

  const [collections, setCollections] = React.useState<CollectionModel[]>([]);
  const [isLoading, setLoading] = React.useState(false);
  const [authConnected, setAuthConnected] = React.useState(false);

  const [layout, setLayout] = React.useState<'eager' | 'tilesOnly'>('eager');
  const [layoutWarningDialogOpen, setLayoutWarningDialogOpen] = React.useState(false);

  React.useEffect(() => {
    authState.isAuthenticated ? setAuthConnected(true) : setAuthConnected(false);

    if (authState.isAuthenticated) {
      setLoading(true);
      fetch(`${path.basePath}/collections/${authState.address}`)
        .then((res) => res.json())
        .then((data) => {
          setCollections(data?.sort((a: any, b: any) => a.name.localeCompare(b.name)));
          setLoading(false);
        })
        .catch((err) => {
          console.error('collections fetch err', err);
          setLoading(false);
        });
    }
  }, [path, authState]);

  React.useEffect(() => {
    if (collections.length > 3) {
      setLayout('tilesOnly');
    } else {
      setLayout('eager');
    }
  }, [collections]);

  React.useEffect(() => {
    layout === 'eager' ? setCheckedEagerLayout(true) : setCheckedEagerLayout(false);
  }, [layout]);

  if (isLoading) return <p>Loading...</p>;
  if (!authConnected) return <p>Not connected...</p>;

  const handleConfirmDialog = (value: boolean) => {
    setLayoutWarningDialogOpen(false);
    if (value) {
      setLayout('eager');
    }
  };

  const changeDisplayToggle = (value: boolean) => {
    if (value) {
      setLayoutWarningDialogOpen(true);
    } else {
      setLayout('tilesOnly');
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between m-4">
        <h2 className="text-2xl font-semibold">Collections</h2>
        <Switch.Group>
          <div className="flex flex-row">
            <Switch.Label passive>Show all assets</Switch.Label>
            <Switch
              checked={checkedEagerLayout}
              onChange={(value) => {
                changeDisplayToggle(value);
              }}
              className={`${
                checkedEagerLayout ? 'bg-blue-600' : 'bg-gray-200 dark:bg-slate-400'
              } ml-2 relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
              <span
                className={`${
                  checkedEagerLayout ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
          </div>
        </Switch.Group>
      </div>
      <CollectionLayoutContext.Provider value={{ layout }}>
        <CollectionsList collections={collections} />
      </CollectionLayoutContext.Provider>

      <Transition appear show={layoutWarningDialogOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => handleConfirmDialog(false)}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl dark:bg-slate-800">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                  Warning
                </Dialog.Title>
                <div className="mt-2 mb-5">
                  <p className="text-sm">
                    Displaying a large number of assets may cause the page to become less responsive
                  </p>
                </div>

                <div className="flex flex-row mt-4">
                  <button
                    onClick={() => handleConfirmDialog(true)}
                    className={`bg-slate-900 hover:bg-slate-700 mr-2 text-white w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 font-medium rounded-lg text-base px-6 py-3.5`}>
                    Proceed
                  </button>

                  <button
                    onClick={() => handleConfirmDialog(false)}
                    className={`bg-slate-100 hover:bg-slate-300 ml-2 text-slate-900 w-full flex items-center justify-center dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10 dark:hover:bg-slate-700 font-medium rounded-lg text-base px-6 py-3.5`}>
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CollectionsListHost;
