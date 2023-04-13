
import { BrowserRouter } from "react-router-dom";
import TokenProvider from "./context/TokenProvider";
import UserProvider from "./context/UserProvider";
import SearchProvider from "./context/SearchProvider";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


function App() {
  return (
    
      <BrowserRouter>
        <CssBaseline />
        <TokenProvider>
          <UserProvider>
            <SearchProvider>
              <NavBar/>
              <Container maxWidth='md'>
                <AppRoutes />
              </Container>
              
            </SearchProvider>
          </UserProvider>
        </TokenProvider>
      </BrowserRouter>
  );
}

export default App;
