class ToDo {
  constructor(itemContent) {
    // text of the to-do item
    this.itemContent = itemContent
    // pop a timestamp on there
    this.time = new Date()
    this.completed = false
  }
  markCompleted() {
    // method changes the value of the boolean
    this.completed = true
  }
}

const app = {
  todos: [], // instantiated to-do's live in here
  addTodo: function(str) {
    // instantiate a ToDo
    const todo = new ToDo(str)
    // push into the array
    this.todos.push(todo)
    this.printTodos()
  },

  printTodos: function() {
    // grab the 'ul'
    const ul = document.querySelector('#todo-list')
    // delete the old 'li's'
    ul.innerHTML = ""
    // loop over this.todos (could also use map)
    for(let i = 0; i < this.todos.length; i++) {
      let todo = this.todos[i]
      // create an 'li'
      const li = document.createElement('li')
      // set the text
      li.innerText = todo.itemContent
      // store array index directly in the tag (HTML)
      li.dataset.todoIndex = i
      // if statement for text completed (adding line through it)
      if(todo.completed) {
        li.style.textDecoration = "line-through"
      }
      // and append it to the 'ul'
      ul.appendChild(li)
    }
  },

  markComplete: function(indexOfTaskToComplete) {
    const todo = this.todos[indexOfTaskToComplete]
    todo.markCompleted()
    this.printTodos()
  }
}

// listen for 'submit' instead of 'click'
const itemAddingForm = document.querySelector('#item-adding-form')
itemAddingForm.addEventListener('submit', (event) => {
  event.preventDefault() // stops form submission
  // find the input
  const itemTextInput = document.querySelector('#item-text-input')
  // call app.addTodo, pass in text from input field to test
  app.addTodo(itemTextInput.value)
  // clear the form
  itemTextInput.value = ""

})

// adding listener to mark completed (dbl click)
const toDoUl = document.querySelector('#todo-list')
toDoUl.addEventListener('dblclick', (event) => {
  // access the array index here
  const indexOfItemClicked = event.target.dataset.todoIndex
  app.markComplete(indexOfItemClicked)
})

const container = document.querySelector('#container')
container.addEventListener('click', (event) => {
})


