import {Slot} from 'expo-router';

import {QueryClient, QueryClientProvider} from 'react-query';

import '../global.css';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
};

export default RootLayout;
