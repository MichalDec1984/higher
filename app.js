$(function() {
  //variables for url
  var imgUrl = 'https://picsum.photos/list';
  /* Insert images to DOM  */
  function insertContent(images) {
    $.each(images, function(indexImg, img) {
    if (indexImg <3) {
    	$.ajax({
    	url: img.post_url,
    	type: 'GET',
    	success: function(data) {
        var html = $.parseHTML( data ), 
            img = $(html).find("img:eq( 1 )" ),
            len = img.length; 
            if( len > 0 ){
                var src = img.attr("src");
            } else {
                console.log("Image not found");
            }
            console.log(src);
            var img = $('<img id="img">');
	    img.appendTo('.img');
   	    img.attr("src", src);
    	}
     });	
    }  
   });
  }
  /* Load images and insert them into the DOM
  */
  function loadImages() {
        $.ajax({
          	url: imgUrl;
        }).done(function(response){
     		    insertContent(response)
            //console.log(response);
    	 }).fail(function(error) {
           //console.log(error)
       })
  }
  loadImages();
});
