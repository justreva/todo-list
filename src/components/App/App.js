import "./App.css";
import Todo from "../Todo/Todo.js";
import Tasks from "../Tasks/Tasks.js";
export let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

class App {
  render() {
    Todo.render();
    let taskList = document.querySelector(".tasks__list");
    const taskForm = document.querySelector(".addTask__form");
    taskForm.addEventListener("submit", setTasks);

    if (tasks.length > 0) {
      Tasks.renderTask(taskList, tasks);
    } else {
      Tasks.renderEmpty(taskList);
    }

    function setTasks(e) {
      e.preventDefault();

      const taskName = e.target.task.value;

      const task = {
        name: taskName,
        isDone: false,
      };
      tasks.push(task);

      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();

      e.target.reset();
    }

    function renderTasks() {
      Tasks.renderTask(taskList, tasks);

      completeTask();
      removeTask();
    }

    function completeTask() {
      let completeButtons = document.querySelectorAll(".btn__complete");
      completeButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
          let element = e.target.parentNode.dataset.index;
          if (element) {
            tasks[element].isDone = !tasks[element].isDone;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
          }
        });
      });
    }

    function removeTask() {
      let deleteButtons = document.querySelectorAll(".btn__delete");
      deleteButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
          let element = e.target.parentNode.dataset.index;
          if (element) {
            tasks.splice(element, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
          }
        });
      });
    }

    removeTask();
    completeTask();
  }
}

export default new App();
