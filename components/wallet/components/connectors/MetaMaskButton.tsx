import React, { useEffect } from 'react';
import { getAddChainParameters } from '../../chains';
import { hooks, metaMask } from '../../connectors/metaMask';
import { AuthContext } from '../auth/auth-context';

export interface MetaMaskButtonProps {
  className?: string;
  size?: 'medium' | 'large';
}

const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

const MetaMaskButton = ({ size, className }: MetaMaskButtonProps = { size: 'medium' }) => {
  const { authState, authDispatch } = React.useContext(AuthContext);
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const connect = metaMask.activate.bind(metaMask, getAddChainParameters(1));

  useEffect(() => {
    if (accounts?.length > 0 && accounts[0]) {
      authDispatch({ type: 'connect', payload: { address: accounts[0] } });
    }

    console.log('accounts loaded', accounts);
  }, [accounts, authDispatch]);

  const buttonSizeClasses =
    size === 'large' ? 'font-medium rounded-lg text-base px-6 py-3.5' : 'font-medium rounded-lg text-sm px-5 py-2.5';

  if (error) {
    return (
      <div className={className}>
        <button
          onClick={() => connect()}
          className={`bg-slate-900 hover:bg-slate-700 text-white rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ${buttonSizeClasses}`}>
          Try Again?
        </button>
      </div>
    );
  } else if (isActive) {
    return (
      <div className={className}>
        <button
          onClick={() => metaMask.deactivate()}
          className={`
      bg-slate-100 hover:bg-slate-300 text-slate-900 rounded-lg w-full flex items-center justify-center dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10 dark:hover:bg-slate-700 ${buttonSizeClasses} 
        `}>
          Disconnect
        </button>
      </div>
    );
  } else if (isActivating) {
    return (
      <div className={className}>
        <button
          disabled
          className={`bg-slate-300 text-slate-900 rounded-lg w-full flex items-center justify-center dark:bg-slate-700 dark:text-slate-400 dark:highlight-white/10 ${buttonSizeClasses}`}>
          Connecting...
        </button>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <button
          onClick={() => connect()}
          className={`bg-slate-900 hover:bg-slate-700 text-white rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ${buttonSizeClasses}`}>
          Connect
        </button>
      </div>
    );
  }
};

export default MetaMaskButton;
