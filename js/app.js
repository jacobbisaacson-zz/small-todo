console.log("form inputs and to-to list");

// grab button with id #add-item
const addItemButton = document.querySelector('#add-item')


const itemAddingForm = document.querySelector('#item-adding-form')
itemAddingForm.addEventListener('submit', (event) => {
  event.preventDefault() // stops form submission
  console.log("form submitted now");
})


