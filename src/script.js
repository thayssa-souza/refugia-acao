const { Refugee } = require('./Refugee');
const { Family } = require('./Family');
const { Volunteer } = require('./Volunteer');

const refugee1 = new Refugee('Daphne', 'daphne@gmail.com', '02/13/1996', 'Female', 'Syria');
const refugee2 = new Refugee('Velma', 'velma@gmail.com', '10/08/1996', 'Female', 'Ukraine');
const familyDoo = new Family('Doo', 'Avenue 12th');
const volunteer1 = new Volunteer('Maya', 'maya@gmail.com', '05/05/2000', 'Female');

refugee1.addService('English teacher');
refugee1.addService('Chemical Engineer');
console.table(refugee1.serviceHistory);

refugee1.addLanguage('English');
refugee1.addLanguage('Arabic');
refugee1.addLanguage('Fr4nch'); //Fr4nch is not valid, the language name can only contain letters
console.log(refugee1.languages);

refugee2.addService('') //Service cannot be empty or null
refugee2.addService('Paleontologist')
console.table(refugee2.serviceHistory);

familyDoo.addFamilyMember(refugee1);
familyDoo.addFamilyMember(refugee2);
console.table(familyDoo.members);

familyDoo.addContactInfo('phone', '5555-5555');
familyDoo.addContactInfo('email', 'doofamily@gmail.com');
console.table(familyDoo.contact);
familyDoo.removeContactInfo('email');
familyDoo.addContactInfo('phone', '333-3333');
familyDoo.addContactInfo('tax', '1234') //It's only possible to add email and phone
familyDoo.addFamilyMember(volunteer1) //Maya needs to be registered before add
console.log(familyDoo);