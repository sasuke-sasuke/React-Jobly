import { useReducer } from "react";

function toggler(currentValue, newValue) {
    return typeof newValue === "boolean"? newValue :!currentValue;
}

export default function useToggle(initialState=false) {
    return useReducer(toggler, initialState);
}