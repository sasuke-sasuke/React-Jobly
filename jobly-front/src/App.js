
import { BrowserRouter } from "react-router-dom";
import TokenProvider from "./context/TokenProvider";
import UserProvider from "./context/UserProvider";
import SearchProvider from "./context/SearchProvider";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    
    
      <BrowserRouter>
        <TokenProvider>
          <UserProvider>
            <SearchProvider>
              <NavBar/>
              <AppRoutes />
            </SearchProvider>
          </UserProvider>
        </TokenProvider>
      </BrowserRouter>
  );
}

export default App;
