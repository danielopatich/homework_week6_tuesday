// MODELS //
App.Model.ContactModel = Backbone.Model.extend({
  url: 'https://tiny-starburst.herokuapp.com/collections',
  default: {
    'first'   : '',
    'last'    : '',
    'phone'   : '',
    'twitter' : '',
    'github'  : '',
  },
});
// END MODELS //
