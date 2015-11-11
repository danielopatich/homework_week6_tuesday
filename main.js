var App={};
App.Model={};
App.View={};
App.Collection={};



// ROUTER //
App.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'contacts': 'contacts'
  },
  home: function(){
    var newHome = new App.View.Home();
    $('#main').append(view.render().el);
  },

  contacts: function(){
    var collection = new App.Collection.ContactCollection();
    var newContacts = new App.View.ContactsCollection({
      collection: collection
    });
      collection.fetch({
      success: function(){
        $('#main').html(view.render().el);
      }
    })
  }
});

// END ROUTER //


$('document').ready(function() {
  App.router = new App.Router();
  Backbone.history.start();
});
