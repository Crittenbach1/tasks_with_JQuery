
function User(attributes){
  this.email = attributes.email;
  this.id = attributes.id;
}



$(() => {
  $.get(window.location.href + ".json").success((json) => {
       $("div.user-index").append("<ul>");

       json.forEach((u) => {
         var user = new User(u);
         $("div.user-index").append("<li>" + "<a href='" + window.location.href + "/" + user.id + "'>" + user.email + "</a>" + "</li>");
       });

       $("div.user-index").append("</ul>");
    });
});
