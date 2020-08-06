
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

function renderTodoApp() {
    let app = document.querySelector("#app")
    let h1 = document.createElement("h1")
    // your code here
    let toDoList = document.createElement("ul")
    toDoList.style.listStyleType = "none";
    
    for (let index = 0; index < todos.length; index++) {
        let listItem = todos[index];
        let check = listItem.completed;
        let listItemMarkup = `
        <li>
        <input type=checkbox name="finished" value="1"> 
        <label>${listItem.description}</label>
        </li>
        `;
        toDoList.innerHTML += listItemMarkup;
    }

    h1.innerText = "Todo List"

    app.appendChild(h1)
    // and maybe some here
    app.append(toDoList);
}

renderTodoApp();