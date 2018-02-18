/* eslint-env node */
module.exports = {
  description: ''

  afterInstall () {
      return this.addAddonToProject('ember-simple-auth', '1.4.0').then(() => {
        return this.addBowerPackagesToProject([{
                    name: 'async',
                    target: '0.9.2'
                }, {
                    name: 'crosstab',
                    target: '0.2.8'
                }, {
                    name: 'jquery-atmosphere',
                    target: '2.2.7'
                }]);
        });
  }
};
