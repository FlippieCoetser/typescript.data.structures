/**
 * TODO: Write Tests for all the levels 
 *  => Once tests pass, begin refactoring, until I get a rec function that can handle filter any nested tuple using a key-value pair
 */




// no nesting

let oneMeta = ['id', 'name', 'age'];
let one = [1, 'John', 25];

// one level of nesting

let twoMeta = ['id', 'name', 'age', ['address', 'city', 'zip']];
let two = [1, 'John', 25, ['123 Main St', 'Springfield', 62704]];

let threeMeta = ['id', 'name', 'age', ['address', 'city', 'zip', ['lat', 'lon']]];
let three = [1, 'John', 25, ['123 Main St', 'Springfield', 62704, [39.78373, -100.445882]]];

// two levels of nesting
const isArray = (data) => Array.isArray(data) 

// Find the indexes where the element at level zero is an array
const findIndexesOfArraysInArray = (keys) => !isArray(keys) ? -1 : keys.map((k, i) => {
    if (isArray(k)) {
        return i;
    }
}).filter(i => i !== undefined); // Returns an array 

// find the Index
// use the Index
let getValueByIndex = (data, index) => data[index];

// no nesting
let findOneIndex = (keys, key) => keys.indexOf(key);
let useOneIndex = (data, index) => getValueByIndex(data, index);

// Recurse until key is found; if no key is found anywhere -1

// 1 level nesting
let findTwoIndex = (keys, key) => {
    let index = keys.indexOf(key); // key='city'

    // Repeat code
    let key_found_level_zero = index !== -1;
    if (key_found_level_zero){
        return index;
    }
    else {
        // Find the indexes where the element at level zero is an array
        let indexesOfArrays = findIndexesOfArraysInArray(keys); // [3]

        // Get the index of the first array found in level 0 keys 
        let indexOfFirstArray = indexesOfArrays[0] // 3
        let first_array = keys[indexOfFirstArray] // ['address', 'city', 'zip']
        
        let index_1 = first_array.indexOf(key); // 1
        
        // Repeated code
        let key_found_level_one = index_1 !== -1;
        if (key_found_level_one){
            return [indexOfFirstArray, index_1];
        }
        else {
            return -1;
        }
    }
};

// Recurse when index is array; if not, return value using index
let useTwoIndex = (data, index) => { 
    let zero = index
    if (typeof index === 'number') { 
        return getValueByIndex(data, zero);
    }
    else {
        let zero = index[0]; 
        let level_zero = getValueByIndex(data, zero); // ['123 Main St', 'Springfield', 62704]
        
        let one = index[1]
        let value = getValueByIndex(level_zero, one); // 'Springfield'
        
        return value;
    }
};
// Searching for key `lat` and the result should be an array, and the array [3, 3, 0]
// 


let findThreeIndex = (keys, key) => {

    // Base Case: We are on the 0th level of the array. More awaits when descending. 
    let flat_0_index = keys.indexOf(key)

    let key_found_flat_0_index = flat_0_index !== -1;
    if (key_found_flat_0_index){
        return flat_0_index
    }
    else {

        // Get the index of the first array found (NB: Gotta check the nested struct again)
        let flat_1_first_arrays_indexes = findIndexesOfArraysInArray(keys);

        let flat_1_first_array_index = flat_1_first_arrays_indexes[0]
        let flat_1_first_array = keys[flat_1_first_array_index];

        // Check to see if the key was found in the 1st-level of depth array
        let flat_1_first_array_key_index = flat_1_first_array.indexOf(key)
        let key_found_flat_1 = flat_1_first_array_key_index !== -1;

        if (key_found_flat_1) {
            return [flat_1_first_array_index, flat_1_first_array_key_index]
        }
        else {
            let flat_2_first_arrays_indexes = findIndexesOfArraysInArray(keys[flat_1_first_array_index])

            let flat_2_first_array_index = flat_2_first_arrays_indexes[0]
            let flat_2_first_array = keys[flat_1_first_array_index][flat_2_first_array_index]

            let flat_2_first_array_key_index = flat_2_first_array.indexOf(key)

            let key_found_flat_2 = flat_2_first_array_key_index !== -1

            if (key_found_flat_2) {
                return [flat_1_first_array_index, flat_2_first_array_index, flat_2_first_array_key_index] // [<indexes of nested arrays>, key index for final array]
            }
        }

    }

}; 
// [3, 3, 0] 

// index can be a single number or a 1-D array of indexes 

let useThreeIndex = (data, index) => {

    let zero = index
    if (typeof zero === "number") {
        return getValueByIndex(data, zero)
    }
    else {
        zero = index[0]
        let level_zero = getValueByIndex(data, zero);

        let one = index[1]
        let level_one = getValueByIndex(level_zero, one);

        let two = index[2]
        let level_two = getValueByIndex(level_one, two);

        return level_two;

        
        // let curr_index_level = index[0];
        // let curr_level = getValueByIndex(data, curr_index_level);

        // for (let i = 1; i < index.length; i++){
        //     curr_index_level = index[i];
        //     curr_level = getValueByIndex(curr_level, curr_index_level)
        // }

    }

}; 
// 39.78373



let findNthLevelIndex_original = (keys, key) => {
    // Check if the key was found in the zero-th level
    let flat_0_index = keys.indexOf(key)
    let key_found_flat_0_index = flat_0_index !== -1;
    if (key_found_flat_0_index){
        return flat_0_index
    }

    // Recursive case: The key could in any of the nested arrays. Check every array found in the keys array and the subsequently further nested arrays 

    // If an array is found in the keys
    else {  

        let flat_n_arrays_indexes = findIndexesOfArraysInArray(keys) // In the rec case, pass a subset of the keys --> findNthLevelIndex( keys[index_of_array_in_array], key)

        // Check the indexes found and compare with the key

        for (let i = 0; i < flat_n_arrays_indexes.length; i++) {
            let flat_n_current_array_index = flat_n_arrays_indexes[i]; // Get the n-th nested array index
            let flat_n_current_array = keys[flat_n_current_array_index]; // Nested subset of keys

            let flat_n_current_array_key_index = flat_n_current_array.indexOf(key)
            let flat_n_current_array_key_found = flat_n_current_array_key_index !== -1;

            if (flat_n_current_array_key_found) {
                return [flat_n_current_array_index, flat_n_current_array_key_index]
            }
            else {
                return [flat_n_current_array_index, ...findNthLevelIndex_original(flat_n_current_array, key)]
            }
            
        }
        return -1;
    }
}


let load_index_path = (result, indexes) => {
    if (result !== -1) {
        return [indexes, ...(isArray(result) ? result : [result])];
    }
} 

let check_nested_array_indexes = (nested_arrays_indexes, keys, key) => {
    for (let i = 0; i < nested_arrays_indexes.length; i++) {
        const current_array_index = nested_arrays_indexes[i];
        const current_array = keys[current_array_index];

        // Recursively check the nested array
        const result = findNthLeveLIndex(current_array, key);
        //load_index_path(result, current_array_index);

        let key_found = result !== -1;
        if (key_found) {
            return [current_array_index, ...(isArray(result) ? result : [result])];
        }
        
    }
    // If the key is not found at any level, return -1
    return -1;
}

let findNthLeveLIndex = (keys, key) => {
    // Base case: We are on the 0th level of the array. Check here first.
    const base_key_index = keys.indexOf(key);
    if (base_key_index !== -1) return base_key_index;

    // Recursive case: Check deeper levels.
    let nested_arrays_indexes = findIndexesOfArraysInArray(keys);

    // TODO: Refactor to use a higher order function (map or forEach)
    return check_nested_array_indexes(nested_arrays_indexes, keys, key);
};


let useNthLevelIndex = (data, index) => {
    // index is either a number or an array of numbers
    if (typeof index === "number") {
        return getValueByIndex(data, index);
    }
    let curr_value = getValueByIndex(data, index[0]);
    for (let i = 1; i < index.length; i++){
        curr_value = getValueByIndex(curr_value, index[i]);
    }
    return curr_value;
}

export {
    isArray,
    findIndexesOfArraysInArray,
    getValueByIndex,
    findNthLeveLIndex,
    useNthLevelIndex
}

