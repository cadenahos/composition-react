import react from 'react';
import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const[ synchronizeItem, setSynchronizeItem ] = react.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSynchronizeItem(true);
      } catch(error) {
        setError(error);
      }
  }, [synchronizeItem]);
  const synchronized = ()=>{
    setLoading(true);
    setSynchronizeItem(false);
  }
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
    synchronized,
  };
}

export { useLocalStorage };
