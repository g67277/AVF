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

//************************ Menu Pull Funcitons *******************************
$(function() {  
    var pull        = $('#pull');  
        menu        = $('nav ul');  
        menuHeight  = menu.height();  
  
    $(pull).on('click', function(e) {  
        e.preventDefault();  
        menu.slideToggle();  
    });  
});  

$(window).resize(function(){  
    var w = $(window).width();  
    if(w > 320 && menu.is(':hidden')) {  
        menu.removeAttr('style');  
    }  
});   
