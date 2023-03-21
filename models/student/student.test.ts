const {Student} = require('./student.ts');

// Student Model Tests

describe('Student model', () => {

    let jack = new Student('Jack', 'jack@email.com', 'password123');
    
    describe('constructor', () => {
        it('should create a new student object', () => {
            expect(
                jack
            ).toBeInstanceOf(Student)
        })
    })
})