const { Person } = require('./Person');

class Refugee extends Person {
    constructor(name, email, birthDate, countryOrigin, gender) {
        super(name, email, birthDate, gender);
        this.countryOrigin = countryOrigin;
        this.serviceHistory = [];
    }

    isEmptyService(service){
        return service === null || service.trim() === '';
    }

    addService(service){
        if(this.isEmptyService(service)){
            console.log("Service cannot be empty or null");
            return false;
        }

        this.serviceHistory.push(service);
        return true;
    }
}

module.exports = { Refugee }