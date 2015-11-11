// COLLECTIONS //
App.Collection.ContactCollection = Backbone.Collection.extend({
  url: 'https://tiny-starburst.herokuapp.com/collections',
  model: App.Models.Contact
});
// END COLLECTIONS //
