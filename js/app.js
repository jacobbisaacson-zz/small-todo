console.log("form inputs and to-to list");

// grab button with id #add-item
const addItemButton = document.querySelector('#add-item')

// add listener to the button that listens for 'click'
// and give it an AF to run
addItemButton.addEventListener('click', () => {
  console.log("the add item button was clicked");
})