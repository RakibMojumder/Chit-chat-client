
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import router from './Routes/Routes';

const queryClient = new QueryClient()

function App() {
  return (
    <div className='w-[90%] mx-auto font-konit'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider><RouterProvider router={router} /></AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
