document.addEventListener("DOMContentLoaded", function () {
  // Referencias
  const addButton = document.querySelector("#addTaskButton");
  const input = document.querySelector("#taskinput");
  const tasksList = document.querySelector("#tasksList");

  addButton.addEventListener("click", function () {
    addTask(input.value);
    input.value = "";
  });

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(input.value);
      input.value = "";
    }
  });

  // task = Aprender Python
  function addTask(task) {
    if (task.trim() !== "") {
      // <li></li>
      const li = document.createElement("li");
      li.textContent = task; // <li>Aprender Python</li>
      // tasksList es ul

      tasksList.appendChild(li);
      // <ul>
      //   <li>Aprender Python</li>
      // </ul>
    } else {
        alert("debes agregar una tarea")
    }
  }
});
