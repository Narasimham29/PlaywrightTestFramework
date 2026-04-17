import { faker } from "@faker-js/faker";


export class RandomDataGenerator {

    static getFirstName() {
        return faker.person.firstName()
    }

    static getLastName() {
        return faker.person.lastName()
    }

    static getemail() {
        return faker.internet.email()
    }
    static getPhoneNUmber() {
        return faker.phone.number()
    }
    static getPassword(length :number = 10) {
        return faker.internet.password()
    }
}