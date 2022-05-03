# Desafios-QA

## Quais são os desafios contidos nesse repositório?

#### Desafio 01 - Cenários Mobile
- Cenários baseados na funcionalidade de *"cadastro de cliente"* do app;
- App contido na pasta **app**.

#### Desafio 02 - Cenários Backend
- Cenários baseados na API pública **[Dummy Rest API Example](http://dummy.restapiexample.com/)**;
- Com base no CRUD de um funcionário;

#### Desafio 03 - Automação Mobile
- Cenários automatizados relacionados ao **Desafio 01 - Cenários Mobile**. 

#### Desafio 04 - Automação Backend
- Cenários automatizados relacionados ao **Desafio 02 - Cenários Backend**
  
---

## Descrição das ferramentas de cada desafio

### Desafios 01 (Cenários Mobile) e 02 (Cenários Backend)
- Escritos em linguagem Gherkin;
- Contendo cenários positivos e negativos, que foram divididos em pastas.

### Desafio 03 - Automação Mobile
- Escrito em linguagem JavaScript (NodeJS);
- Ferramenta para automação Mobile: Appium;
- Pacotes do projeto: 
  - [CodeceptJS](https://codecept.io/)
  - [Appium](https://appium.io/)
  - [Mochawesome](https://www.npmjs.com/package/mochawesome#adding-test-context)
  - [faker-br](https://www.npmjs.com/package/faker-br)
- Page Objects;
- Relatório de teste (Mochawesome).


### Desafio 04 - Automação Backend
- Pacotes do projeto: 
  -  [Mocha](https://www.npmjs.com/package/mocha)
  -  [Chai](https://www.npmjs.com/package/chai)
  -  [Chai-HTTP](https://www.npmjs.com/package/chai-http) 
  -  [chai-json-schema-ajv](https://www.npmjs.com/package/chai-json-schema-ajv)
  -  [Mochawesome](https://www.npmjs.com/package/mochawesome#adding-test-context)
- Validação de JSON Schema;
- Relatório de teste (Mochawesome).

--- 

## Detalhes sobre a organização dos desafios

Estes desafios está organizados em pastas:

```bash

├── desafio-01-cenarios-mobile
│   ├── *.*
├── desafio-02-cenarios-backend
│   ├── *.*
├── desafio-03-automacao-mobile
│   ├── *.*
├── desafio-04-automacao-mobile
│   ├── *.*
├── .gitignore 
├── README.md

```

---

## Como executar cada desafio?

- Os dois primeiros desafios não necessitam de ferramentas de execução, pois foram escritos em linguagem Gherkin.
- Já os desafios 03 (Mobile) e 04 (Backend) possuem as informações necessárias para sua a execução contidas no arquivo README de cada desafio.

---
