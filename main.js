var App={};
App.Model={};
App.View={};
App.Collection={};


// ROUTER //
var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'contacts': 'contacts'
  },
  home: function(){
    var newHome = new HomeView();
    $('#main').append(view.render().el);
  },

  contacts: function(){
    var collection = new ContactColl();
    var newContacts = new HomeView({
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

// MODELS //
var ContactModel = Backbone.Model.extend({
  url: 'https://tiny-starburst.herokuapp.com/collections',
  default: {
    first   : '',
    last    : '',
    phone   : '',
    twitter : '',
    github  : '',
  },
});
// END MODELS //

// COLLECTIONS //
var ContactColl = Backbone.Collection.extend({
  url: 'https://tiny-starburst.herokuapp.com/collections',
  model: App.Models.Contact
});
// END COLLECTIONS //

// VIEWS //

var HomePage = Backbone.View.extend({
  initialize:function(options){
    $(".submitBtn").on("click", this.send);
  },
  template: _.template($('#inputTemplate').html()),
  events: {
    'click .submitBtn': 'handleClick'
  },

  send: function(){
    var first = $('.first').val();
    var last = $('.last').val();
    var phone = $('.phone').val();
    var twitter = $('.twitter').val();
    var github = $('.github').val();

    var newContact = new ContactColl({
      first: first,
      last: last,
      phone: phone,
      twitter: twitter,
      github: github,
    });

  }
  newContact.save();
},
  render: function(){
    this.$el.html(this.template());
  },
  handleClick: function(event){
    console.log('User submitted contact info');
    event.preventDefault();
    this.send();
  },
});

var ContactsView = Backbone.View.extend({
  render: function(){
    var template = _.template($('#contactTemplate').html(), {user: this.collection.toJSON()});
    this.$el.html(template);
  },
});
// END VIEWS //


$('document').ready(function() {
  App.router = new App.Router();
  Backbone.history.start();
});
