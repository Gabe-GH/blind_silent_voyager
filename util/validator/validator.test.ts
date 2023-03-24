import { validatePassword, validateEmail } from "./validator";

// password validator tests
describe('Password Validator', () => {

    it('should throw an error with a password less than 6 chars', () => {
        expect(() => {
            validatePassword('Uhoh1');
        }).toThrow('not a valid password');
    })


    it('should throw an error with a password with no uppercase chars', () => {
        expect(() => {
            validatePassword('uhoh123');
        }).toThrow('not a valid password');
    })

    it('should throw an error with a password with no lowercase chars', () => {
        expect(() => {
            validatePassword('BIGFACTS_123');
        }).toThrow('not a valid password');
    })

    it('should throw an error with a password with no numbers', () => {
        expect(() => {
            validatePassword('ThisIsMyPassword');
        }).toThrow('not a valid password');
    })

    it('should throw an error with a password with a space in it', () => {
        expect(() => {
            validatePassword('no u_123455');
        }).toThrow('not a valid password');
    })

    it(`should validate a valid password 'checkThis123' according to rules and return true`, () => {
        expect(validatePassword('checkThis123')).toEqual(true);
    })

    it(`should validate a valid password 'Based_06' according to rules and return true`, () => {
        expect(validatePassword('Based_06')).toEqual(true);
    })
})



// email validator tests
describe('Email Validator', () => {
    it('should throw an error when an invalid email is given', () => {
        expect(() => {
            validateEmail('no u_123455');
        }).toThrow('not a valid email');
    })

    it('should throw an error when an invalid email is given', () => {
        expect(() => {
            validateEmail('gmail.com@uhoh');
        }).toThrow('not a valid email');
    })

    it('should clean up a valid email of any whitespaces and return it', () => {
        expect(validateEmail('    jacksparrow@gmail.com   ')).toBe('jacksparrow@gmail.com');
    })

    it('should clean up a valid email by turning gmail domain to lowercase if capitalized', () => {
        expect(validateEmail('jacksparrow@GMAIL.COM')).toBe('jacksparrow@gmail.com');
    })

    it('should clean up a valid email by turning outlook domain to lowercase if capitalized', () => {
        expect(validateEmail('jacksparrow@outLOOK.COM')).toBe('jacksparrow@outlook.com');
    })

    it('should clean up a valid email by turning yahoo domain to lowercase if capitalized', () => {
        expect(validateEmail('jacksparrow@yahOO.COM')).toBe('jacksparrow@yahoo.com');
    })

    it('should clean up a valid email by turning icloud domain to lowercase if capitalized', () => {
        expect(validateEmail('jacksparrow@IclOuD.COM')).toBe('jacksparrow@icloud.com');
    })
})