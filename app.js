
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

	$("#content ul").append('<li> First Name: ' + firstName + ' </li>' + ' <li> Last Name: ' + lastName + ' </li>' + ' <li> Email Address: ' + emailAddress + ' </li>' + '<li> Company: ' + company + '</li>' + ' <li> Title: ' + title + '</li>' +'<li> Country: ' + country + '</li>' + '<li> State: ' + state + '</li>' + '<li> Additional Comments? ' +  additional + ' </li>');
  });

  $("#removeButton").on("click", function(){
    $("#content").hide();
  })
})
