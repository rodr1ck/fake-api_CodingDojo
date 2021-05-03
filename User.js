const faker = require('faker/locale/es');

module.exports = class User {
    constructor(){
        this.rut = faker.datatype.uuid();
        this.firstName = faker.name.findName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
      }
  }