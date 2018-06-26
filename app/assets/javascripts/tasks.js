

function Task(attributes){
  this.name = attributes.name;
  this.id = attributes.id;
  this.user_id = attributes.user_id;
  this.status = attributes.status;
}

$(function(){
  $("#new_task").on("submit", function(e){
    url = this.action
    data = {
      'authenticity_token': $("input[name='authenticity_token']").val(),
      'task': {
        'user_id': $("#task_user_id").val(),
        'name': $("#task_name").val()
      }
    }
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: function(response){
      }
    })
    e.preventDefault();
  })
})

Task.prototype.status_function = function() {
    if (this.status == true) {
      return "Complete"
    } else {
      return "In Progress"
    };
}

task_count = 0;
$(function() {

    $.get(window.location.href + ".json").success((json) =>{
       if (task_count == 0){
         task = new Task(json[0])
         $("div.tasks_container").append("<h4>" + task.name + "</h4>");
         $("div.tasks_container").append("<h4>" + "Status:" + task.status_function() + "</h4>");
         $("div.tasks_container").append("<a href='" + "http://localhost:3000/users/" + task.user_id + "'>View User</a>");
       };
     });

     $(".next_task").on("click", (e) => {
       e.preventDefault();
       $.get(window.location.href + ".json").success((json) => {
        task_count += 1;
        if (json[task_count] == null) {
         task_count = 0;
        };
         task = new Task(json[task_count])
        $(".tasks_container").empty();
        $("div.tasks_container").html("<h4>" + task.name + "</h4>");
        $("div.tasks_container").append("<h4>" + "Status:" + task.status_function() + "</h4>");
        $("div.tasks_container").append("<a href='" + "http://localhost:3000/users/" + task.user_id + "'>View User</a>");
      });
   });
});



$(() => {
  $.get(window.location.href + ".json").success((json) => {
       $("div.task-index").append("<ul>");

       json.forEach((t) => {
         var task = new Task(t);
         $("div.task-index").append("<li>" + "<a href='" + window.location.href + "/tasks/" + task.id + "'>" + task.name + "</a>" + "</li>");
       });

       $("div.user-index").append("</ul>");
    });
});
