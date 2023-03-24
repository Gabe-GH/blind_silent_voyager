import { Student } from "./student";

// Student Model Tests

describe('Student model', () => {

    let jack:Student = new Student('Jack', 'jack@email.com', 'PassWord_123');
    
    describe('constructor', () => {
        it('should create a new student object', () => {
            expect(jack).toBeInstanceOf(Student)
        })
    })

    describe('getters', () => {
        it('should have a name property of Jack', () => {
            expect(jack.name).toBe('Jack');
        })

        it('should have an email property of `jack@email.com`', () => {
            expect(jack.email).toBe('jack@email.com');
        })

        it('should have a password property of `PassWord_123`', () => {
            expect(jack.password).toBe('PassWord_123');
        })

        it('should have an empty list of fav profs', () => {
            expect(jack.favProfs).toEqual(expect.arrayContaining([]));
        })
    })

    describe('setters', () => {
        it('should update student name', () => {
            jack.name = 'Jack Daniels';
            expect(jack.name).not.toBe('Jack');
            expect(jack.name).toBe('Jack Daniels');
        })

        it('should update student email', () => {
            jack.email = 'jack.daniels@email.com';
            expect(jack.email).not.toBe('jack@email.com');
            expect(jack.email).toBe('jack.daniels@email.com');
        })

        it('should update student password', () => {
            jack.password = 'newPassword_22';
            expect(jack.password).not.toBe('PassWord_123');
            expect(jack.password).toBe('newPassword_22');
        })
    })

    describe('methods', () => {
        it('should add a professor to favorite professors', () => {
            expect(jack.favProfs).toEqual(expect.arrayContaining([]));
            
            jack.addProf('Kustov');

            expect(jack.favProfs).toEqual(expect.arrayContaining(['Kustov']));
        })
    })
})