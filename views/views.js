// VIEWS //

App.View.Home = Backbone.View.extend({
  template: _.template($('#inputTemplate').html()),


  events: {
    'click .submitBtn' : 'clickHandle'
  }

  send: function(){
    var first = $('.first').val();
    var last = $('.last').val();
    var phone = $('.phone').val();
    var twitter = $('.twitter').val();
    var github = $('.github').val();

    var newContact = new App.Collection.ContactCollection({
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
  clickHandle: function(event){
    console.log('User submitted contact info');
    event.preventDefault();
    this.send();
  },
});

App.Views.ContactsView = Backbone.View.extend({
  render: function(){
    var template = _.template($('#contactTemplate').html(), {user: this.collection.toJSON()});
    this.$el.html(template);
  },
});
// END VIEWS //
