$(function(){
  $("#myList").on("submit", function(event){
      event.preventDefault();
      //console.log("it works");
      var list = $("#myList").serializeArray();
      // console.log(list);
      // console.log(list[0]);
      // console.log(list[0].value);
$("#employeeDiv").append("<ul></ul>")
      for(var it = 0; it < list.length; it ++){
        $("ul").append("<li>" + list[it].value + "</li>")
      }
      $("ul").append();
      // $(".removeButton").on("click", function(){
      //   $(this).parent().parent().remove();
      // })
// console.log(event);//inactive due to console log below
    });
})
