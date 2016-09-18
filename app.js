// $(function(){
//   $("#myList").on("submit", function(event){
//       event.preventDefault();
//       //console.log("it works");
//       var list = $("#myList").serializeArray();
//       // console.log(list);
//       // console.log(list[0]);
//       // console.log(list[0].value);
// $("#employeeDiv").append("<ul></ul>")
//       for(var it = 0; it <list.length; it ++){
//         $("ul").append("<br>" + list[it].value)
//       }
//       // $("ul").append();
//       // $(".removeButton").on("click", function(){
//       //   $(this).parent().parent().remove();
//       // })
// // console.log(event);//inactive due to console log below
//
//     });
//     $( '#employeeDiv' ).each(function(){
//         this.reset();
//     });
// })
// function addListItem() {
//     var textToAdd = $('.input').val();                    // The finish class is just for css styling
//     $('#list').append(textToAdd + '<button class="delete">Delete</button>');
//     $('.input').val('');
// }
//
// function deleteItem() {
//     $(this).parent().remove();
// }
// $( ".input" ).append();
$(document).ready(function() {
//     $('#add').on('click', addListItem);
//     $(document).on('click', '.delete', deleteItem);
// });
$('#submit').click(function() {
	var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var emailAddress = $("#emailAddress").val();
  var company = $("#company").val();
  var title = $("#title").val();
	var country = $("#country").val();
  var state = $("#state").val();
  var additional = $("#additional").val();


	$("#content ul").append('<li> First Name: ' + firstName + ' Last Name: ' + lastName + ' Email Address: ' + emailAddress + ' Company: ' + company + ' Title: ' + title + ', Country: ' + country + '  State: ' + state + ' Additional Comments? ' + additional + ' </li');
});
})
