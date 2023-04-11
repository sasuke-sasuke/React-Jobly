import { useState } from "react";
import { SearchContext } from "./SearchContext";

export default function SearchProvider({children}) {
    const [filteredSearch, setFilteredSearch] = useState("");

    return (
        <SearchContext.Provider value={{filteredSearch, setFilteredSearch}}>
            {children}
        </SearchContext.Provider>
    )
}