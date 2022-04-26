$(".Part-two-on").hide();
$(".Part-two-no").hide();
$(".Ending-off").hide();
$(".farquad").hide();
$(".princess").hide();
$(".wolf").hide();

$(".left-button").click(function() {
$(".Part-two-on").show();
$(".Ending-off").hide(); 
$(".start").hide();
});

$(".Part-two-on").dblclick(function() {
    $(".Ending-off"). show();
 $(".Part-two-on").hide();  
    
 });   
    
//6.8 Do-Now- When we click the no button make part two no show up and the start of the story hide
$(".right-button").click(function() {
$(".Part-two-no").show();
$(".start").hide();
});

//6.9 Do-Now Use another event than click 
$(".secondImage").hover(function() {
$(".Ending-yes").show();
$(".Part-two-yes").hide();
    
});
$(".door-one").dblclick(function() {
	$(".princess").slideDown();
   
});
$(".door-one").click(function() {
	$(".princess").slideUp();
   
});

$(".door-two").dblclick(function() {
	$(".wolf").slideDown();
   
});

$(".door-two").click(function() {
	$(".wolf").slideUp();
   
});

$(".door-three").dblclick(function() {
	$(".farquad").slideDown();
   
});

$(".door-three").click(function() {
	$(".farquad").slideUp();
   
});
