import React, { useState } from 'react';


export default function useLocalStorage(val) {

    let [value, setValue] = useState(val);
    return [value, setValue];

}


//replicating the function of the useState

// to save data into local storage, there is 2 requirements:
// 1: it needs to be JSON
// 2; it needs to be key value pair