// check off
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});
//delete
$("ul").on("click", "span", function(event){

  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
})

//handle inputs
$("input[type='text']").keypress(function(event)
{
  if(event.which === 13){
    var t=$(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+t+"</li>");
  }
})

// add
$("#plus").click(function(){
  $("input[type ='text']").fadeToggle(200);
})
