const { I } = inject();
const faker = require('faker-br');
const assert = require('assert');
// Para ser usado no arquivo de screensaver
let screenRandomNumber = faker.random.number({ min: 1, max: 99999});

module.exports = {

  fields: {
    tituloPagina: { xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView' },
    radioBasico: '#br.com.dudstecnologia.cadastrodeclientes:id/rdBasico',
    radioCompleto: '#br.com.dudstecnologia.cadastrodeclientes:id/rdCompleto',
    nome: '#br.com.dudstecnologia.cadastrodeclientes:id/editNome',
    rg: '#br.com.dudstecnologia.cadastrodeclientes:id/editRg',
    cpf: '#br.com.dudstecnologia.cadastrodeclientes:id/editCpf',
    dataNascimento: '#br.com.dudstecnologia.cadastrodeclientes:id/editData',
    nomeMae: '#br.com.dudstecnologia.cadastrodeclientes:id/editMae',
    nomePai: '#br.com.dudstecnologia.cadastrodeclientes:id/editPai',
    endereco: '#br.com.dudstecnologia.cadastrodeclientes:id/editEndereco',
    numeroEndereco: '#br.com.dudstecnologia.cadastrodeclientes:id/editNumero',
    bairro: '#br.com.dudstecnologia.cadastrodeclientes:id/editBairro',
    cep: '#br.com.dudstecnologia.cadastrodeclientes:id/editCep',
    cidade: '#br.com.dudstecnologia.cadastrodeclientes:id/editCidade',
    selectUF: '#br.com.dudstecnologia.cadastrodeclientes:id/spinnerEstados',
    selectUFRandom: { xpath: '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[$number]'}, 
    telefone1: '#br.com.dudstecnologia.cadastrodeclientes:id/editTelefone1',
    telefone2: '#br.com.dudstecnologia.cadastrodeclientes:id/editTelefone2',
    email: '#br.com.dudstecnologia.cadastrodeclientes:id/editEmail',
    observacoes: '#br.com.dudstecnologia.cadastrodeclientes:id/editObs',
    subtituloInfoProfissionais: { path: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView' },
    empresa: '#br.com.dudstecnologia.cadastrodeclientes:id/editEmpresa',
    cargo: '#br.com.dudstecnologia.cadastrodeclientes:id/editCargo',
    enderecoEmpresa: '#br.com.dudstecnologia.cadastrodeclientes:id/editEnderecoEmpresa',
    cepEmpresa: '#br.com.dudstecnologia.cadastrodeclientes:id/editCepEmpresa',
    telefoneEmpresa: '#br.com.dudstecnologia.cadastrodeclientes:id/editTelefoneEmpresa',
    dataAdmissao: '#br.com.dudstecnologia.cadastrodeclientes:id/editDataAdmissao',
    renda: '#br.com.dudstecnologia.cadastrodeclientes:id/editRenda',
    telefoneReferencia1: '#br.com.dudstecnologia.cadastrodeclientes:id/editTelefoneRef1',
    telefoneReferencia2: '#br.com.dudstecnologia.cadastrodeclientes:id/editTelefoneRef2',
    banco: '#br.com.dudstecnologia.cadastrodeclientes:id/editBanco',
    agencia: '#br.com.dudstecnologia.cadastrodeclientes:id/editAgencia',
    conta: '#br.com.dudstecnologia.cadastrodeclientes:id/editConta'
  },

  buttons: {
    ligarTelefone1: '#br.com.dudstecnologia.cadastrodeclientes:id/btnLigar1',
    ligarTelefone2: '#br.com.dudstecnologia.cadastrodeclientes:id/btnLigar2',
    enviar: '#br.com.dudstecnologia.cadastrodeclientes:id/btnEnviarEmail',
    salvar: '#br.com.dudstecnologia.cadastrodeclientes:id/btnSalvar',
    excluir: '#br.com.dudstecnologia.cadastrodeclientes:id/btnExcluir',
    okCadastro: '#android:id/button1', 
    sim: '#android:id/button1',
    nao: '#android:id/button3'
  },

  messages: {
    cadastroSucesso: '#android:id/message',
    perguntaExclusao: '#android:id/message'
  },

  selectUF(number) {
    I.tap(this.fields.selectUF);
    I.tap(this.fields.selectUFRandom.xpath.replace('$number', number));
  },

  fillCadastroBasico(nomeCompleto) {
    I.waitForElement(this.fields.tituloPagina, 3);
    I.fillField(this.fields.nome, nomeCompleto);
    I.hideDeviceKeyboard();
    I.fillField(this.fields.rg, faker.random.number({ min: 1111111111, max: 9999999999}));
    I.fillField(this.fields.cpf, faker.br.cpf());
    I.fillField(this.fields.dataNascimento, `${faker.random.number({ min: 10, max: 28})}${faker.random.number({ min: 10, max: 12})}${faker.random.number({ min: 1970, max: 2010})}`);
    I.fillField(this.fields.endereco, `Rua ${faker.address.streetName()}`);
    I.fillField(this.fields.numeroEndereco, faker.random.number({ min: 1, max: 1000}));
    I.fillField(this.fields.bairro, faker.address.streetName());
    I.fillField(this.fields.cep, faker.random.number({ min: 11111111, max: 99999999}));
    I.fillField(this.fields.cidade, faker.address.city());
    I.fillField(this.fields.telefone1, faker.phone.phoneNumber());
    I.fillField(this.fields.telefone2, faker.phone.phoneNumber());
    I.fillField(this.fields.email, faker.internet.email());
    I.fillField(this.fields.observacoes, faker.name.jobType());

    I.tap(this.buttons.salvar);
  }, 
  
  async checkCadastroSucesso(message) {
    I.waitForElement(this.messages.cadastroSucesso, 3);
    assert.equal(await I.grabTextFrom(this.messages.cadastroSucesso), message);
  },

  tapOnOK() {
    I.waitForElement(this.buttons.okCadastro, 3);
    I.tap(this.buttons.okCadastro);
  },

  clearNome() {
    I.waitForElement(this.fields.tituloPagina, 3);
    I.clearField(this.fields.nome);
    I.hideDeviceKeyboard();
  },

  fillNovoNome(nomeCompleto) {
    I.waitForElement(this.fields.tituloPagina, 3);
    I.fillField(this.fields.nome, nomeCompleto);
    I.hideDeviceKeyboard();
  },

  tapOnExcluir() {
    I.waitForElement(this.fields.tituloPagina, 3);
    I.tap(this.buttons.excluir);
  },

  async checkPerguntaExclusao(message) {
    I.waitForElement(this.messages.perguntaExclusao, 3);
    assert.equal(await I.grabTextFrom(this.messages.perguntaExclusao), message);
  },

  tapOnSim() {
    I.waitForElement(this.buttons.sim, 3);
    I.tap(this.buttons.sim);
  },

  tapOnNao() {
    I.waitForElement(this.buttons.nao, 3);
    I.tap(this.buttons.nao);
  },

  async takeScreenShot(nome) {
    await I.saveScreenshot(`${nome}-${screenRandomNumber}.png`);
    await I.addMochawesomeContext(`../output/${nome}-${screenRandomNumber}.png`);
  }

}
