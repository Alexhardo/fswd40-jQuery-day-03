

$(document).ready(function(){
 console.log('addon.js loaded');
 var selectProduct=$('<div id="selectProduct"><label>notebook<input type="checkbox"></label><label>phone<input type="checkbox"></label><label>tablet<input type="checkbox"></label></div>');
 $('body').append(selectProduct);
 $('#selectProduct').css('position','fixed').css('bottom','1vh').css('display','flex').css('justify-content','space-between').css('background-color','yellow').css('width','80vw');


 $("#selectProduct").click(function(){
  console.log("select bar clicked");
 });

});