import Resume from './pages/Resume';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a react query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Resume />
    </QueryClientProvider>
  );
}

export default App;
