# Desafio 04 - Automação Backend

## Detalhes sobre a organização dos desafios

Estes desafios está organizado da seguinte forma:

```bash

├── desafio-04-automacao-mobile
│   ├── mochawesome-report (onde são salvos os relatórios)
│   │   ├── *.*
│   ├── schemas (onde estão os schemas a serem validados)
│   │   ├── *.js
│   ├── tests (cenários de testes criados)
│   │   ├── cadastro-funcionario-positivo.spec.js
├── package-lock.json
├── package.json
├── .gitignore 
├── README.md

```

---
## Motivos pelos quais decide por essas ferramentas:

As escolhas foram baseadas na utilização futura dessas automações em integrações CI/CD futuras. Utilizei as melhores práticas na hora de escrita e organização de código, a fim de evitar repetições ou trechos desnecessários.

### Sobre as ferramentas utilizadas
- **Mocha, Chai, Chai-HTTP** ⇒  Quase todo desenvolvedor NodeJS utiliza desses *packages* como opção para testes de serviços (API). A lógica foi criar algo o mais simples possível e que, ao mesmo tempo, entregasse muito valor. Além, claro, de boa performance.
- **Validação de JSON Schema** ⇒ Fazer todos os *asserts* necessários faria com que os testes ficassem extensos, impactando na sua manutenção. Com isso, apliquei a validação de *schema* garantindo assim uma manutenção mais tranquila e deixando os asserts apenas para as informações sensíveis, tais como CEP, logradouro, bairro, estado e UF.
- **[Mochawesome](https://www.npmjs.com/package/mochawesome)** ⇒ Relatório descritivo e sem screenshots para integração CI/CD. Já utilizei em pelo menos um projeto e ele tem sido uma ótima opção. Além, claro, de gerar um arquivo *.json que pode ser importado em alguma base de dados para manter um histórico das execuções de teste.
- 
---

## Pré-requisitos 

- **[Node.JS](http://nodejs.org/download/)** - Versão 14 (LTS) ou superior;

---
## Instalação

1. Basta entra na pasta do projeto:

    ```sh
    $ cd desafio-04-automacao-backend/
    ```

2. Dentro da pasta desejada, informe o comando abaixo para realizar a instalação das dependências:

    ```sh
    $ npm install
    ```
---
## Executando os testes de Backend


1. Para rodar os testes (incluindo geração do relatório via **Mochawesome**), basta executar o seguinte comando:

    ```sh
    $ npm test
    ```
