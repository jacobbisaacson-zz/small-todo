console.log("form inputs and to-to list");

// grab button with id #add-item
const addItemButton = document.querySelector('#add-item')

// listen for 'submit' instead of 'click'
const itemAddingForm = document.querySelector('#item-adding-form')
itemAddingForm.addEventListener('submit', (event) => {
  event.preventDefault() // stops form submission
  // find the input
  const itemTextInput = document.querySelector('#item-text-input')
  // get the text
  // log that text in the console for now
  console.log(itemTextInput.value);
  // clear the form
  itemTextInput.value = ""

})


