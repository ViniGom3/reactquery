import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import UserPage from "./components/UserPage";
import { queryClient } from "./data"

function App() { 
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">        
        <UserPage />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
