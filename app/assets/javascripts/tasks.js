$(document).ready(function(){
  attachTasksListeners();
});

function attachTasksListeners(){
  let task_count = 0;
  $("#new_task").on("submit", newTask);
  $(".next_task").on("click", nextTask);

  if(window.location.href.indexOf("/users/") != -1){
    loadUserTasks();
  };
};

class Task {
  constructor(attributes){
    this.name = attributes.name;
    this.id = attributes.id;
    this.user_id = attributes.user_id;
    this.status = attributes.status;
  }

  status_function () {
      if (this.status == true) {
        return "Complete"
      } else {
        return "In Progress"
      };
  }
}


function newTask(e) {
    let url = this.action
    let data = {
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
  }

let task_count = 0;

function nextTask(e) {
  e.preventDefault();
  $.get(window.location.href + ".json").success((json) => {
          if (json[task_count] == null) {
             task_count = 0;
          };

          let task = new Task(json[task_count])
          $(".tasks_container").empty();
          $("div.tasks_container").html("<h4>" + task.name + "</h4>");
          $("div.tasks_container").append("<h4>" + "Status:" + task.status_function() + "</h4>");
          $("div.tasks_container").append("<a href='" + "http://localhost:3000/users/" + task.user_id + "'>View User</a>");
          task_count += 1;
   });
}





function loadUserTasks(e) {

   $.get(window.location.href + ".json").success((json) => {
       $("div.task-index").append("<ul>");

       json.forEach((t) => {
         let task = new Task(t);
         $("div.task-index").append("<li>" + "<a href='" + window.location.href + "/tasks/" + task.id + "'>" + task.name + "</a>" + "</li>");
       });

       $("div.task-index").append("</ul>");
    });
  };
