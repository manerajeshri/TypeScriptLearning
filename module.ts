

// true if the input string is palindrome
// export so we can use it in another file==> 

export function ispalindrome(string:string): boolean {
    return string === string.split('').reverse().join('');
}