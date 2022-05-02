Funcionalidade: Cadastro de Funcionários - Positivos
    Eu como usuário
    Desejo realizar o cadastramento de funcionários

    Contexto: 
        Dado que um usuário deseja cadastrar funcionários
    
    Cenário: Buscar registros de funcionários
        Quando desejar buscar todos os registros de funcionários
        Então todos os registros de funcionários devem ser retornados na pesquisa
        E o seu Status Code deve ser igual à 200 (OK)

    Cenário: Buscar registro de um funcionário (por ID)
        Quando desejar buscar um registro de funcionário válido
        Então os dados do funcionário devem ser retornados na pesquisa
        E o seu Status Code deve ser igual à 200 (OK)

    Cenário: Criar registro de funcionário
        Quando desejar criar um novo registro de funcionário
        Então os dados do novo funcionário devem ser retornados
        E o seu Status Code deve ser igual à 200 (OK)

    Cenário: Atualizar registro de funcionário (por ID)
        Quando desejar atualizar um registro de um funcionário válido
        Então os dados atualizados do funcionário devem ser retornados
        E o seu Status Code deve ser igual à 200 (OK)

    Cenário: Excluir registro de funcionário (por ID)
        Quando desejar excluir um registro de um funcionário válido
        Então as informações sobre a exclusão do funcionário devem ser retornadas'
        E o seu Status Code deve ser igual à 200 (OK)
