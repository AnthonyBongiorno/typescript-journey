/*Write a function findLongestString(strings: string[]): string that takes an array of strings and returns the longest one. 
If multiple strings have the same longest length, return the first one that appears.*/

function findLongestString(strings : string[]): string {
    // set longest string by default
    let longestString = strings[0]

    //loop through all the elements of the string array
    for (let i = 0; i < strings.length; i++) {
        //
        if(strings[i].length > longestString.length){
            longestString = strings[i];
        }
    }
    return longestString;
}

export { findLongestString };