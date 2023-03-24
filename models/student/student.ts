import { validatePassword, validateEmail } from "../../util/validator/validator";

// interface Student {
//     name: string;
//     email: string;
//     password: string;
//     favProfs: Array<string>;
// }

class Student {
    private _name: string;
    private _email: string;
    private _password: string;
    private _favProfs: Array<string>;

    constructor(name: string, email: string, password: string) {
        try {
            this._name = name;
            this._favProfs = [];
            this._email = validateEmail(email) as string;

            if (validatePassword(password))
                this._password = password;
        }

        catch(e){
            throw e
        }
    }

    // getters
    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get favProfs() {
        return this._favProfs;
    }

    // setters
    set name(name: string) {
        this._name = name;
    }

    set email(email: string) {
        try{
            
            this._email = validateEmail(email) as string;
        }
        catch(e){
            throw e
        }
    }

    set password(password: string) {
        try{
            if(validatePassword(password)){
                console.log(`i'm here`)
                this._password = password
            }
        }
        catch(e){
            throw e
        }
    }

    // methods
    addProf(prof: string): void {
        this.favProfs.push(prof);
    }
}

export { Student };

