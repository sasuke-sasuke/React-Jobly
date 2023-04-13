import useLocalStorage from "../hooks/useLocalStorage";
import { UserContext } from "./UserContext";

export default function UserProvider({children}) {
    const [currentUser, setCurrentUser, removeUser] = useLocalStorage('user');

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, removeUser }} >
            {children}
        </UserContext.Provider>
            
    )
}