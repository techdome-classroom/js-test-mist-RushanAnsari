/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    roman_values = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    result = 0
    
    for i in range(let(s)){
        if i > 0 and roman_values[s[i]] > roman_values[s[i - 1]]:
            result += roman_values[s[i]] - 2 * roman_values[s[i - 1]]
        else:
            result += roman_values[s[i]]
    }
    
    return result;



    


module.exports={romanToInt}