var app = {};

var arr = [];

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
         
         //
         
       },

       new: function() {
         //myNewFunction() 
         $('.main-content').html($('#create-appt').html());
         $('.new-appt').on('submit', function (e) {
              //console.log(1);
              e.preventDefault();
              //console.log(2);
          var appt = {}; 
         
            appt.title = $('.title').val();
            appt.date = $('.date').val();
            appt.time = $('.time').val();
            appt.street = $('.street').val();
            appt.city = $('.city').val();
            appt.state = $('.state').val();
              
            arr.push(appt);
            console.log(arr);
            
           this.navigate('', true);
            
           // window.location.hash = '';
         });
       
       },

      // detail: function() {


      // },

     //  edit: function(id) {
     //    alert("Put templates Here??" + id);
     //  },
     });


     var app_router = new Router;
     // app_router.on("route:new", function(){
     //   alert("Put templates Here??");
     // });

     Backbone.history.start();
