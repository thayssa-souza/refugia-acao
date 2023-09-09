class Person {
    #birthDate;
    #gender;

    constructor(name, email, birthDate, gender){
        this.name = name;
        this.email = email;
        this.#birthDate = birthDate;
        this.#gender = gender;
    }

    get birthDate(){
        return this.#birthDate;
    }

    set birthDate(newBirthDate){
        this.#birthDate = newBirthDate;
    }

    get gender(){
        return this.#gender;
    }

    set gender(updGender){
        this.#gender = updGender;
    }
}

module.exports = { Person }