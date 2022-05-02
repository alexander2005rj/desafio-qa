Funcionalidade: Cadastro de Clientes
    Eu como usuário
    Desejo realizar o cadastramento de clientes

    Contexto: 
        Dado que um usuário deseja cadastrar clientes

    ### Cenários positivos ###

    # BUG - botão "Excluir" visível para criação de registro de cliente (básico ou completo)    
    Cenário: Criar registro de novo cliente (básico)
        E desejar cadastrar um novo cliente com dados básicos
        Quando informar os dados básicos do cliente
        Então deve receber uma confirmação visual que o cliente foi criado com sucesso

    Cenário: Criar registro de novo cliente (completo)
        E desejar cadastrar um novo cliente com dados completos
        Quando informar os dados básicos do cliente
        Então deve receber uma confirmação visual que o cliente foi criado com sucesso

    Cenário: Alterar um cliente
        E desejar atualizar o registro de um cliente já cadastrados
        Quando selecionar o cliente desejado
        E alterar os dados desejados
        Então deve receber uma confirmação visual que o cliente foi atualizado com sucesso

    Cenário: Pesquisar clientes
        E desejar pesquisar por clientes já cadastrados
        Quando informar o nome do cliente
        Então o registro do cliente deve ser exibido no resultado da pesquisa

    Cenário: Excluir Cliente
        E desejar excluir o registro de um cliente já cadastrado
        Quando receber um alerta visual sobre a exclusão
        E confirmar a exclusão do registro do cliente
        Então deve ter o cadastro desse cliente excluído

    Cenário: Desistir de Excluir um Cliente
        E desejar excluir o registro de um cliente já cadastrado
        Quando receber um alerta visual sobre a exclusão
        E desistir da exclusão do registro do cliente
        Então NÃO deve ter o cadastro desse cliente excluído


    ### Cenários negativos ###

    Cenário: Cadastrar novo cliente sem informar um nome
        E desejar cadastrar um novo cliente com dados básicos
        Quando deve informar os dados do cliente com exceção do nome
        Então deve receber uma confirmação visual que é necessário informar o nome do cliente

    # BUG - App permitindo repetir nome e primeiro telefone de cliente
    Cenário: Cadastrar novo cliente repetindo mesmo nome e primeiro telefone
        E desejar cadastrar um novo cliente com dados de 
        Quando informar os dados de nome e primeiro telefones de um cliente já existente
        Então NÃO deve permitir o cadastro desse cliente

    # BUG - App permitindo repetir nome e primeiro telefone de cliente
    Cenário: Alterar um cliente repetindo mesmo nome e primeiro telefone
        E desejar atualizar o registro de um cliente já cadastrados
        Quando selecionar o cliente desejado
        E utilizar os dados de nome e primeiro telefones de um cliente já existente
        Então NÃO deve permitir atualização do cadastro desse cliente

