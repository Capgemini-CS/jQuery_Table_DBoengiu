$("form").submit(function(e){
    e.preventDefault();
    var id = $("input[name='id']").val();
    var firstName = $("input[name='first-name']").val();
    var lastName = $("input[name='last-name']").val();
    var yearOfStudy = $("input[name='year-of-study']").val();
    var CNP = $("input[name='cnp']").val();
 
    $(".data-table tbody").append("<tr data-id='"+id+"' data-first-name='"+firstName+"' data-last-name='"+lastName+"'  data-year-of-study='"+yearOfStudy+"'  data-cnp='"+CNP+"' ><td>"+id+"</td><td>"+firstName+"</td><td>"+lastName+"</td><td>"+yearOfStudy+"</td><td>"+CNP+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

    $("input[name='id']").val('');
    $("input[name='first-name']").val('');
    $("input[name='last-name']").val('');
    $("input[name='year-of-study']").val('');
    $("input[name='cnp']").val('');
});

$("body").on("click", ".btn-delete", function(){
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function(){
    var id = $(this).parents("tr").attr('data-id');
    var firstName = $(this).parents("tr").attr('data-first-name');

    var lastName = $(this).parents("tr").attr('data-last-name');
    var yearOfStudy = $(this).parents("tr").attr('data-year-of-study');

    var cnp = $(this).parents("tr").attr('data-cnp');
    
    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_id" value="'+id+'">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_first_name" value="'+firstName+'">');

    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_last_name" value="'+lastName+'">');
    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_year_of_study" value="'+yearOfStudy+'">');

    $(this).parents("tr").find("td:eq(4)").html('<input name="edit_cnp" value="'+cnp+'">');
    

    $(this).parents("tr").find("td:eq(5)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function(){
    var id = $(this).parents("tr").attr('data-id');
    var firstName = $(this).parents("tr").attr('data-first-name');

    var lastName = $(this).parents("tr").attr('data-last-name');
    var yearOfStudy = $(this).parents("tr").attr('data-year-of-study');

    var cnp = $(this).parents("tr").attr('data-cnp');
    

    $(this).parents("tr").find("td:eq(0)").text(id);
    $(this).parents("tr").find("td:eq(1)").text(firstName);

    $(this).parents("tr").find("td:eq(2)").text(lastName);
    $(this).parents("tr").find("td:eq(3)").text(yearOfStudy);

    $(this).parents("tr").find("td:eq(4)").text(cnp);
    

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function(){
    var id = $(this).parents("tr").find("input[name='edit_id']").val();
    var firstName = $(this).parents("tr").find("input[name='edit_first_name']").val();

    var lastName = $(this).parents("tr").find("input[name='edit_last_name']").val();
    var yearOfStudy = $(this).parents("tr").find("input[name='edit_year_of_study']").val();

    var cnp = $(this).parents("tr").find("input[name='edit_cnp']").val();
    

    $(this).parents("tr").find("td:eq(0)").text(id);
    $(this).parents("tr").find("td:eq(1)").text(firstName);

    $(this).parents("tr").find("td:eq(2)").text(lastName);
    $(this).parents("tr").find("td:eq(3)").text(yearOfStudy);

    $(this).parents("tr").find("td:eq(4)").text(cnp);
   
 
    $(this).parents("tr").attr('data-id', id);
    $(this).parents("tr").attr('data-first-name', firstName);

    $(this).parents("tr").attr('data-last-name', lastName);
    $(this).parents("tr").attr('data-year-of-study', yearOfStudy);

    $(this).parents("tr").attr('data-cnp', cnp);
    

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});


// $('form[id="form"]').validate({
//     rules: {
//       firstName: {
//           required: true,
//           minlength: 2,
//           maxlength: 100
//       },
//       lastName: {
//           required: true,
//           minlength: 3,
//           maxlength: 100
//       },
//       cnp: {
//         required: true,
//         minlength: 13,
//         maxlength: 13,
//         digits: true
//       }
      
//     },
//     messages: {
//         firstName: {
//             required: 'This field is required',
//             minlength: 'First Name should be at least 2 characters long',
//             maxlength: 'First Name should not be longer than 100 characters'
//         },
//         lastName: {
//             required: 'This field is required',
//             minlength: 'Last Name should be at least 2 characters long',
//             maxlength: 'Last Name should not be longer than 100 characters'
//         },
//         cnp: {
//             required: 'This field is required',
//             minlength: 'CNP should be at least 13 characters long',
//             maxlength: 'CNP should not be longer than 13 characters',
//             digits: 'CNP should contain only numbers'
//         }
//     },
//     submitHandler: function(form) {
//       form.submit();
//     }
//   });