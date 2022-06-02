//$(document).ready(function(){
//$(".chart-container svg rect").hover(function(){
//  $(".chart-container svg rect").css("opacity",.4);
//  $(this).css("opacity",1);
//  $(this).css("height",15);
//  $(this).css("width",15);
//},
//function(){
//  $(".chart-container svg rect").css("opacity",.4);
//  $(this).css("opacity",.4);
//  $(this).css("height",7);
//  $(this).css("width",7);
//}
//);
//});
//$("")

var clicked = false;
var clicked_stop = true;

$(document).ready(function(){

$(".sezione4 rect").click(/*function(){
  fascio= $(this).data("fascio");
  $(this).css("opacity",1);
  $(this).css("fill","white");
  $(this).css("stroke-width",6);

  $(".container svg #"+ fascio).css("opacity",1);
  console.log(".container svg #"+ fascio);
  //$(".container svg #maggio").css("opacity",.2);
  mese=$(this).data("mese");
  $(".container svg #"+ mese).css("opacity",1);
  //$(".container svg #mese1").css("opacity",.5);
  concerti=$(this).data("concerti");
  $(".container svg #"+ concerti).css("opacity",1);
  //$(".container svg #concerti2").css("opacity",.3);
  stop=$(this).data("stop");
  $(".container svg #stop").css("fill","black");
  $(".container svg #stop").css("opacity",1);
  $(".container svg #stop").css("stroke-width",1);
  $(".container svg #maggio").css("opacity",.2);
  $(".container svg #mese1").css("opacity",.5);
  $(".container svg #concerti2").css("opacity",.3);
},*/
function(){
  fascio= $(this).data("fascio");
  mese=$(this).data("mese");
  concerti=$(this).data("concerti");
  stop=$(this).data("stop");

  if(clicked == false){
  $(this).css("opacity",1);
  $(this).css("stroke-width",1);
  $(this).css("fill","black");

  $(".sezione4 svg #"+ fascio).css("opacity",.2);
  $(".sezione4 svg #"+ mese).css("opacity",.5);
  $(".sezione4 svg #"+ concerti).css("opacity",0.3);
  $(".sezione4 svg #stop").css("opacity",1);
  clicked = true;
  }
  else {
  $(this).css("opacity",1);
  $(this).css("fill","white");
  $(this).css("stroke-width",6);

  $(".sezione4 svg #"+ fascio).css("opacity",1);
  $(".sezione4 svg #"+ mese).css("opacity",1);
  $(".sezione4 svg #"+ concerti).css("opacity",1);

  $(".sezione4 svg #stop").css("fill","black");
  $(".sezione4 svg #stop").css("opacity",1);
  $(".sezione4 svg #stop").css("stroke-width",1);
  $(".sezione4 svg #maggio").css("opacity",.2);
  $(".sezione4 svg #mese1").css("opacity",.5);
  $(".sezione4 svg #concerti2").css("opacity",.3);
  clicked = false;
  }

  //console.log(clicked);
}
);

$("#stop").click(/*function(){
  fascio=$(this).data("fascio");
  $(this).css("opacity",1);
  $(this).css("fill","white");
  $(this).css("stroke-width",6);
  $(".container svg #"+ fascio).css("opacity",1);
  mese=$(this).data("mese");
  $(".container svg #"+ mese).css("opacity",1);
  concerti=$(this).data("concerti");
  $(".container svg #"+ concerti).css("opacity",1);
},*/
function(){
  fascio= $(this).data("fascio");
  mese=$(this).data("mese");
  concerti=$(this).data("concerti");
  stop=$(this).data("stop");
  if(clicked_stop == false){
  $(this).css("opacity",1);
  $(this).css("fill","white");
  $(this).css("stroke-width",6);
  $(".sezione4 svg #"+ fascio).css("opacity",1);
  $(".sezione4 svg #"+ mese).css("opacity",1);
  $(".sezione4 svg #"+ concerti).css("opacity",1);
  clicked_stop = true;
  }
  else{
    $(this).css("opacity",1);
    $(this).css("stroke-width",1);
    $(this).css("fill","black");
    $(".sezione4 svg #"+ fascio).css("opacity",.2);
    $(".sezione4 svg #"+ mese).css("opacity",.5);
    $(".sezione4 svg #"+ concerti).css("opacity",0.3);
    clicked_stop = false;
  }

}
);

});
