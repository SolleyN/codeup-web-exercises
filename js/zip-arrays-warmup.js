
    // ================================= WARM UP

    // Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.
    
    
//     zipArrays([], []) // returns []
//     zipArrays([1], [2]) // returns [1, 2]
//     zipArrays(['a', 'b'], ['c', 'd']) // returns... ['a', 'c', 'b', 'd']
//     zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]) // returns... 
    
//     [
//       1, 
//       'bob', 
//       2, 
//       null, 
//       'a', 
//       'sally',
//       'b',
//       25
//     ]
// )

function zipArrays(first, second) {
    const output =[];
    return [];
}
for (let i =0; i < first.length; i += 1) {
    output.push(first[i]);
    output.push(second[i]);

} 
return output;