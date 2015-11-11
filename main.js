// MODELS //
var ContactMo = Backbone.Model.extend({
  urlRoot: 'https://tiny-starburst.herokuapp.com/collections/danielopatich',

});
// END MODELS //

// COLLECTIONS //
var ContactCo = Backbone.Collection.extend({
  url: 'https://tiny-starburst.herokuapp.com/collections/danielopatich',
  model: ContactMo
});
// END COLLECTIONS //

// VIEWS //
var FormView = Backbone.View.extend({
  initialize:function(){
    this.render();
    console.log('Contact Form Page Rendered.')
  },

  tagName: 'form',
  template: _.template($('#formTemplate').html()),

  events: {
    'click .submitBtn': 'send'
  },

  send: function(event){
    var first = $('.first').val();
    var last = $('.last').val();
    var phone = $('.phone').val();
    var twitter = $('.twitter').val();
    var github = $('.github').val();
    var contact = new ContactCo({
      first: first,
      last: last,
      phone: phone,
      twitter: twitter,
      github: github,
    });
    this.model.save(null, {
      success: function() {
      }
    });
},


render: function() {
  $('#contactForm').html(this.$el.html(this.template()));
},
});

var ContactsView = Backbone.View.extend({
  template: _.template($('#mainTemplate').html()),

  render: function() {
    this.$el.html(this.template({
      contacts: this.collection.toJSON()
    }));
    return this;
  }
});
// END VIEWS //




// BUILD //
var contactFormView = new FormView({
  model: new ContactMo()
});

  function contactList(){
    var collection = new ContactCo();
    var newContacts = new ContactsView({
      collection: collection
    });
    collection.fetch({
    success: function(){
      newContacts.render();
      $('#contactMain').html(newContacts.el);
    }
  })
};

// END BUILD //

contactList();

// (document).ready(function(){
//   $('section').click(function(){
//     $('img').show();
//     setTimeout(function() {$('img').hide()}, 5000);
//   });
// });
