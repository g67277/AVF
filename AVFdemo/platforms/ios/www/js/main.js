//Nazir Shuqair
//12/03/2013
//AVF 1312

//************************ Instagram Funcitons *******************************

$(document).on('pageinit', '#instagram', function () {
               
               var tag = "2015mustang",
               url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=df6f0950a99e4b80b4ae764f2284cadf";
               
               $.getJSON(url, function(response){
                         console.log(response);
                         var data = response.data;
                         //console.log(data[0].user.profile_picture);
                         $.each(data, function (index, result) {
                                var picUrl = result.images.thumbnail.url;
                                console.log(picUrl);
                                var pic = "<li id=\"figure\"><img src='" + picUrl + "' alt='" + result.user.id + "' /></li>";
                                $("#data-output").append(pic);
                                });
                         });
               
               var tag2 = "fordmustang2015",
               url2 = "https://api.instagram.com/v1/tags/" + tag2 + "/media/recent?callback=?&amp;client_id=df6f0950a99e4b80b4ae764f2284cadf";
               $.getJSON(url2, function(response){
                         console.log(response);
                         var data = response.data;
                         //console.log(data[0].user.profile_picture);
                         $.each(data, function (index, result) {
                                var picUrl = result.images.thumbnail.url;
                                console.log(picUrl);
                                var pic = "<li id=\"figure\"><img src='" + picUrl + "' alt='" + result.user.id + "' /></li>";
                                $("#data-output").prepend(pic);
                                });
                         });
               
               var pull = $('#pull');
               console.log(pull);
               var menu = $('#instagram header nav ul');
               console.log(menu);
               menuPull(pull, menu);
               
               /*var url2 = "https://api.instagram.com/v1/media/popular?callback=?&amp;client_id=df6f0950a99e4b80b4ae764f2284cadf";
                
                $.getJSON(url2, function(response){
                console.log(response);
                var data = response.data;
                //console.log(data[0].user.profile_picture);
                $.each(data, function (index, result) {
                var picUrl = result.images.thumbnail.url;
                var pic = "<li><img src='" + picUrl + "' alt='" + result.user.id + "' /><h4>" + result.user.full_name + ", <em>(" + result.user.username + ")</em></h4></li>";
                console.log(picUrl);
                $("#data-output").append(pic);
                });
                });*/
               
               
               });

$(document).on('pageinit', '#twitter', function () {
               
               
               
                              
               
               });

$(document).on('pageinit', '#accelerometer', function () {
               
               var pull = $('#pull3');
               console.log(pull);
               var menu = $('#accelerometer header nav ul');
               console.log(menu);
               menuPull(pull, menu);

               });

<<<<<<< HEAD
$(document).on('pageinit', '#compass', function () {
               
               var pull = $('#pull4');
               console.log(pull);
               var menu = $('#compass header nav ul');
=======
$(document).on('pageinit', '#geo', function () {
               
               var pull = $('#pull4');
               console.log(pull);
               var menu = $('#geo header nav ul');
>>>>>>> gh-pages
               console.log(menu);
               menuPull(pull, menu);
               
               // Wait for PhoneGap to load
               //
               onDeviceReady();
               
               // PhoneGap is ready
               //
               function onDeviceReady() {
               navigator.geolocation.getCurrentPosition(onSuccess, onError);
               }
               
               // onSuccess Geolocation
               //
               function onSuccess(position) {
               var element = document.getElementById('geolocation');
               element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
               'Longitude: '          + position.coords.longitude             + '<br />' +
               'Altitude: '           + position.coords.altitude              + '<br />' +
               'Accuracy: '           + position.coords.accuracy              + '<br />' +
               'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
               'Heading: '            + position.coords.heading               + '<br />' +
               'Speed: '              + position.coords.speed                 + '<br />' +
               'Timestamp: '          + new Date(position.timestamp)          + '<br />';
               
<<<<<<< HEAD
               alert("testing");
=======
               alert("Here are your position details");
>>>>>>> gh-pages
               }
               
               // onError Callback receives a PositionError object
               //
               function onError(error) {
               alert('code: '    + error.code    + '\n' +
                     'message: ' + error.message + '\n');
               }

               
               });

$(document).on('pageinit', '#weather', function () {
               
               var pull = $('#pull5');
               console.log(pull);
               var menu = $('#weather header nav ul');
               console.log(menu);
               menuPull(pull, menu);
               
               var query = escape('select item from weather.forecast where location="CAXX0518"'),
               url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20location%3D%2220176%22&format=json";
               
               $.getJSON(url, function(response) {
                         var data = response.query.results.channel.item.condition;
                         console.log(data);
                         var cDate = data.date;
                         var temp = data.temp;
                         var disc = data.text;
                         console.log(cDate);
                         var weather = "<div id=\"weather-data\"><p>" + cDate + "</p><h2>" + temp + "</h2><p>" + disc + "</p></div>";
                         $("#weather-output").prepend(weather);
                         });
               
<<<<<<< HEAD
=======
               alert("Here's the weather for Lansdown");
               
>>>>>>> gh-pages
               });

$(document).on('pageinit', '#research', function () {
               
               var pull = $('#pull6');
               console.log(pull);
               var menu = $('#research header nav ul');
               console.log(menu);
               menuPull(pull, menu);
               
               });

//************************ Menu Pull Funcitons *******************************
var menuPull = function(e, c){
    
    var pull        = e;
    console.log(pull);
    menu        = c;
    console.log(menu); 
    menuHeight  = menu.height();
    console.log(menuHeight); 
    
    $(pull).on('click', function(e) {  
               e.preventDefault();  
               menu.slideToggle();
               
               });   
	
	$(window).resize(function(){  
                     var w = $(window).width();  
                     if(w > 320 && menu.is(':hidden')) {  
                     menu.removeAttr('style');  
                     }  
                     }); 
}

//***********************Test**************************


