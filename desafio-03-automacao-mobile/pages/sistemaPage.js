const { I } = inject();

module.exports = {

  messages: {
    alertPermissionApp: '#com.android.packageinstaller:id/desc_container'
  },

  buttons: {
    denyButton: '#com.android.packageinstaller:id/permission_deny_button',
    allowButton: '#com.android.packageinstaller:id/permission_allow_button'
  },

  tapDenyPermission() {
    I.waitForElement(this.messages.alertPermissionApp, 5);
    I.tap(this.buttons.denyButton);
  },

  tapAllowPermission() {
    I.waitForElement(this.messages.alertPermissionApp, 5);
    I.tap(this.buttons.allowButton);
  },

  async goBack() {
    await I.sendDeviceKeyEvent(4);
  }

}
