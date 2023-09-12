class Person {
    #birthDate;
    #gender;

    constructor(name, email, birthDate, gender){
        this.name = name;
        this.email = email;
        this.#birthDate = birthDate;
        this.#gender = gender;
        this.languages = [];
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

    verifyLanguage(language){
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/g;
        return regex.test(language);
    }

    addLanguage(language){
        if(!this.verifyLanguage(language)){
            console.log(`${language} is not valid, the language name can only contain letters`);
            return false;
        }

        this.languages.push(language);
        return true;
    }
}

module.exports = { Person }