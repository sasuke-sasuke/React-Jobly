import { useState } from "react";
import { SearchContext } from "./SearchContext";

export default function SearchProvider({children}) {
    const [filteredSearch, setFilteredSearch] = useState("");
    const [searchParams, setSearchParams] = useState("");

    return (
        <SearchContext.Provider value={{filteredSearch, setFilteredSearch, searchParams, setSearchParams}}>
            {children}
        </SearchContext.Provider>
    )
}