import { root } from "../../constants/root.js";
import "./Todo.css";

class Todo {
  render() {
    let htmlContent = "";

    htmlContent = `
		<main class="main">
			<div class="content">
				<div class="addTask">
					<h1 class="addTask__text">Enter the Task</h1>

					<form class="addTask__form">
						<input type="text" name="task" placeholder="Task" class="form__item"/>
						<input type="submit" value="Add" class="form__submit" />
					</form>
 
				</div>

				<div class="tasks">
      		<ul class="tasks__list">
						
      		</ul>
    		</div>
			</div>
		</main>
		`;
    root.innerHTML = htmlContent;
  }
}

export default new Todo();
