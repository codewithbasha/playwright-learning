import {faker} from '@faker-js/faker'

export const CreateUser = {
    name: faker.person.fullName(),
    email: faker.internet.email({firstName: 'Sunil'}),
    password : faker.internet.password(),
    firstName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    zipcode : faker.location.zipCode()
}

// console.log(user)