$(document).ready(function() {
  var image, imageCounter = 0,
    imageCache = [];
  var myTimer,z ,that, cap, Ocap;
  
  $("img").filter("#slide").click(
    function(){
      clearInterval(myTimer);
    }
                            );
  $("img").filter("#slide").dblclick(
    function(){
      alert("this would delete the image");
    }
                            );
  
  $("img").filter("#slide").hover(
    function(){
      that = $(this);
      cap = $(this).prev("#caption");
      Ocap = cap.text();
      z = $(this).filter("#slide").next().find("img");
      imageCounter=0;
//       console.log(imageCounter);
      z.each(
        function(){
          
          image = new Image();
          image.src = $(this).attr("src");
          image.title = $(this).attr("alt");
          image.href = $(this).attr("href");
          imageCache[imageCounter] = image;
          imageCounter++;
      
        }
      );
      imageCounter = 0;
      var nextImage;
      myTimer = setInterval(
        
        function () {
          cap.fadeOut(550);
          that.fadeOut(550,
            function() {
              imageCounter = (imageCounter + 1) % imageCache.length;
              nextImage = imageCache[imageCounter];
              
              $(this).attr("href",nextImage.href);
              $(this).attr("src", nextImage.src).fadeIn(500);
              $(this).prev("#caption").text(nextImage.title).fadeIn(500); 
            } 
          ); 
          
        },
        
        2000); 
    },
    function(){
      clearInterval(myTimer);
      nextImage = imageCache[0];
      $(this).attr("href",nextImage.href);
      $(this).attr("src", nextImage.src);
      $(this).prev("#caption").text(Ocap);
    }
  );
  

  
});




  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
