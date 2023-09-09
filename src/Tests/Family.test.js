const { Refugee } = require('../Refugee');
const { Family } = require('../Family');
const { Volunteer } = require('../Volunteer');

describe('Testing Family class', () => {
    let refugee1, refugee2, familyDoo, volunteer1;

    beforeEach(() => {
        refugee1 = new Refugee('Daphne', 'daphne@gmail.com', '02-13-1996', 'Female', 'Syria');
        refugee2 = new Refugee('Velma', 'velma@gmail.com', '10-08-1996', 'Female', 'Ukraine');
        familyDoo = new Family('Doo', 'Avenue 12th');
        volunteer1 = new Volunteer('Lola');
    });

    describe('Testing addFamilyMember() function', () => {
        it('Should add a family member correctly', () => {
            expect(familyDoo.addFamilyMember(refugee1)).toBe(true);
            expect(familyDoo.members).toContain(refugee1);
        });
    
        it('Should not add the same family member twice', () => {
            familyDoo.addFamilyMember(refugee1);
            expect(familyDoo.addFamilyMember(refugee1)).toBe(false);
        });
    
        it('Should not add a non-refugee as a family member', () => {
            expect(familyDoo.addFamilyMember(volunteer1)).toBe(false);
        });
    });

    describe('Testing removeFamilyMember() function', () => {
        it('should remove a family member correctly', () => {
            familyDoo.addFamilyMember(refugee1);
            familyDoo.addFamilyMember(refugee2);
    
            familyDoo.removeFamilyMember(refugee1);
            expect(familyDoo.members).not.toContain(refugee1);
            expect(familyDoo.members).toContain(refugee2);
        });
    });

    describe('Testing the removeFamilyMember() function', () => {
        it('should add contact info correctly', () => {
            familyDoo.addContactInfo('phone', '5555-5555');
            expect(familyDoo.contact).toEqual([{ phone: '5555-5555' }]);
        });
    
        it('should not add contact info with an invalid type', () => {
            expect(familyDoo.addContactInfo('fax', '123')).toBe(false);
        });
    });

    describe('Testing removeContactInfo() function', () => {
        it('should remove contact info correctly', () => {
            familyDoo.addContactInfo('phone', '333-3333');
            familyDoo.addContactInfo('email', 'doofamily@gmail.com');
    
            familyDoo.removeContactInfo('phone');
            expect(familyDoo.contact).toEqual([{ email: 'doofamily@gmail.com' }]);
        });
    });
});
