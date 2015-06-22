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
         $('body').html('<h1>Home screen</h1>');
       },

       new: function(){
         //myNewFunction();
         $('body').html('<h1>New appointment</h1>');
       },

       detail: function(){


       },

       edit: function(id){
         alert("Put templates Here??" + id);
       },
     });


     var app_router = new Router;
     // app_router.on("route:new", function(){
     //   alert("Put templates Here??");
     // });

     Backbone.history.start();
