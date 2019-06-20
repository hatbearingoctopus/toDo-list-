
//convert array to array of objects
const toDos = [{
  text: 'learn JS',
  completed: true
  },
  {
  text: 'enjoy family',
  completed: true
  },
  {
  text: 'practice art', 
  completed: false
  },
  {
  text: 'workout', 
  completed: true
  },
  {
  text: 'sleep',
  completed: false
  }]

//create function that works with array of objects that allows us to remove a todo by text value

const deleteTodo = function (toDos, todoText) {
  const index = toDos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })
  if (index > -1) {
    toDos.splice(index, 1)
  }
}

deleteTodo(toDos, 'sleep')
console.log(toDos)
