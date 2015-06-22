var HomeView = Backbone.View.extend({

  initialize: function(){
    _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

     this.render(); // not all views are self-rendering. This one is.
  },

  render: function(){
    $('div').html("<%- m.title %>");
  }
});
