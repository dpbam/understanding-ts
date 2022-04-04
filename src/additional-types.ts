let userInput: unknown; // unknown means we don't know yet what type the user will input, a little better than 'any'
let userName: string;

userInput = 5;
userInput = 'Max'

if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}; // this breaks the script and the function NEVER returns a value, so it's the type 'never'
}

generateError('An error occured!', 500)

