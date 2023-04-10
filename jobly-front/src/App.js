
import { BrowserRouter } from "react-router-dom";
import TokenProvider from "./context/TokenProvider";
import UserProvider from "./context/UserProvider";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    
    
      <BrowserRouter>
        <TokenProvider>
          <UserProvider>
            <NavBar/>
            <AppRoutes />
          </UserProvider>
        </TokenProvider>
      </BrowserRouter>
  );
}

export default App;
