import {useState, useEffect} from 'react';

export default function useLocalStorage(key) {
    const [value, setValue] = useState(() => {
      const storedValue = window.localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : null;
    });
  
    useEffect(() => {
      if (value === null) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    }, [key, value]);
  
    return [value, setValue];
  }