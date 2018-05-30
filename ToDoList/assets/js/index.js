// Check off specific todo by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});


//click on X to delete todo
// 1. select span
// 2. stop bubble proporgation
// 3. use parent() to remove entire li
$("ul").on("click", "span",function() {
    $(this).parent().fadeOut()(500, function() {
    $(this).remove();
  });
  event.stopPropogation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    var todoText = $(this).val();
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
