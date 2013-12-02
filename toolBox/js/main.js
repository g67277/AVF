

$(document).ready(function() {
    var rbform = $('#buyNow');
	
	rbform.validate({
		invalidHandler: function(form, validator){
		},
		submitHandler: function() {
			var data = rbform.serializeArray();
			storeData(data);	
		}	
	});
	
	var storeData = function(data){
		// if no key, this is a new post, if there is a key, its an old item being edited
		
		var id 				= Math.floor(Math.random() * 100001);
		
		localStorage.setItem(id, JSON.stringify(data));
		console.log(data);
		alert("Meeting Saved!");
	}
	
});
