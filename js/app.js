class ToDo {
  constructor(itemContent) {
    // text of the to-do item
    this.itemContent = itemContent
    // pop a timestamp on there
    this.time = new Date()
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
      // and append it to the 'ul'
      ul.appendChild(li)
    }
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


