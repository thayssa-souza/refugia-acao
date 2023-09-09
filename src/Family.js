const { Refugee } = require('./Refugee');

class Family {
    #address;

    constructor(lastName, address) {
        this.lastName = lastName;
        this.#address = address;
        this.members = [];
        this.contact = [];
    }

    get address(){
        return this.#address;
    }

    set address(newAdress){
        this.#address = newAdress;
    }

    isRefugee(refugee){
        return refugee instanceof Refugee;
    }

    isRefugeeAlreadyAdded(refugee) {
        return this.members.includes(refugee);
    }

    addFamilyMember(refugee) {
        if(!this.isRefugee(refugee)){
            console.log(`${refugee.name} needs to be registered before add`);
            return false;
        }

        if (this.isRefugeeAlreadyAdded(refugee)) {
            console.log(`${refugee.name} is already registered as member of the family ${this.lastName}.`);
            return false;
        }

        this.members.push(refugee);
        return true;
    }

    removeFamilyMember(refugee) {
        const index = this.members.indexOf(refugee);
        if (index !== -1) {
            this.members.splice(index, 1);
        }
    }
    
    isValidContact(type) {
        return type.toLowerCase() === 'phone' || type.toLowerCase() === 'email';
    }

    addContactInfo(type, value) {
        if(!this.isValidContact(type)){
            console.log("It's only possible to add email and phone");
            return false;
        }

        let existingContact = this.contact.find(info => Object.keys(info)[0] === type);
        if (existingContact) {
            existingContact[type] = value;
        } else {
            this.contact.push({ [type]: value });
        }
    }

    removeContactInfo(type) {
        const index = this.contact.findIndex(info => info[type]);
        if (index !== -1) {
            this.contact.splice(index, 1);
        }
    }
}

module.exports = { Family }
