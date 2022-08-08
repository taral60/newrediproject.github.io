
// This is for the add a project page, and what this is used for is so that any field that requires soley numbers will run this code
// to force the input to only display AKA allow you to type in numbers to not mess up the database.




function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
   if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}