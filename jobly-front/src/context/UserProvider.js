import { useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }} >
            {children}
        </UserContext.Provider>
            
    )
}