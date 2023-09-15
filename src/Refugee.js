const { Person } = require('./Person');

class Refugee extends Person {
    static refugees = [];

    constructor(name, email, birthDate, gender, countryOrigin) {
        super(name, email, birthDate, gender);
        this.countryOrigin = countryOrigin;
        this.serviceHistory = [];
        Refugee.refugees.push({
            name: this.name,
            countryOrigin: this.countryOrigin
        });
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