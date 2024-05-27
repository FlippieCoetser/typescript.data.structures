
const pick_random_element_index = (data) => Math.floor(Math.random() * data.length);
const pick_random_element = (data) => data[pick_random_element_index(data)];

const isArray = (data) => Array.isArray(data);

const isObject = (data) => data && typeof data === 'object' && !Array.isArray(data);

const hasKeyValuePair = (object, targetKey, targetValue) => {
    // Check if the current object contains the key-value pair
    if (object.hasOwnProperty(targetKey) && object[targetKey] === targetValue) {
        return true;
    }

    // Recurse through all properties of the object
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key];

            // If the value is an object, recurse into it
            if (isObject(value)) {
                if (hasKeyValuePair(value, targetKey, targetValue)) {
                    return true;
                }
            }

            // If the value is an array, recurse into each item
            if (Array.isArray(value)) {
                for (const item of value) {
                    if (isObject(item) || Array.isArray(item)) {
                        if (hasKeyValuePair(item, targetKey, targetValue)) {
                            return true;
                        }
                    }
                }
            }
        }
    }

    // Return false if the key-value pair is not found
    return false;
};

const chooseRandomIconValue = () => {
    const icons = Array.from({ length: 10 }, (_, i) => `icon-${i}`);
    return icons[pick_random_element_index(icons)];
}


export {
    pick_random_element_index,
    pick_random_element,
    isArray,
    isObject,
    hasKeyValuePair,
    chooseRandomIconValue
}