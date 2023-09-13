const { Person } = require('./Person');

class Volunteer extends Person {
    constructor(name, email, birthDate, gender){
        super(name, email, birthDate, gender);
        this.areaVolunteer = [];
    }

    addArea(area){
        this.areaVolunteer.push(area);
        return true;
    }

    removeArea(area) {
        this.areaVolunteer = this.areaVolunteer.filter(item => item !== area);
        return true;
    }
}

module.exports = { Volunteer }