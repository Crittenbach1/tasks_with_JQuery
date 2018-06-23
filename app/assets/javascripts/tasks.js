

function Task(attributes){
  this.name = attributes.name;
  this.id = attributes.id;
}







$(function() {
  $.get(window.location.href + ".json").success(function(json){
       $("div.task-index").append("<ul>");

       json.forEach(function(t){
         var task = new Task(t);
         $("div.task-index").append("<li>" + "<a href='" + window.location.href + "/tasks/" + task.id + "'>" + task.name + "</a>" + "</li>");
       });

       $("div.user-index").append("</ul>");
    });
});
