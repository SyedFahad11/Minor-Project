// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { WagmiProvider, createConfig } from 'wagmi';
import { arbitrumSepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WalletStatus from './components/WalletStatus';

const config = createConfig(
  getDefaultConfig({
    walletConnectProjectId: '',
    chains: [arbitrumSepolia],
    appName: 'DrugEnsure',
  })
);

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme="minimal">
          <BrowserRouter>
            <WalletStatus />
          </BrowserRouter>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
