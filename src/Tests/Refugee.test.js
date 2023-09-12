const { Refugee } = require('../Refugee');

describe('Testing Refugee class', () => {
    let refugee1, consoleLogSpy;

    beforeEach(() => {
        refugee1 = new Refugee('Daphne');
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    describe('Testing isEmptyService() function', () => {
        it('Should return true if service value is empty or null', () => {
            expect(refugee1.isEmptyService(' ')).toBe(true);
            expect(refugee1.isEmptyService(null)).toBe(true);
        })

        it('Should return false if service values is not empty or null', () => {
            expect(refugee1.isEmptyService('Physiotherapist')).toBe(false);
            expect(refugee1.isEmptyService('Ballet master')).toBe(false);
        })
    });

    describe('Testing addService() function', () => {
        it('Should add service if service is not empty or null', () => {
            let service = 'Aerospace engineer';
            expect(refugee1.addService(service)).toBe(true);
            expect(refugee1.serviceHistory).toContain(service);
        });

        it('Should print a error mensage and return false if service is empty or null', () => {
            let service = '';
    
            expect(refugee1.addService(service)).toBe(false);
            expect(refugee1.serviceHistory).not.toContain(service);
            expect(console.log).toHaveBeenCalledWith("Service cannot be empty or null");
        });
    });
});