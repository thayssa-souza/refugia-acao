const { Organization } = require('../Organization');
const { Volunteer } = require('../Volunteer');
const { Person } = require('../Person');

describe('Testing Organization class', () => {
    let organization1, volunteer1, person1, service1, consoleLogSpy;

    beforeEach(() => {
        organization1 = new Organization("Stitch's Friends", 'Hygiene', '01/05/2020', 'Lilo');
        volunteer1 = new Volunteer("Lola");
        person1 = new Person('Gantu');
        service1 = 'Donation of hygiene kits';
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    describe('Testing getters and setters', () => {
        it('Should return the registered start of work date', () => {
            expect(organization1.startOfWork).toBe('01/05/2020');
        });

        it('Should update the start of work date', () => {
            organization1.startOfWork = '03/03/2020';
            expect(organization1.startOfWork).toBe('03/03/2020');
        });

        it('Should return the registered responsible', () => {
            expect(organization1.responsible).toBe('Lilo');
        });

        it('Should update the responsible', () => {
            organization1.responsible = 'Lilo & Nani';
            expect(organization1.responsible).toBe('Lilo & Nani');
        });

        it('Should return the active status', () => {
            expect(organization1.activeStatus).toBe(true);
        });

        it('Should update the active status', () => {
            organization1.activeStatus = false;
            expect(organization1.activeStatus).toBe(false);
        });
    });

    describe('Testin addService() function', () => {
        it('Should register provided service when organization is active', () => {
            let testMethod = organization1.addService(service1);
            expect(testMethod).toBe(true);
            expect(organization1.servicesProvided.length).toBe(1);
        });

        it('should not register provided service when organization is not active', () => {
            organization1.activeStatus = false;
            let testMethod = organization1.addService(service1);

            expect(testMethod).toBe(false);
            expect(console.log).toHaveBeenCalledWith("The Stitch's Friends is not active anymore");
            expect(organization1.servicesProvided.length).toBe(0);
        });
    });

    describe('Testing verifyVolunteer() function', () => {
        it('Should return true if a volunteer is an instance of Volunteer', () => {
            expect(organization1.verifyVolunteer(volunteer1)).toBe(true);
        });

        it('Should return false if a volunteer is not an instance of Volunteer', () => {
            expect(organization1.verifyVolunteer(person1)).toBe(false);
        });
    });

    describe('Testing addVolunteer() function', () => {
        it('Should add a volunteer to the organization', () => {
            expect(organization1.addVolunteer(volunteer1)).toBe(true);
            expect(organization1.volunteers).toContain(volunteer1);
        });
        
        it('Should not add a non-volunteer to the organization', () => {
            expect(organization1.addVolunteer(person1)).toBe(false);
            expect(organization1.volunteers).not.toContain(person1);
        });
    });
})