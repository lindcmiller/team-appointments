var app = {};

     var Router = Backbone.Router.extend({
       routes:{
         '':'home',
         'new':'new',
         'detail':'detail',
         'edit/:id':'edit',
       },

       home: function() {
         //myHomeFunction();
         $('.main-content').html($('#create-appt').html());
       },

       new: myNewFunction() {
         $('.main-content').html($('#create-appt').html());
         $('.add-button').on('submit', function (e) {
          e.preventDefault();
         $('.title').val();
         },

       detail: function() {


       },

       edit: function(id) {
         alert("Put templates Here??" + id);
       },
     });


     var app_router = new Router;
     // app_router.on("route:new", function(){
     //   alert("Put templates Here??");
     // });

     Backbone.history.start();
