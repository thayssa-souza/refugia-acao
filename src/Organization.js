const { Volunteer } = require('./Volunteer');

class Organization {
    #startOfWork;
    #responsible;
    #activeStatus;

    constructor(name, typeService, startOfWork, responsible) {
        this.name = name;
        this.typeService = typeService;
        this.#startOfWork = startOfWork;
        this.#responsible = responsible;
        this.#activeStatus = true;
        this.servicesProvided = [];
        this.volunteers = [];
    }

    get startOfWork(){
        return this.#startOfWork;
    }

    set startOfWork(newDate){
        this.#startOfWork = newDate;
    }

    get responsible(){
        return this.#responsible;
    }

    set responsible(newReponsible){
        this.#responsible = newReponsible;
    }

    get activeStatus(){
        return this.#activeStatus;
    }

    set activeStatus(newStatus){
        this.#activeStatus = newStatus;
    }

    addService(service) {
        if(!this.#activeStatus){
            console.log(`The ${this.name} is not active anymore`);
            return false;
        }

        this.servicesProvided.push(service);
        return true;
    }

    verifyVolunteer(volunteer){
        return volunteer instanceof Volunteer;
    }

    addVolunteer(volunteer) {
        if(!this.verifyVolunteer(volunteer)){
            console.log(`${volunteer.name} is not a ${this.name}'s volunteer`);
            return false;
        }

        this.volunteers.push(volunteer);
        return true;
    }
}

module.exports = { Organization }