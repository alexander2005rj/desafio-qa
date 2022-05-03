const { I } = inject();
const faker = require('faker-br');
const assert = require('assert');
// Para ser usado no arquivo de screensaver
let screenRandomNumber = faker.random.number({ min: 1, max: 99999 });

module.exports = {

  messages: {
    nenhumClienteCadastrado: '#br.com.dudstecnologia.cadastrodeclientes:id/txtNenhumCliente',
    toast: { xpath: '/hierarchy/android.widget.Toast' }
  },

  fields: {
    pesquisar: '#br.com.dudstecnologia.cadastrodeclientes:id/editPesquisar',
    registroCliente: { xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.ListView/android.widget.LinearLayout' },
    nomeLista: '#br.com.dudstecnologia.cadastrodeclientes:id/nomeLista'
  },

  buttons: {
    abrirAcoes: { xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageButton' },
    cadastrarNovo: { xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]' },
    exportarDados: { xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]' },
    sobreApp: { xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]' },
    opcoes: { xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[4]' }
  },

  tapOnAbrirAcoes() {
    I.waitForElement(this.buttons.abrirAcoes, 3);
    I.tap(this.buttons.abrirAcoes);
  },

  tapOnCadastrarNovo() {
    I.waitForElement(this.buttons.cadastrarNovo, 3);
    I.tap(this.buttons.cadastrarNovo);
  },

  async searchCliente(nome) {
    I.sendDeviceKeyEvent(4);
    I.waitForElement(this.fields.pesquisar, 3);
    I.fillField(this.fields.pesquisar, nome);
    I.hideDeviceKeyboard();
    I.waitForElement(this.fields.registroCliente, 3);
  },

  async checkSearch(nome) {
    I.waitForElement(this.fields.registroCliente, 3);
    assert.equal(await I.grabTextFrom(this.fields.nomeLista), nome);
  },

  clickClienteEncontrado() {
    I.waitForElement(this.fields.registroCliente, 3);
    I.tap(this.fields.registroCliente);
  },

  async checkCliente(nome) {
    I.waitForElement(this.fields.pesquisar, 3);
    I.fillField(this.fields.pesquisar, nome);
    I.hideDeviceKeyboard();
  },

  async takeScreenShot(nome) {
    await I.saveScreenshot(`${nome}-${screenRandomNumber}.png`);
    await I.addMochawesomeContext(`../output/${nome}-${screenRandomNumber}.png`);
  }

}
