$(document).ready(function(){
  attachUsersListeners();
});

function attachUsersListeners(){
  if(window.location.href.indexOf("/users") != -1){
    loadUsers();
  };
};


class User {

    constructor(attributes){
      this.email = attributes.email;
      this.id = attributes.id;
    }

}

function loadUsers() {
  $.get(window.location.href + ".json").success((json) => {
       $("div.user-index").append("<ul>");

       json.forEach((u) => {
         let user = new User(u);
         $("div.user-index").append("<li>" + "<a href='" + window.location.href + "/" + user.id + "'>" + user.email + "</a>" + "</li>");
       });

       $("div.user-index").append("</ul>");
    });
};
