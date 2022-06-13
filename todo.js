let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

// let 

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => {
        console.log('response', response)
        return response.json()  
    })
    .then((data) => {
        console.log('data', data)
        arrayOfTodos = data
    })
}
const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    console.log('arrayOfTodos:', arrayOfTodos)
    let toDoList = document.getElementById("todo-list")
    let text = document.createElement("li")
    text.appendChild(document.createTextNode(arrayOfTodos[0].userId))
    toDoList.appendChild(text)
    
}