
$(document).ready(function () {
 //console.log("estoy listo");
 //alert("Hola");

  $('input[type="submit"]').on("click", function(event){
    event.preventDefault();

    var first_name = $('#first_name').val();
    var full_name = $('#full_name').val();
    var gender = $('input[name="gender"]:checked').val();
    var interest = $('input[name="interest"]:checked');
    var interests = new Array();

    for (var i = 0;i < interest.length; i++) {
      var temp_interest = interest[i];
      interests.push(temp_interest.value);
    }


    var payload = {
      'first_name' : first_name,
      'full_name' : full_name,
      'gender' : gender,
      'interests' : interests
    }

    $.post("find.html", payload);


    /*


    $.get('find.html', {
      'first_name' : first_name,
      'full_name' : full_name,
      'gender' : gender,
      'interest' : interest
    });

    $.post('find.html', {
      'first_name' : first_name,
      'full_name' : full_name,
      'gender' : gender,
      'interest' : interest
    });*/



  });

});

