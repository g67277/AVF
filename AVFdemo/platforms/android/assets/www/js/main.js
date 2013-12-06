//Nazir Shuqair
//12/03/2013
//AVF 1312

$(document).on('pageinit', '#instagram', function () {
	
	var tag = "funny",
		url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=df6f0950a99e4b80b4ae764f2284cadf";
		
	$.getJSON(url, function(response){
		console.log(response);
		var data = response.data;
		//console.log(data[0].user.profile_picture);
		$.each(data, function (index, result) {
			var picUrl = result.images.thumbnail.url;
			console.log(picUrl);	
		});
	});
	
	var url2 = "https://api.instagram.com/v1/media/popular?callback=?&amp;client_id=df6f0950a99e4b80b4ae764f2284cadf";
		
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
	});
	

});
