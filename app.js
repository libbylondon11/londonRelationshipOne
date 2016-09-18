$(document).ready(function() {

$('#submit').click(function() {
	var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var emailAddress = $("#emailAddress").val();
  var company = $("#company").val();
  var title = $("#title").val();
	var country = $("#country").val();
  var state = $("#state").val();
  var additional = $("#additional").val();


	$("#content ul").append('<li> First Name  ' + firstName  + ' Last Name ' + lastName + ' Email Address ' + emailAddress + ' Company ' + company + ' Title ' + title + ', Country ' + country + '  State ' + state + ' Additional Comments? ' + additional + ' </li');
});
})
