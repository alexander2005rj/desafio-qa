Funcionalidade: Cadastro de Funcionários - Negativos
    Eu como usuário
    Desejo realizar o cadastramento de funcionários

    Contexto: 
        Dado que um usuário deseja cadastrar funcionários
    
    Cenário: Buscar registros de funcionários para outra versão da API
        E a versão do recurso for diferente de V1
        Quando desejar buscar todos os registros de funcionários
        Então uma mensagem de erro deve ser retornada
        E o seu Status Code deve ser igual à 404 (Not Found)
        
    Cenário: Buscar registros de funcionários (por ID)
        Quando desejar buscar um registro de funcionário válido
        Então uma mensagem de erro deve ser retornada
        E o seu Status Code deve ser igual à 404 (Not Found)
        
    Cenário: Buscar registro de um funcionário (por ID) para outra versão da API
        E a versão do recurso for diferente de V1
        Quando desejar buscar um registro de funcionário válido
        Então uma mensagem de erro deve ser retornada
        E o seu Status Code deve ser igual à 404 (Not Found)
        
    Cenário: Buscar registro de um funcionário (por ID) informando caracteres especiais na URL
        Quando desejar buscar um registro de funcionário em específico informando caracteres especiais
        Então uma mensagem de erro deve ser retornada
        E o seu Status Code deve ser igual à 404 (Not Found)
        
    Cenário: Criar registro de funcionário sem dados no corpo da requisição
        E não informar dados no corpo da requisição
        Quando desejar criar um novo registro de funcionário
        Então os dados do novo funcionário devem ser retornados
        E o seu Status Code deve ser igual à 400 (Bad Request)
        # BUG na API - retornando Status Code = 200 (OK)
        
    Cenário: Criar registro de funcionário para outra versão da API
        E a versão do recurso for diferente de V1
        Quando desejar criar um novo registro de funcionário
        Então uma página de erro em HTML deve ser retornada
        E o seu Status Code deve ser igual à 405 (Method Not Allowed)
        
    Cenário: Criar registro de funcionário (recurso com barra invertida na URL)
        E o recurso possui barra invertida (\)
        Quando desejar buscar um registro de funcionário em específico informando uma barra ao recurso na URL
        Então uma mensagem de erro deve ser retornada
        E o seu Status Code deve ser igual à 404 (Not Found)

    Cenário: Criar registro de funcionário informando ID na URL
        Quando desejar criar um novo registro de funcionário informando um ID específico na URL
        Então uma página de erro em HTML deve ser retornada
        E o seu Status Code deve ser igual à 405 (Method Not Allowed)

    Cenário: Atualizar registro de funcionário (por ID) para outra versão da API
        E a versão do recurso for diferente de V1
        Quando desejar atualizar um registro de um funcionário válido
        Então uma página de erro em HTML deve ser retornada
        E o seu Status Code deve ser igual à 405 (Method Not Allowed)

    Cenário: Atualizar registro de funcionário sem informar ID na URL
        Quando deseja atualizar um registro de um funcionário sem informar um ID específico
        Então uma mensagem de erro deve ser retornada
        E o seu Status Code deve ser igual à 404 (Not Found)
        
    Cenário: Atualizar registro de funcionário (por ID) (recurso com barra invertida na URL)
        E o recurso possui barra invertida (\)
        Quando desejar atualizar um registro de um funcionário válido
        Então os dados atualizados do funcionário devem ser retornados
        E o seu Status Code deve ser igual à 404 (Not Found)
        # BUG na API - retornando Status Code = 200 (OK)
        
    Cenário: Excluir registro de funcionário (por ID) para outra versão da API
        E a versão do recurso for diferente de V1
        Quando desejar excluir um registro de um funcionário válido
        Então uma página de erro em HTML deve ser retornada
        E o seu Status Code deve ser igual à 405 (Method Not Allowed)

    Cenário: Excluir registro de funcionário (por ID) (recurso com barra invertida na URL)
        E o recurso possui barra invertida (\)
        Quando desejar excluir um registro de um funcionário válido
        E o seu Status Code deve ser igual à 404 (Not Found)
        # BUG na API - retornando Status Code = 200 (OK)
        
    Cenário: Excluir registro de funcionário sem informar ID na URL
        Quando deseja excluir um registro de um funcionário sem informar um ID específico
        Então uma mensagem de erro deve ser retornada
        E o seu Status Code deve ser igual à 404 (Not Found)

    Cenário: Buscar registros de funcionários com outro método HTTP
        E deseja buscar todos os registros de funcionários utilizando um outro método HTTP
        Quando desejar buscar todos os registros de funcionários
        Então uma página de erro em HTML deve ser retornada
        E o seu Status Code deve ser igual à 405 (Method Not Allowed)
        
    Cenário: Buscar registro de um funcionário (por ID) com outro método HTTP
        E deseja buscar um registro de funcionário em específico utilizando um outro método HTTP
        Quando desejar buscar um registro de funcionário válido
        Então uma página de erro em HTML deve ser retornada
        E o seu Status Code deve ser igual à 405 (Method Not Allowed)

    Cenário: Criar registro de funcionário com outro método HTTP
        E deseja criar um novo registro de funcionário utilizando um outro método HTTP (DELETE)
        Quando desejar criar um novo registro de funcionário
        Então uma página de erro em HTML deve ser retornada
        E o seu Status Code deve ser igual à 405 (Method Not Allowed)
        
    Cenário: Atualizar registro de funcionário (por ID) com outro método HTTP
        E deseja atualizar um registro de um funcionário em específico utilizando um outro método HTTP (DELETE)
        Quando desejar atualizar um registro de um funcionário válido
        Então uma página de erro em HTML deve ser retornada
        E o seu Status Code deve ser igual à 405 (Method Not Allowed)

    Cenário: Excluir registro de funcionário (por ID) com outro método HTTP
        E deseja excluir um registro de um funcionário em específico utilizando um outro método HTTP (POST)
        Quando desejar excluir um registro de um funcionário válido
        Então uma página de erro em HTML deve ser retornada
        E o seu Status Code deve ser igual à 405 (Method Not Allowed)
