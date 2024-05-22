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

// two levels of nesting



let isArray = (data) => Array.isArray(data) 

// Find the indexes where the element at level zero is an array
const findIndexesOfArraysInArray = (keys) => keys.map((k, i) => {
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
let threeMeta = [
    'id', 'name', 'age', //
    ['address', 'city', 'zip', ['lat', 'long']]
];
let three = [1, 'John', 25, ['123 Main St', 'Springfield', 62704, [39.78373, -89.650148]]];

const lat_raw = threeMeta[3][3][1]

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



let findNthLevelIndex = (keys, key) => {
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
                return [flat_n_current_array_index, ...findNthLevelIndex(flat_n_current_array, key)]
            }
            
        }
    }
}