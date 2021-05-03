const faker = require('faker/locale/es');

module.exports = class Enterprise {
    
    constructor(){
      this.rut = faker.datatype.uuid();
      this.firstName = faker.name.findName();
      this.speakto = faker.name.lastName();
      this.street = faker.address.streetName();
      this.city = faker.address.city();
      this.state = faker.address.state();
      this.postalcode = faker.address.zipCode();
      this.country = faker.address.country();
    }
  }


