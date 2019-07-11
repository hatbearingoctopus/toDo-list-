
let todos = []

const filters = {
  searchText: '',
  hideCompleted: false
}

//Check for existing saved data
const todosJSON = localStorage.getItem('todos') 

//check if any data is in there. Use and parse any data
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON)
}

//figures out which todo matches the filter
const renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  
  filteredTodos = filteredTodos.filter(function (todo) {
    //option one
    return !filters.hideCompleted || !todo.completed
    //option two
    // if (filters.hideCompleted) {
    //     return !todo.completed 
    // } else {
    //    return true
    // }
  })

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })
  
  document.querySelector('#todos').innerHTML = ''

  const summary = document.createElement('h3')
  summary.textContent = `You have ${incompleteTodos.length} left on your to do list.`
  document.querySelector('#todos').appendChild(summary)

filteredTodos.forEach(function (todo) {
  const todoEl = document.createElement('p')
  todoEl.textContent = todo.text
  document.querySelector('#todos').appendChild(todoEl)
})
}

renderTodos(todos, filters)

//updates filter object
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

//event listener for the submit, pushes entered todo to todos array, prevents default, re-renders todos with current filters and removes previously entered item on submit
document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()

  todos.push({
    text: e.target.elements.text.value,
    completed: false
  })
  localStorage.setItem('todos', JSON.stringify(todos))

  renderTodos(todos, filters)
  e.target.elements.text.value = ''
})

//event listener to hide completed todos when checkbox is clicked
document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})
 
