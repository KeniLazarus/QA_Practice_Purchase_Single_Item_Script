import dotenv from 'dotenv';  
dotenv.config()

console.log(process.env.PASSWORD);

export var userCredentials = {
    username: 'standard_user',
    password: process.env.PASSWORD
}

export var requestedInformation = {
    name: process.env.NAME,
    surname: process.env.SURNAME,
    zipcode: process.env.ZIPCODE
}