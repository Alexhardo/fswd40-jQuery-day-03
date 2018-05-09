
var images=[];

$(document).ready(
  function (){
   //var images = $(document).find('img');
   //console.log(JSON.stringify(images)); 
   $('img').each(function(){
     var name=$(this).attr('src');
     images.push(name); 
     
   });

  console.log(JSON.stringify(images));

  for(var i=0;i<images.length;++i){
   if(images[i].charAt(0)=='p')
    {$('.product-image:eq('+i+')').css('background','green');}
   if(images[i].charAt(0)=='n')
    {$('.product-image:eq('+i+')').css('background','red');}
   if(images[i].charAt(0)=='t')
    {$('.product-image:eq('+i+')').css('background','blue');}
  
  }

});