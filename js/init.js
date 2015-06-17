// This file runs once and is solely responsible for initializing
// the application when it loads.
$(function () {
  'use strict';

  function formToObj(form) {
    var obj = {};

    $(form).find('input').each(function(i, input) { //i=index/integer/location, input=current item/value//
      obj[input.name] = input.value;
    });

    return obj;

  }

$('.appt-form').on('submit', function(e) {
  e.preventDefault();

  console.log(formToObj(this));

});

});
  // Initialize application properties
  //app.appts = new app.ObjectStore('appts', localStorage);

  // Tell backbone to process the current route
//  Backbone.history.start();
