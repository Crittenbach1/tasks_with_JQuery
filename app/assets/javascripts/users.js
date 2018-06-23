
function User(attributes){
  this.email = attributes.email;
  this.id = attributes.id;
}

function showUsersTemplate(){
  Task.templateSource = $("#user-index-template").html();
  Task.template = Handlebars.compile(Task.templateSource);
}

User.prototype.renderLI = function() {
  return User.template(this)
}
