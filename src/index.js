
let todos = [
    {
        completed: false,
        description: "Take Jim to the hair salon"
    },
    {
        completed: true,
        description: "Drop off wedding invitation at mailbox"
    },
    {
        completed: false,
        description: "Pick up the cake"
    },
    {
        completed: false,
        description: "Call the caterers"
    }
];
let app = document.querySelector("#app")
    let h1 = document.createElement("h1")
    // your code here
    let toDoList = document.createElement("ul")
    toDoList.style.listStyleType = "none";
    app.appendChild(h1);
    // and maybe some here
    app.append(toDoList);
let newTaskSubmit = document.querySelector("#new-task-submit")
        let newTask = document.querySelector("#new-task")
        newTaskSubmit.onsubmit = (e) => {
            e.preventDefault();
            todos.push({
                completed: false,
                description: `${newTask.value}`
            });
            return renderTodoApp(todos);
        }

function renderTodoApp() {
    toDoList.innerHTML = "";
    for (let index = 0; index < todos.length; index++) {
        let listItem = todos[index];
        let check = listItem.completed;
        let listItemMarkup = `
        <li>
        <input type=checkbox name="finished" value="1" ${(listItem.completed) ? "checked" : ""}> 
        <label>${listItem.description}</label>
        </li>
        `;
        toDoList.innerHTML += listItemMarkup;
    }
    h1.innerText = "Todo List"    
}

renderTodoApp();