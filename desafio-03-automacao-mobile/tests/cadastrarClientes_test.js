const { I, sistemaPage, homePage, cadastroPage } = inject();
const faker = require('faker-br');

// Dados de nome de cliente
let nomeCompleto;

Feature('Cadastrar Novo Cliente');

Before(() => {
    // Definindo um novo nome a cada teste
    nomeCompleto = `${faker.name.firstName()} ${faker.name.lastName()}`
})


Scenario('Cadastrar Novo - Básico', () => {

    sistemaPage.tapAllowPermission();
    homePage.tapOnAbrirAcoes();
    homePage.tapOnCadastrarNovo();
    cadastroPage.fillCadastroBasico(nomeCompleto);
    cadastroPage.checkCadastroSucesso('Cadastro efetuado com sucesso');
    cadastroPage.takeScreenShot('cadastro-novo-cliente');

});

Scenario('Pesquisar Clientes', () => {

    sistemaPage.tapAllowPermission();
    homePage.tapOnAbrirAcoes();
    homePage.tapOnCadastrarNovo();
    cadastroPage.fillCadastroBasico(nomeCompleto);
    cadastroPage.checkCadastroSucesso('Cadastro efetuado com sucesso');
    cadastroPage.tapOnOK();
    homePage.searchCliente(nomeCompleto);
    homePage.checkSearch(nomeCompleto);
    homePage.takeScreenShot('pesquisar-clientes');
    
});

Scenario('Excluir Clientes', () => {

    sistemaPage.tapAllowPermission();
    homePage.tapOnAbrirAcoes();
    homePage.tapOnCadastrarNovo();
    cadastroPage.fillCadastroBasico(nomeCompleto);
    cadastroPage.checkCadastroSucesso('Cadastro efetuado com sucesso');
    cadastroPage.tapOnOK();
    homePage.searchCliente(nomeCompleto);
    homePage.clickClienteEncontrado();
    cadastroPage.tapOnExcluir();
    cadastroPage.checkPerguntaExclusao('Tem certeza que deseja excluir este cadastro?');
    cadastroPage.tapOnSim();
    homePage.checkCliente(nomeCompleto);
    homePage.takeScreenShot('excluir-cliente');

});