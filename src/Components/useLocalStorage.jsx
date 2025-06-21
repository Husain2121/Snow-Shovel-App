import React, { useState, useEffect } from 'react';


function getSavedValue(key, initialValue) {
    // The getItem() method of the Storage interface, 
    // when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.
    const savedValue = JSON.parse(localStorage.getItem(key))
    // CHECK to see if the saved value has been initialzed to initial value. if it has, that means it is not the first time 
    // that were saving data into local storage. value needs to be retrived and displayed in the input element b/c there is a value 
    // that has been saved

    if (savedValue) {
        return savedValue
    }
    else {
        return initialValue // just an empty string
    }
}


//1: get whatever has been stored out of local storage.
// how do we know which item to get, we use the 'key'
// it is a JSON, and we dont want it as a JSON. We want it as a javascript object. so we parse it.
// parsing allows for the language to interpert the data in a way it understands(object or array).
// allowing you to access individual data elements easily. 
// For example, if you have JSON data representing a list of products, 
// parsing would allow you to access the name, price, or description of each product within your code.

export default function useLocalStorage(key, initialValue) {

    let [value, setValue] = useState(() => {
        return getSaveValue(key, initialValue) // every time we refresh the page, this function gets activated(called once)
        // either returns an empty string or whatever we saved previously. value either gets assigned savedValue or initialValue.
        //then this gets assigned to the input which is how the state is retained on page refresh
    });

    // to save the data into local storage everytime we change the value, we use the useEffect hook
    // the useEffect gets triggered at the end of every render cycle. allows to call side effects like 
    // saving data to local storage

    useStorage(() => {
        // The setItem() method of the Storage interface, when passed a key name and value, 
        // will add that key to the given Storage object, or update that key's value if it already exists.

        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])
    return [value, setValue];
}


//replicating the function of the useState

// to save data into local storage, there is 2 requirements:
// 1: it needs to be JSON
// 2; it needs to be key value pair

// we need to return a function in the useState as the values from the function as the state. 