import React, { useState } from 'react';


function getSavedValue(key, initialValue) {
    localStorage.getItem(key)
}

//1: get whatever has been stored out of local storage.
// how do we know which item to get, we use the 'key'

export default function useLocalStorage(key, initialValue) {

    let [value, setValue] = useState(() => {
        return getSaveValue(key, initialValue)
    });
    return [value, setValue];
}


//replicating the function of the useState

// to save data into local storage, there is 2 requirements:
// 1: it needs to be JSON
// 2; it needs to be key value pair

// we need to return a function in the useState as the values from the function as the state. 