
function User(attributes){
  this.email = attributes.email;
  this.id = attributes.id;
}

function showUsersTemplate(){
  User.templateSource = $("#user-index-template").html();
  User.template = Handlebars.compile(User.templateSource);
}

User.prototype.renderLI = function() {
  return User.template(this)
}


$(function() {
  $.get(window.location.href + ".json").success(function(json){
       $("div.user-index").append("<ul>");

       json.forEach(function(u){
         var user = new User(u);
         $("div.user-index").append("<li>" + "<a href='" + window.location.href + "/" + user.id + "'>" + user.email + "</a>" + "</li>");
       });

       $("div.user-index").append("</ul>");
    });
});
