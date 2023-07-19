import { faker } from '@faker-js/faker'
import dotenv from 'dotenv'; 

dotenv.config()

console.log(process.env.PASSWORD);

export var userCredentials = {
    username: 'standard_user',
    password: process.env.PASSWORD}

export var requestedInformation = {
    name: faker.person.firstName(),
    surname: faker.person.lastName(),
    zipcode: faker.number.int({min: 10000, max: 99999}),}