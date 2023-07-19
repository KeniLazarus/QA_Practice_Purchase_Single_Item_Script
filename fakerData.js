import { faker } from 'faker-js/faker'

const randomFirstName = faker.person.Name();
const randomLastName = faker.person.LastName();
const randomEmail = faker.internet.email();
const randomZipCode = faker.internet.ZipCode();

const user = createRandomUser();