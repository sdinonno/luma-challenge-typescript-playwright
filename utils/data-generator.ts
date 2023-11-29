import * as faker from 'faker';

export class DataGeneratorClass {

    constructor(){}

    generateName(): string {
        return faker.name.firstName();
    }

    generateLastName(): string {
        return faker.name.lastName();
    }

    generateEmail(): string {
        return faker.internet.email();
    }

    generatePassword(): string {
        return faker.internet.password();
    }
}

export default DataGeneratorClass;