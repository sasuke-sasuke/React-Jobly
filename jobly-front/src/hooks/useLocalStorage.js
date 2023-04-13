import {useState} from 'react';

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item? JSON.parse(item) : initialValue;
        } catch (err) {
            console.log(err)
            return initialValue;
        }
    })

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (err) {
            console.log(err)
        }
    }

    const remove = () => {
        try {
          setStoredValue(undefined);
          if (typeof window !== 'undefined') {
            window.localStorage.removeItem(key);
          }
        } catch (err) {
          console.log(err);
        }
      };

    return [storedValue, setValue, remove];
}
    