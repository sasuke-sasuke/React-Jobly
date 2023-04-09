import { useState } from 'react';
import {TokenContext} from './TokenContext';

export default function TokenProvider({ children }) {
    const [token, setToken] = useState(null);

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    );
}

