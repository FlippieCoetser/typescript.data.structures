const isArray = (data) => Array.isArray(data);
const pick_random_element_index = (data) => Math.floor(Math.random() * data.length);
const pick_random_element = (data) => data[pick_random_element_index(data)];

const pick_random_key_value_object = (object) => {
    const keys = Object.keys(object);
    const _key = pick_random_element(keys);
    const _value = object[_key];
    const is_nested = _value !== null && typeof _value === 'object';
    return is_nested ? pick_random_key_value_object(_value) : [_key, _value];
}

const getKeyValuePairFromTuple = (keys, tuple) => {
    const key_index = pick_random_element_index(keys); // Get random key position
    const key = keys[key_index];
    const value = tuple[key_index];
    return [key, value];
};

const pick_random_key_value_tuple = (keys, tuple) => {
    let [key, value] = getKeyValuePairFromTuple(keys, tuple);

    while (isArray(value)) {
        const nestedKeys = key;
        const nestedValues = value;
        [key, value] = getKeyValuePairFromTuple(nestedKeys, nestedValues);
    }

    return [key, value];
};


const pick_random_key_value_tuple_small = (tuple) => {
    const keys = ["id", "name", "x", "y", "icon"];
    return pick_random_key_value_tuple(keys, tuple);
}


const pick_random_key_value_tuple_large = (tuple) => {

    // Assuming these are the keys for the large tuple
    const keys = [
        "id",
        "name",
        "incoming",
        "outgoing",
        [
            [
                [
                    [
                        "meanlog",
                        "sdlog"
                    ]
                ]
            ]
        ],
        [
            [
                "x",
                "y"
            ],
            "icon"
        ]
    ];

    return pick_random_key_value_tuple(keys, tuple);
}

function executeTestSuite(suite_function: Function, ...args: any[]) {
    const nodes_to_add = [1, 10, 100, 1000, 10000, 100000, 1000000];
    for (let size of nodes_to_add) {
        suite_function(size, ...args);
    }
}


export {
    isArray,
    pick_random_element_index,
    pick_random_element as pick_random_node,
    pick_random_key_value_object,
    pick_random_key_value_tuple_small,
    pick_random_key_value_tuple_large,
    executeTestSuite,
};