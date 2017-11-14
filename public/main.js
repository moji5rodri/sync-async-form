
$(document).ready(function () {
 //console.log("estoy listo");
 //alert("Hola");

  $('input[type="submit"]').on("click", function(event){
    event.preventDefault();

    var first_name = $('#first_name').val();

    $.ajax('find.html', {
      method: 'post',
      data: {
        'first_name': first_name
      }

    });

    var full_name = $('#full_name').val();
     $.post('find.html', {'full_name' : full_name});

    var gender = $('input[name="gender"]:checked').val();
    $.post('find.html', {'gender' : gender});

    var interest = $('input[name="interest"]:checked').val();
    $.post('find.html', {'interest' : interest});

  });

});