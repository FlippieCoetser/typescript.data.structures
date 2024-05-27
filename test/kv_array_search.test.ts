import { 
    isArray,
    findIndexesOfArraysInArray,
    getValueByIndex,
    findNthLeveLIndex,
    useNthLevelIndex

} from "../src/kv_array_search.js";


/**
 * Functions:
 * 1. isArray(data) -> boolean
 * 2. findIndexesOfArraysInArray(key) --> number[]
 * 3. getValueByIndex(data, index) --> any
 * 
 * 4. findOneIndex(keys, key) --> number
 * 5. useOneIndex(data, index) --> any
 * 6. findTwoIndex(keys, key) --> number
 * 7. useTwoIndex(data, index) --> any
 * 8. findThreeIndex(keys, key) --> number
 * 9. findNLeveLIndex(keys, key) --> number
 * 10. useNLevelIndex(data, index) --> any
 * 
 * 
 * Test Suite:
 * 1. utils tests
 * 2. 1-3 tests for the non-recursive function to find and use a key-value pair in an array
 * 3. Recursive functions
 */

describe('Utility Functions', () => {
    let keys, data;

    beforeEach(() => {
        keys = ['id', 'name', 'age', ['address', 'city', 'zip', ['lat', 'lon']]];
        data = [1, 'John', 25, ['123 Main St', 'Springfield', 62704, [39.78373, -100.445882]]];
    });

    describe('isArray', () => {
        it('should return true for arrays', () => {
            expect(isArray(data)).toBe(true);
            expect(isArray([])).toBe(true);
        });

        it('should return false for non-arrays', () => {
            expect(isArray({})).toBe(false);
            expect(isArray(123)).toBe(false);
            expect(isArray('string')).toBe(false);
            expect(isArray(null)).toBe(false);
            expect(isArray(undefined)).toBe(false);
        });
    });

    describe('findIndexesOfArraysInArray', () => {
        it('should return undefined if the keys are not an array', () => {
            expect(findIndexesOfArraysInArray({}))
        });
        it('should return indexes of arrays in the input array', () => {
            expect(findIndexesOfArraysInArray(['a', [1, 2], 'b', [3, 4]])).toEqual([1, 3]);
            expect(findIndexesOfArraysInArray([1, 2, 3])).toEqual([]);
            expect(findIndexesOfArraysInArray([[1, 2], [3, 4]])).toEqual([0, 1]);
        });
    });

    describe('getValueByIndex', () => {
        it('should return the correct value by index', () => {
            expect(getValueByIndex([1, 2, 3], 0)).toBe(1);
            expect(getValueByIndex(['a', 'b', 'c'], 2)).toBe('c');
            expect(getValueByIndex([true, false, true], 1)).toBe(false);
        });
    });

    describe('findNthLeveLIndex', () => {
        it('should return correct index for key in nested structure', () => {
            expect(findNthLeveLIndex(keys, 'id')).toEqual(0);
            expect(findNthLeveLIndex(keys, 'city')).toEqual([3, 1]);
            expect(findNthLeveLIndex(keys, 'lat')).toEqual([3, 3, 0]);
            expect(findNthLeveLIndex(keys, 'nonexistent')).toEqual(-1);
        });
    });

    describe('useNthLevelIndex', () => {
        it('should return correct value using index', () => {
            expect(useNthLevelIndex(data, 0)).toBe(1);
            expect(useNthLevelIndex(data, [3, 1])).toBe('Springfield');
            expect(useNthLevelIndex(data, [3, 3, 0])).toBe(39.78373);
            expect(useNthLevelIndex(data, [3, 3, 1])).toBe(-100.445882);
        });
    });

    describe('complete functionality test', () => {
        it('should return correct value for nested keys and data', () => {
            let index_city = findNthLeveLIndex(keys, 'city');
            let value_city = useNthLevelIndex(data, index_city);
            expect(value_city).toBe('Springfield');
            
            let index_lat = findNthLeveLIndex(keys, 'lat');
            let value_lat = useNthLevelIndex(data, index_lat);
            expect(value_lat).toBe(39.78373);
            
            let index_nonexistent = findNthLeveLIndex(keys, 'nonexistent');
            expect(index_nonexistent).toEqual(-1);
        });
    });

});

