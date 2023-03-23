import passwordValidator from 'password-validator';
import validator from 'validator';

// password validation
const schema:passwordValidator = new passwordValidator();

// pw schema rules
schema
.is().min(6)
.has().uppercase()
.has().lowercase()
.has().digits(1)
.has().not().spaces()

function validatePassword(pw: string){
    if(!schema.validate(pw))
        throw new Error('not a valid password');

    else return true;
}

// email validation
function validateEmail(email: string){
    email = email.trim();

    let ops: boolean = false;

    if(!validator.isEmail(email)) throw new Error('not a valid email address');
    
    return validator.normalizeEmail(
        email, 
        {
            gmail_lowercase: true,
            outlookdotcom_lowercase: true,
            yahoo_lowercase: true,
            icloud_lowercase: true
        }
    )
}

export {validatePassword, validateEmail};