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

//add a <p> for each todo above. Use text value as the visible data.

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

const summary = document.createElement('h3')
summary.textContent = `You have ${incompleteTodos.length} left on your to do list.`

document.querySelector('body').appendChild(summary)

todos.forEach (function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})
