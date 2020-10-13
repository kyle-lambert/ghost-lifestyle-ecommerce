import React from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React.useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue 
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [storedValue, key])

  return [storedValue, setStoredValue];
}

export default useLocalStorage;