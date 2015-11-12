// MODELS //
var Contact = Backbone.Model.extend({
  urlRoot: 'https://tiny-starburst.herokuapp.com/collections/danielopatich',

});
// END MODELS //
// COLLECTIONS //
var ContactList = Backbone.Collection.extend({
  url: 'https://tiny-starburst.herokuapp.com/collections/danielopatich',
  model: Contact
});
// END COLLECTIONS //
// VIEWS //
var FormView = Backbone.View.extend({
  tagName: 'form',
  template: _.template($('#formTemplate').html()),
  initialize:function(){
    this.render();
    console.log('Contact Form Page Rendered.')
  },
  events: {
    'click .submitBtn': 'handleSubmitClick'
  },
  send: function(event){
    var contact = new ContactList({
      first: '',
      last: '',
      phone: '',
      twitter: '',
      github: '',
    });
    this.model.save(null, {
      success: function() {
      }
    });
    contact.save();
    contactFormView.add(contact);
},
handleSubmitClick: function(){
  var first = $('.first').val();
  var last = $('.last').val();
  var phone = $('.phone').val();
  var twitter = $('.twitter').val();
  var github = $('.github').val();
  if (this.model)
    this.model.save(null, {
    success: function() {
    }
  });
  console.log('Submitted.')
  event.preventDefault();
  this.send();
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
  model: new Contact()
});
  function contactList(){
    var collection = new ContactList();
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
