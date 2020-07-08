const main = document.querySelector("#main-content")
console.log(main)

const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  //console.log(e.target) // problem: weird refresh happens here. Solution: use preventDefault()
  // below is the user's input
  const newTask = document.querySelector("#new-task-description").value
  // console.log(newTask).value
  // const taskItem = document.createElement("li")
  // taskItem.innerText = newTask // this line adds the text to the main page, "fosho"
  // debugger;
  // console.log(taskItem)
  // taskList.appendChild(taskItem)
  taskList.innerHTML += `
      <li> ${newTask}
      <button data-action="delete">remove</button>
      </li>`

      taskForm.reset()
});

taskList.addEventListener("click", function(e) {
  console.log(e.target)
  if(e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})

// document.addEventListener("DOMContentLoaded", () => {
//   let inputBox = document.querySelector("#new-task-description")
//   console.log(inputBox)
// });
