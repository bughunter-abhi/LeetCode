/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let Length = s.length;
    let halfLength = Math.floor(Length / 2);
    for(let i = 0; i < halfLength; i++){
        let temp = s[i];
        s[i] = s[Length - i - 1];
        s[Length - i - 1] = temp;
    }
};