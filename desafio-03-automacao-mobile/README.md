# Desafio 03 - Automação Mobile

## Detalhes sobre a organização deste desafio

Estes desafio está organizado da seguinte forma:

```bash
├── desafio-03-automacao-mobile
│   ├── app (app a ser testado)
│   │   ├── cadastro_clientes_teste.apk
│   ├── mochawesome-report (pasta para relatórios)
│   │   ├── assets
|   │   │   ├── *.*
│   │   ├── *.html
│   │   ├── *.json
│   ├── output (pasta para prints de tela)
│   │   ├── *.*
│   ├── pages (Page Objects do projeto)
│   │   ├── *Page.js
│   ├── tests (testes do desafio)
│   │   ├── *_test.js
├── .gitignore 
├── codecept.conf.js (arquivo de configuração do CodeceptJS)
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
├── steps_file.js
├── steps.d.ts
```

---
## Motivos pelos quais decidi por essas ferramentas:

As escolhas foram baseadas na utilização futura dessas automações em integrações CI/CD futuras. Utilizei as melhores práticas na hora de escrita e organização de código, a fim de evitar repetições ou trechos desnecessários.

### Sobre as ferramentas utilizadas 
- **[CodeceptJS](https://codecept.io/)** ⇒  Foi a primeira vez que utilizei, mas pude perceber que é uma ferramenta de testes muito robusta e possui muitas vantagens. As que mais me chamaram atenção e que pude utilizar diretamente foram: 
    - ***Scenario Driven*** ⇒ Escreva testes de aceitação da perspectiva do usuário. Torne os testes legíveis e fáceis de seguir.
    - ***Web & Mobile Testing*** ⇒ Teste de aplicativos móveis nativos usando Appium ou Detox.
    - ***Driver Agnostic*** ⇒ Execute seus testes via Playwright, WebDriver, Puppeteer, TestCafe, Protractor, Appium. O código é o mesmo;
- **[Appium](https://appium.io/)** ⇒ É uma ferramenta open source e multi-plataforma para automação de aplicações nativas e híbridas para web e mobile, disponível para os principais sistemas operacionais do mercado, Android e iOS
- **[Faker-BR](https://www.npmjs.com/package/faker-br)** ⇒ Fork baseado no Faker.js para implementação no Brasil em língua portuguesa. Usado para geração de dados de testes dinâmicos.
- **[Mochawesome](https://www.npmjs.com/package/mochawesome)** ⇒ Relatório descritivo e sem screenshots para integração CI/CD. Já utilizei em pelo menos um projeto e ele tem sido uma ótima opção. Além, claro, de gerar um arquivo *.json que pode ser importado em alguma base de dados para manter um histórico das execuções de teste.

---

## Pré-requisitos 

- **[Node.JS](http://nodejs.org/download/)** - Versão 14 (LTS) ou superior;
- **[Java](https://www.oracle.com/java/technologies/downloads/)** - Versão 8 ou 11;
- **[Android Studio](https://developer.android.com/studio#downloads)** 
- **[Appium](https://appium.io/)** - O **appium-doctor** será necessário para verificar se há algo faltando na sua instalação.
---

## Configuração - Appium (Windows ou Linux)

1. Depois de instalar o NodeJS, informe o comando abaixo para realizar a instalação do Appium:

    ```sh
    $ npm i -g appium
    ```
2. Para verificar se a instalação foi realizada com sucesso, informe o comando abaixo:

    ```sh
    $ appium
    ```

3. Caso não seja exibido nenhum erro, basta fechar o terminal.
   
---
## Configuração - Appium Doctor (Windows ou Linux)
1. Depois de instalar o Appium, informe o comando abaixo para realizar a instalação do Appium:

    ```sh
    $ npm i -g appium-doctor
    ```

2. Para verificar se a instalação foi realizada com sucesso, informe o comando abaixo:

    ```sh
    $ appium-doctor
    ```

3. Caso não seja exibido nenhum erro, basta fechar o terminal.
   
---
## Configuração - Android Studio

### Windows
1. Abrir o terminal e adicionar as seguintes linhas:
   
    ```bash

        set ANDROID_HOME=C:\<pasta da instalação>\android-sdk-windows
        set PATH=%PATH%;%ANDROID_HOME%\build-tools;%ANDROID_HOME%\emulator;%ANDROID_HOME%\platforms;%ANDROID_HOME%\platform-tools

    ```

### Linux 

1. Abrir o arquivo **.bashrc** com um editor de textos e adicionar as seguintes linhas:

    ```bash

        export ANDROID_HOME=/home/<coloque-aqui-seu-user>/Android/Sdk
        export PATH=$PATH:$ANDROID_HOME/build-tools
        export PATH=$PATH:$ANDROID_HOME/emulator
        export PATH=$PATH:$ANDROID_HOME/platforms
        export PATH=$PATH:$ANDROID_HOME/platform-tools

    ```

2. Salvar o arquivo **.bashrc** 
3. No terminar, digitar o seguinte comando:

    ```sh
    $ source ~/.bashrc

    ```
---

## Criação do Virtual Device:

### Criar um device com as seguintes configurações:
1. Phone ⇒ Pixel 2 (com Play Store);
2. Imagem (x86 Images):
   1. Pie 
   2. API Level = 28 
   3. ABI = x86_64 
   4. Android 9.0 com Google Play
3. AVD Name ⇒ pixel

---
## Instalação do Desafio

1. Basta entra na pasta do projeto:

    ```sh
    $ cd desafio-03-automacao-mobile/
    ```

2. Dentro da pasta desejada, informe o comando abaixo para realizar a instalação das dependências:

    ```sh
    $ npm install
    ```
---
## Executando os testes de Mobile


1. Para rodar os testes (incluindo geração do relatório via **Mochawesome** e print da última tela), basta executar o seguinte comando:

    ```sh
    $ npm run android
    ```
