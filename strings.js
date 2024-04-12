function palindromeCheck(smallStr) {
    

    var cleanStr = smallStr.toLowerCase('inputText')

    var reversed = cleanStr.split('').reverse().join('');

    if (reversed === cleanStr) {
        document.getElementById('result').innerHTML='This is a palindrome!'
    } else {
        document.getElementById('result').innerHTML='Not a palindrome, try again.'
    }


}  

