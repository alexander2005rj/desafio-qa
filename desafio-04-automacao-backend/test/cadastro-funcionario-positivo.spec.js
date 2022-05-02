const chai = require('chai')
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.use(require('chai-json-schema-ajv'));
const expect = chai.expect;

// A URL está vindo diretamente na hora da execução (package.json > scripts > test)
const request = chai.request(process.env.URL);

// Importando schemas para validação do objeto response
const schemaAllEmployees = require('../schemas/getEmployees');
const schemaEmployee = require('../schemas/getEmployee');
const schemaCreateEmployee = require('../schemas/createEmployee');
const schemaUpdateEmployee = require('../schemas/updateEmployee');
const schemaDeleteEmployee = require('../schemas/deleteEmployee');

// Geração de massa de dados para alguns testes
const faker = require('faker-br');
const { AssertionError } = require('chai');

// Criando usuário para testes
const nomeCompleto = `${faker.name.firstName()} ${faker.name.lastName()}`;
const salario = faker.random.number({ min: 1000, max: 9999 });
const idade = faker.random.number({ min: 18, max: 99 });


describe('Funcionalidade: Cadastro de Funcionários - Positivos', () => {

    it('Cenário: Buscar registros de funcionários', (done) => {
        // Quando desejar buscar todos os registros de funcionários
        request
            .get('/v1/employees')
            .end((error, response) => {

                try {
                    // Então todos os registros de funcionários devem ser retornados na pesquisa
                    expect(response.body);

                    // E o seu Status Code deve ser igual à 200 (OK)
                    expect(response).to.have.status(200);

                    // Validando os dados (jsonSchema)
                    expect(response.body).to.be.jsonSchema(schemaAllEmployees);

                    // Validando o retorno do campo "status"
                    expect(response.body.status).to.be.equal('success')

                    // Validando o retorno do campo "message"
                    expect(response.body.message).to.be.equal('Successfully! All records has been fetched.');

                } catch (error) {
                    throw new Error('Failed')
                }
                done();

            })

    });

    it('Cenário: Buscar registro de um funcionário (por ID)', (done) => {
        // Quando desejar buscar um registro de funcionário válido
        request
            .get(`/v1/employee/${faker.random.number({ min: 01, max: 24 })}`)
            .end((error, response) => {

                try {
                    // Então os dados do funcionário devem ser retornados na pesquisa
                    expect(response.body);

                    // E o seu Status Code deve ser igual à 200 (OK)
                    expect(response).to.have.status(200);

                    // Validando os dados (jsonSchema)
                    expect(response.body).to.be.jsonSchema(schemaEmployee);

                    // Validando o retorno do campo "status"
                    expect(response.body.status).to.be.equal('success')

                    // Validando o retorno do campo "message"
                    expect(response.body.message).to.be.equal('Successfully! Record has been fetched.');

                } catch (error) {
                    throw new Error('Failed')
                }
                done();

            })

    });

    it('Cenário: Criar registro de funcionário', (done) => {
        // Quando desejar criar um novo registro de funcionário
        request
            .post('/v1/create')
            .send({
                "name": nomeCompleto,
                "salary": salario,
                "age": idade
            })
            .end((error, response) => {

                try {
                    // Então os dados do novo funcionário devem ser retornados
                    expect(response.body);

                    // E o seu Status Code deve ser igual à 200 (OK)
                    expect(response).to.have.status(200);

                    // Validando os dados (jsonSchema)
                    expect(response.body).to.be.jsonSchema(schemaCreateEmployee);

                    // Validando o retorno do campo "status"
                    expect(response.body.status).to.be.equal('success')

                    // Validando o retorno do campo "data.name"
                    expect(response.body.data.name).to.be.equal(nomeCompleto);
                    // Validando o retorno do campo "data.salary"
                    expect(response.body.data.salary).to.be.equal(salario);
                    // Validando o retorno do campo "data.age"
                    expect(response.body.data.age).to.be.equal(idade);

                    // Validando o retorno do campo "message"
                    expect(response.body.message).to.be.equal('Successfully! Record has been added.');
                } catch (error) {
                    throw new Error('Failed')
                }
                done();

            })

    });

    it('Cenário: Atualizar registro de funcionário (por ID)', (done) => {
        // Quando desejar atualizar um registro de um funcionário válido
        request
            .put(`/v1/update/${faker.random.number({ min: 01, max: 24 })}`)
            .send({
                "name": nomeCompleto,
                "salary": salario,
                "age": idade
            })
            .end((error, response) => {

                try {

                    // Então os dados do novo funcionário devem ser retornados
                    expect(response.body);

                    // E o seu Status Code deve ser igual à 200 (OK)
                    expect(response).to.have.status(200);

                    // Validando os dados (jsonSchema)
                    expect(response.body).to.be.jsonSchema(schemaUpdateEmployee);

                    // Validando o retorno do campo "status"
                    expect(response.body.status).to.be.equal('success')

                    // Validando o retorno do campo "data.name"
                    expect(response.body.data.name).to.be.equal(nomeCompleto);

                    // Validando o retorno do campo "data.salary"
                    expect(response.body.data.salary).to.be.equal(salario);

                    // Validando o retorno do campo "data.age"
                    expect(response.body.data.age).to.be.equal(idade);

                    // Validando o retorno do campo "message"
                    expect(response.body.message).to.be.equal('Successfully! Record has been updated.');
                } catch (error) {
                    throw new Error('Failed')
                }
                done();

            })
    });

    it('Cenário: Excluir registro de funcionário (por ID)', (done) => {
        // Quando desejar excluir um registro de um funcionário válido
        request
            .delete(`/v1/delete/${faker.random.number({ min: 01, max: 24 })}`)
            .end((error, response) => {

                try {
                    expect(response.body);

                    // E o seu Status Code deve ser igual à 200 (OK)
                    expect(error).to.be.null;
                    expect(response).to.have.status(200);

                    // Validando os dados (jsonSchema)
                    expect(response.body).to.be.jsonSchema(schemaDeleteEmployee);

                    // Validando o retorno do campo "status"
                    expect(response.body.status).to.be.equal('success')

                    // Validando o retorno do campo "message"
                    expect(response.body.message).to.be.equal('Successfully! Record has been deleted');
                } catch (error) {
                    throw new Error('Failed')
                }
                done();

            })

    });

});
