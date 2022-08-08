// This is for the user home page so that a user may create/send a post to the site's database.
// This attempt was made to try and create a div within the html by clicking a button and has worded in the sense that it works but time constraints meant it was not worked on anymore

function addingPost() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "CLICK ME";
    document.body.appendChild(btn);
    btn.className = 'butn'
}