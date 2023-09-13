const { Volunteer } = require('../Volunteer');

describe('Testing Volunteer class', () => {
    let volunteer1;

    beforeEach(() => {
        volunteer1 = new Volunteer('Lola', 'lola@gmail.com', '03/04/1999', 'Genderfluid');
        volunteer1.addArea('Translator PT-Arabic');
    });

    describe('Testing addArea() function', () => {
        it('Should return the newly registered area', () => {
            expect(volunteer1.areaVolunteer).toContain('Translator PT-Arabic');
        });
    });

    describe('Testing removeArea() function', () => {
        it('Should return true if the area was deleted', () => {
            let testMethod = volunteer1.removeArea('Translator PT-Arabic');
            expect(testMethod).toBe(true);
            expect(volunteer1.areaVolunteer).not.toContain('Translator PT-Arabic');
        });
    });
})