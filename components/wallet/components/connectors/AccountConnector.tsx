import { Dialog, Transition } from '@headlessui/react';
import { FormEvent, Fragment, useContext, useState } from 'react';
import Web3 from 'web3';
import { AuthContext } from '../auth/auth-context';
import MetaMaskButton from './MetaMaskButton';

export interface IAccountConnectorProps {}

const AccountConnector = (props: IAccountConnectorProps) => {
  const { authState, authDispatch } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [pendingAddress, setPendingAddress] = useState('');

  const handleAddressChange = (ev: FormEvent<HTMLInputElement>) => {
    setPendingAddress(ev.currentTarget.value);
  };

  const addAddress = () => {
    const isValidAddress = Web3.utils.isAddress(pendingAddress);

    if (isValidAddress) {
      setIsOpen(false);
      authDispatch({ type: 'connect', payload: { address: pendingAddress } });
    }
  };

  if (authState.isAuthenticated) {
    return <></>;
  }

  return (
    <>
      <div className="flex justify-center gap-4 mt-8">
        <MetaMaskButton className="w-40" size="large" />

        <button
          onClick={() => setIsOpen(true)}
          className={`
      bg-slate-100 hover:bg-slate-300 text-slate-900 w-40 flex items-center justify-center dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10 dark:hover:bg-slate-700 font-medium rounded-lg text-base px-6 py-3.5 
        `}>
          Enter Address
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setIsOpen(false)}>
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
                  Enter Address
                </Dialog.Title>
                <div className="mt-2 mb-5">
                  <p className="text-sm">
                    Avoid connecting your wallet and simply paste in your address directly
                  </p>
                </div>

                <input
                  type="text"
                  id="ethAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-700 dark:focus:border-gray-700"
                  required
                  onChange={handleAddressChange}
                />

                <div className="mt-4">
                  <button
                    onClick={addAddress}
                    className={`bg-slate-900 hover:bg-slate-700 text-white w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 font-medium rounded-lg text-base px-6 py-3.5`}>
                    Add
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

export default AccountConnector;
