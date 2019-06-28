const todos = [{
  text: 'Practice coding',
  completed: true
},
{
  text: 'Do splits stretching',
  completed: false
},
{
  text: 'Shear rabbits for summer',
  completed: false
},
{
  text: 'Clean chicken coop',
  completed: false
},
{
  text: 'Take Alice to swim lessons',
  completed: true
}]

const filters = {
  searchText: ''
}

//figures out which todo matches the filter
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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

//listen for new todo creation
document.querySelector('#add-todo-btn').addEventListener('click', function (e) {
  console.log('learning about those click events yo!')
})

//listen for todo text change
document.querySelector('#add-new-todo').addEventListener('input', function (e) {
  console.log(e.target.value)
})

//updates filter object
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})


 
