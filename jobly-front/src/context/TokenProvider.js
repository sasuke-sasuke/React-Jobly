import useLocalStorage from '../hooks/useLocalStorage';
import {TokenContext} from './TokenContext';

export default function TokenProvider({ children }) {
    const [token, setToken, removeToken] = useLocalStorage('token');

    return (
        <TokenContext.Provider value={{ token, setToken, removeToken }}>
            {children}
        </TokenContext.Provider>
    );
}

