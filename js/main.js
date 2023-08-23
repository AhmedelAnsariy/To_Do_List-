let taskName = document.getElementById("taskName")
let taskTime = document.getElementById("taskTime")
let taskNotes = document.getElementById("taskNotes");


let tasksArr = [];


if(localStorage.getItem("tasks") != null){
    tasksArr = JSON.parse(localStorage.getItem("tasks"));
    displayTasks();
}



function AddTask (){
    var taskObject = {
        name : taskName.value,
        time : taskTime.value,
        note : taskNotes.value,
    };
if(taskName.value=="" || taskTime.value=="" || taskNotes.value==""){
    swal({
        title: "please fill all data",
        icon: "error",
      });
      return 0 ;
}else{
    swal({
        title: "Added",
        text: "The task is Add to your Daily plane ",
        icon: "success",
      });
    tasksArr.push(taskObject);
    localStorage.setItem("tasks",JSON.stringify(tasksArr));
    displayTasks ();
    deleteInputsForm();
}

  
}

function displayTasks(){
    let cartona = '';
    for (let i=0 ; i<tasksArr.length ; i++){
        cartona += `
        <tr>
                    <td class = "fs-5">${i+1}</td>
                    <td class = "fs-5">${tasksArr[i].name}</td>
                    <td class = "fs-5">${tasksArr[i].time}</td>
                    <td class = "fs-5">${tasksArr[i].note}</td>
                    <td><button class="btn btn-warning">Waiting</button></td>
                    <td><button class="btn btn-danger"  onclick = "delete_one_item()">Delete <i class="fa-solid fa-trash ms-3"></i></button></td>
                </tr>
        `
    }
    document.getElementById("demo").innerHTML = cartona;
}

function deleteInputsForm() {
    taskName.value = ""
    taskTime.value = ""
    taskNotes.value =""
}

function deleteAll(){

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            localStorage.clear("tasks");
            tasksArr = [];
            displayTasks();
            
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal({

            text: "Your imaginary file is safe!",

          })
        }
      });



}


function delete_one_item(index){
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            tasksArr.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasksArr));
            displayTasks();
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
}







