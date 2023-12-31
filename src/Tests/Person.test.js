const { Person } = require('../Person');

describe('Testing Person class', () => {
    let person1;
    beforeEach(() => {
        person1 = new Person('Daphne', 'daphne@gmail.com', '02/12/2001', 'Female');
    });

    describe('Testing getters and setters', () => {
        it('Should return the registred birth date', () => {
            expect(person1.birthDate).toBe('02/12/2001');
        });

        it('Should update the birth date', () => {
            person1.birthDate = '07/07/2002';
            expect(person1.birthDate).toBe('07/07/2002');
        });

        it('Should return the registred gender', () => {
            expect(person1.gender).toBe('Female');
        });

        it('Should update the birth date', () => {
            person1.gender = 'Genderfluid';
            expect(person1.gender).toBe('Genderfluid');
        });
    });

    describe('Testing verifyLanguage() function', () => {
        it('Should return true if language only contains letters', () => {
            let language = 'Français';
            person1.addLanguage(language);
            expect(person1.languages).toContain(language);
        });

        it('Should return false if language contains numbers', () => {
            let language = 'P0rtu353';
            let methodTest = person1.addLanguage(language);

            expect(methodTest).toBe(false);
            expect(person1.languages).not.toContain(language);
        });
    });

    describe('Testing addLanguage() function', () => {
        it('Should return the language that was added', () => {
            let language = 'Arabic';
            person1.addLanguage(language);
            expect(person1.languages).toContain(language);
        });

        it('Should not add the language if the name contains numbers', () => {
            let language = 'G3rm4ny';
            person1.addLanguage(language);
            expect(person1.languages).not.toContain(language);
        });
    });
})