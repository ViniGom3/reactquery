import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./data"
import Home from "./pages/Home"

function App() { 
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">        
        <Home />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
