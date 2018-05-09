
var Follow=false;

$(document).mousemove(function(event){
  if(Follow)
   {$("#moveme").css("left",event.pageX-100);
    $("#moveme").css("top",event.pageY-100);
    $("#moveme").css("position","fixed");
   }
  console.log("X "+event.pageX+" Y "+event.pageY);
});

$("#moveme").click(function(){
 $(this).fadeOut(1000).fadeIn(1000); 
 if(!Follow){Follow=true;}
 else{Follow=false;}
});