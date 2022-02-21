import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import UserPage from "./components/UserPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>sahdsjodl</h1>
        <UserPage />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
